import { useEffect, useState, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import axios from "axios";

function AllTeachers() {
  const [teacherList, setTeacherList] = useState([]);
  const [filteredTeacherList, setFilteredTeacherList] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:3000/teachers/all');
      setTeacherList(res.data.data);
      setFilteredTeacherList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSearch = (key, value) => {
    if (!value) {
      setFilteredTeacherList(teacherList);
      return;
    }

    const filtered = teacherList.filter(teacher =>
      String(teacher[key]).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTeacherList(filtered);
  };

  // eslint-disable-next-line react/prop-types
  const TableHeader = ({ label }) => (
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {label}
    </th>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10 bg-gray-50 h-screen">
          <p className="text-3xl font-semibold">Teachers</p>
          <div className="flex justify-start gap-2 flex-row mt-5 mb-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Teacher</Link>
          </div>
          <div className="">
            <p className="py-5 text-white px-10 text-2xl font-semibold bg-blue-500 rounded-t-lg">
              All Teachers
            </p>
          </div>
          <div className="p-10 bg-white rounded-b-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {['name',"email"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={`Search by ${field.charAt(0).toUpperCase() + field.slice(1)} ...`}
                  className="border rounded-md px-3 py-2"
                  onChange={({ target: { value } }) => handleSearch(field, value)}
                />
              ))}
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-2 border">
              <thead>
                <tr className="bg-gray-100">
                  {['ID', 'Name', 'Gender', 'Date of Birth', 'Blood Group', 'Religion', 'Address', 'Phone', 'Email'].map(header => (
                    <TableHeader key={header} label={header} />
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeacherList.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.date_of_birth}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.religion}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTeachers;
