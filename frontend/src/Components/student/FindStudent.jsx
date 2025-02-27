import { useEffect, useState, useCallback } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router";
import axios from "axios";

function FindStudent() {
  const [studentList, setStudentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/student/all');
      setStudentList(data.data);
      setFilteredList(data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSearch = (key, value) => {
    if (!value) {
      setFilteredList(studentList);
      return;
    }

    const filtered = studentList.filter(student =>
      String(student[key]).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  // eslint-disable-next-line react/prop-types
  const TableHeader = ({ label }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {label}
    </th>
  );

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto mt-10">
          <p className="text-3xl font-semibold mb-10">Student</p>
          <div className="my-10 flex flex-row gap-3">
            <Link to='/AdminDashboard'>Home</Link>
            <p>{'>'}</p>
            <Link>Student</Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-blue-600">
              <h2 className="text-xl font-semibold text-white">All Students Data</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {['name', 'class'].map(field => (
                  <input
                    key={field}
                    type="text"
                    placeholder={`Search by ${field.charAt(0).toUpperCase() + field.slice(1)} ...`}
                    className="border rounded-md px-3 py-2"
                    onChange={(e) => handleSearch(field, e.target.value)}
                  />
                ))}
              </div>

              <div className="overflow-x-auto"></div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Roll', 'Photo', 'Name', 'Gender', 'Class', 'Section', 'Parents', 'Address', 'Date Of Birth', 'Phone', 'E-mail'].map(header => (
                        <TableHeader key={header} label={header} />
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredList.map((student, index) => (
                      <tr key={student.roll || index}>
                        {['roll', 'photo', 'name', 'gender', 'class', 'section', 'parent', 'address', 'date_of_birth', 'phone', 'email'].map(field => (
                          <td key={field} className="px-6 py-4 whitespace-nowrap">
                            {field === 'photo' ? <img src={student[field]} alt="" /> : student[field]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FindStudent;
