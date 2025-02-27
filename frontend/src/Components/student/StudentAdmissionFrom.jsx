import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router";
import axios from "axios";

function StudentAdmissionForm() {
  const [formData, setFormData] = useState([
    {
      name: "",
      date_of_birth: "",
      roll: "",
      email: "",
      gender: "",
      class: "",
      section: "",
      parent: "",
      phone: "",
      religion: "",
      address: "",
    },
  ]);

  const classes_list = [5, 6, 7, 8, 9, 10, 11, 12];
  const sections = ["A", "B", "C"];
  const religions = ["Hindu", "Islam", "Christian"];

  const handleResetwithoutRefresh = () => {
    setFormData({
      name: "",
      date_of_birth: "",
      roll: "",
      email: "",
      gender: "",
      class: "",
      section: "",
      parent: "",
      phone: "",
      religion: "",
      address: "",
    });
  };

  const saveDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/student/add",
        formData
      );
      if (res.status === 200) {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
    setFormData({
      name: "",
      date_of_birth: "",
      roll: "",
      email: "",
      gender: "",
      class: "",
      section: "",
      parent: "",
      phone: "",
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
          <p className="text-3xl font-semibold">Student</p>
          <div className="mb-10 mt-5 flex flex-row gap-3">
            <Link to="/AdminDashboard">Home</Link>
            <p>{">"}</p>
            <Link>Student</Link>
          </div>
          <div className="w-5/6 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-blue-600">
                <h2 className="text-xl font-semibold text-white">
                  Add New Students
                </h2>
              </div>

              <form onSubmit={saveDetails} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { label: "Name", name: "name" },
                    {
                      label: "Date of Birth",
                      name: "date_of_birth",
                      type: "date",
                    },
                    { label: "Roll", name: "roll" },
                    { label: "E-Mail", name: "email", type: "email" },
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
                        value={formData[name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [name]: e.target.value })
                        }
                        required={name !== "roll"}
                        className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}

                  {/* Gender Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Blood Group Select */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.blood_group}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          blood_group: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="classes"
                      value={formData.classes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          class: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Class</option>
                      {classes_list.map((cls, index) => (
                        <option key={index} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Section <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.Section}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          section: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Section</option>
                      {sections.map((sec, index) => (
                        <option key={index} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Parent <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      // name={}
                      value={formData.parant}
                      onChange={(e) =>
                        setFormData({ ...formData, parent: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      // name={}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Religion<span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.religion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          religion: e.target.value,
                        })
                      }
                      required
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Please Select Religion</option>
                      {religions.map((religion, index) => (
                        <option key={index} value={religion}>
                          {religion}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    // name={}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                    className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Short Bio */}
                <div className="flex flex-row gap-5">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Short BIO
                    </label>
                    <textarea
                      name="shortBio"
                      value={formData.shortBio}
                      onChange={(e) =>
                        setFormData({ ...formData, shortBio: e.target.value })
                      }
                      rows={4}
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Student Photo
                    </label>
                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, photo: e.target.files[0] })
                      }
                      className="mt-1 block w-full py-3 border-b-2 outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      type="file"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="py-3 px-10 bg-yellow-600 text-xl text-white rounded-md shadow-sm hover:bg-yellow-700"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    onClick={handleResetwithoutRefresh}
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

export default StudentAdmissionForm;
