import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import axios from "axios";

function StudentPromotion() {
  const classes = [5, 6, 7, 8, 9, 10, 11, 12];
  const sections = ["A", "B", "C"];
  const [studentList, setStudentList] = useState([
    
  ]);
  const [name, setName] = useState("");

  const [oldDetails, setOldDetails] = useState({
    StudentClass: "",
    StudentSection: "",
    StudentRoll: "",
  });
  const [newDetails, setNewDetails] = useState({
    StudentClass: "",
    StudentSection: "",
    StudentRoll: "",
  });

  const searchHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/student/find/${name}`
      );
      const data = res.data;
      setStudentList(data);
      console.log(studentList);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen flex flex-col bg-gray-200">
        <Header />
        <div className="w-full h-full p-10">
          <p className="text-3xl font-semibold mb-10">Student</p>
          <div className="flex flex-row gap-2 mb-10 text-lg">
            <Link to="./AdminDashboard">Home</Link>
            <p>{">"}</p>
            <Link className="text-blue-600">Student Promotion</Link>
          </div>
          <div className="px-10">
            <form onSubmit={searchHandel} className="">
              <p className="text-2xl font-semibold bg-blue-600 text-white p-3 rounded-t-xl">
                Search Student Promotion
              </p>
              <div className="bg-white rounded-b-xl p-5 px-10">
                <p>Find Student</p>
                <div className="flex flex-row">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Student Name"
                    className="w-1/3 mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    type="text"
                  />
                  <button
                    onClick={searchHandle}
                    type="submit"
                    className="mx-5 bg-yellow-500 text-white px-10 font-semibold py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
                  >
                    Search
                  </button>
                </div>

                {studentList.length < 0 ? (
                  <div>
                    {studentList.map((student, index) => (
                      <div key={index}>
                        <p>{student.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-10">
                    <p>No Records</p>
                  </div>
                )}
              </div>
            </form>

            <form className="flex flex-col w-full p-10 mt-10 bg-white rounded-lg">
              <div className="flex flex-row w-full justify-between gap-3">
                <div className="w-1/3">
                  <p>Current Class</p>
                  <input
                    readOnly
                    value={oldDetails.StudentClass}
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    type="number"
                  />
                </div>
                <div className="w-1/3">
                  <p>Current Section</p>
                  <input
                    readOnly
                    value={oldDetails.StudentSection}
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    type="text"
                  />
                </div>
                <div className="w-1/3">
                  <p>Current Roll</p>
                  <input
                    readOnly
                    value={oldDetails.StudentRoll}
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-3 mt-10">
                <div className="w-1/3">
                  <p>New Class</p>
                  <select
                    onChange={(e) =>
                      setNewDetails({
                        ...newDetails,
                        StudentClass: e.target.value,
                      })
                    }
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls, index) => (
                      <option key={index} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/3">
                  <p>New Section</p>
                  <select
                    onChange={(e) =>
                      setNewDetails({
                        ...newDetails,
                        StudentSection: e.target.value,
                      })
                    }
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Section</option>
                    {sections.map((cls, index) => (
                      <option key={index} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/3">
                  <p>New Roll</p>
                  <input
                    className="w-full mt-1 block py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    type="number"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPromotion;
