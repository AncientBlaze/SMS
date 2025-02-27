import  { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import axios from "axios";

function AddTeacher() {
  const bloodGroupList = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const religions = ["Hindu", "Islam", "Christian", "Buddhist", "Jain", "Sikh", "Parsi", "Jewish", "Bahai", "Others"];
  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    date_of_birth: "",
    id: "",
    email: "",
    phone: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/teachers/add",
        teacherDetails
      );
      setTeacherDetails({
        name: "",
        date_of_birth: "",
        id: "",
        email: "",
        phone: "",
        gender: "",
        bloodGroup: "",
        religion: "",
        address: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setTeacherDetails({
      name: "",
      date_of_birth: "",
      id: "",
      email: "",
      phone: "",
      gender: "",
      bloodGroup: "",
      religion: "",
      address: "",
    });
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-screen h-full min-h-screen bg-gray-50">
        <Header />

        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-3xl font-semibold">Teacher</p>
          <div className="mb-10 mt-5 flex flex-row gap-3">
            <Link to="/AdminDashboard">Home</Link>
            <p>{">"}</p>
            <Link>Teacher</Link>
          </div>
          <div className="w-5/6 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-blue-600">
                <h2 className="text-xl font-semibold text-white">
                  Add New Teacher
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { label: "Name", name: "name" },
                    {
                      label: "Date of Birth",
                      name: "date_of_birth",
                      type: "date",
                    },
                    { label: "ID No", name: "id" },
                    { label: "E-Mail", name: "email", type: "email" },
                    { label: "Phone", name: "phone", type: "tel" },
                  ].map(({ label, name, type = "text" }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700">
                        {label}{" "}
                        {name !== "roll" && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={teacherDetails[name]}
                        onChange={(e) =>
                          setTeacherDetails({
                            ...teacherDetails,
                            [name]: e.target.value,
                          })
                        }
                        required={name !== "roll"}
                        className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}

                  <div className="block text-sm font-medium text-gray-700">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      name="gender"
                    >
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      onChange={(e) =>
                        setTeacherDetails({
                          ...teacherDetails,
                          gender: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="block text-sm font-medium text-gray-700">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      name="gender"
                    >
                      Blood Group<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      onChange={(e) =>
                        setTeacherDetails({
                          ...teacherDetails,
                          bloodGroup: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroupList.map((bloodGroup) => (
                        <option key={bloodGroup} value={bloodGroup}>
                          {bloodGroup}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="block text-sm font-medium text-gray-700">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      name="gender"
                    >
                      Religion<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      onChange={(e) =>
                        setTeacherDetails({
                          ...teacherDetails,
                          religion: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Religion</option>
                      {religions.map((religian, index) => (
                        <option key={index} value={religian}>
                          {religian}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      name="gender"
                    >
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      value={teacherDetails.address}
                      onChange={(e) =>
                        setTeacherDetails({
                          ...teacherDetails,
                          address: e.target.value,
                        })
                      }
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-5">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Short BIO
                    </label>
                    <textarea
                      value={teacherDetails.shortBio}
                      // onChange={(e) =>
                      //   setTeacherDetails({ ...teacherDetails, shortBio: e.target.value })
                      // }
                      rows={4}
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Teacher Photo
                    </label>
                    <input
                      //onChange={(e) => setTeacherDetails({ ...teacherDetails, photo: e.target.files[0] })}
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      type="file"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="py-3 px-10 bg-yellow-600 text-xl text-white rounded-md shadow-sm hover:bg-yellow-700"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-10 bg-blue-900 text-xl text-white rounded-md shadow-sm hover:bg-blue-800"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
