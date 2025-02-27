import { FaSchool } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiExam, PiNotificationDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import { store } from "../../utils/store";
import { TiMessages, TiRefreshOutline } from "react-icons/ti";
import { IoChevronDownCircleOutline, IoLibraryOutline } from "react-icons/io5";
import { FaHandPaper } from "react-icons/fa";

const Sidebar = () => {
    const navigate = useNavigate();
    const Library = (value) => {
        navigate(value);
    }

    const Class = (value) => {
        navigate(value);
    }

    return (
        <div className="flex flex-col sticky top-20 bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg pt-8">
            <div className="w-64 sticky h-screen overflow-y-auto">
                <div className="mb-6">
                    <div className="flex items-center justify-center">
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="user" className="w-16 h-16 rounded-full border-2 border-white shadow-xl" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-white text-lg font-semibold">{store.getState().role.value}</h1>
                        <h1 className="text-gray-400 text-sm font-semibold">{store.getState().name.value}</h1>
                    </div>
                </div>
                {[
                    { to: "/StudentDashboard", icon: <MdDashboard size={24} />, text: "Dashboard" },
                    { to: "/notice", icon: <PiNotificationDuotone size={24} />, text: "Notice" },
                    { to: "/attendance", icon: <FaHandPaper size={24} />, text: "Attendence" },
                    { to: "/exam-schedule", icon: <PiExam size={24} />, text: "Exam Schedule" },
                    { to: "/routine", icon: <PiExam size={24} />, text: "Routine" },
                    { to: "/hostel", icon: <FaSchool size={24} />, text: "Hostel" },
                    { to: "/message", icon: <TiMessages size={24} />, text: "Message" },
                    { to: "/Result", icon: <TiRefreshOutline size={24} />, text: "Result" }
                ].map((item, index) => (
                    <Link key={index} to={item.to} className="block">
                        <div className="p-3 flex items-center gap-3 hover:bg-gray-700/50 rounded-md mx-2 transition duration-300 ease-in-out">
                            <span className="text-gray-300">{item.icon}</span>
                            <h1 className="text-gray-200 text-base font-medium">{item.text}</h1>
                        </div>
                    </Link>
                ))}
                <div className="px-2 space-y-2">
                    {/* Student Section */}
                    <div className="group relative">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50">
                            <FaSchool className="flex-shrink-0 w-5 h-5 text-gray-400" />
                            <select
                                onChange={(e) => Class(e.target.value)}
                                className="w-full bg-transparent text-gray-200 focus:outline-none appearance-none py-1.5 text-sm cursor-pointer"
                                aria-label="Student management"
                            >
                                <option value="" className="text-gray-900">Student</option>
                                <option value="/StudentAdmissionForm" className="text-gray-900">Student Admission Form</option>
                                <option value="/FindStudent" className="text-gray-900">All Students</option>
                                <option value="/StudentPromotion" className="text-gray-900">Student Promotion Form</option>
                            </select>
                        </div>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <IoChevronDownCircleOutline className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Teacher Section */}
                    <div className="group relative">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50">
                            <MdDashboard className="flex-shrink-0 w-5 h-5 text-gray-400" />
                            <select
                                onChange={(e) => Class(e.target.value)}
                                className="w-full bg-transparent text-gray-200 focus:outline-none appearance-none py-1.5 text-sm cursor-pointer"
                                aria-label="Teacher management"
                            >
                                <option value="" className="text-gray-900">Teacher</option>
                                <option value="/AddTeacher" className="text-gray-900">Add Teacher</option>
                                <option value="/AllTeachers" className="text-gray-900">All Teachers</option>
                            </select>
                        </div>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <IoChevronDownCircleOutline className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Library Section */}
                    <div className="group relative">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50">
                            <IoLibraryOutline className="flex-shrink-0 w-5 h-5 text-gray-400" />
                            <select
                                onChange={(e) => Library(e.target.value)}
                                className="w-full bg-transparent text-gray-200 focus:outline-none appearance-none py-1.5 text-sm cursor-pointer"
                                aria-label="Library management"
                            >
                                <option value="" className="text-gray-900">Library</option>
                                <option value="/Addbook" className="text-gray-900">Add Books</option>
                                <option value="/BookList" className="text-gray-900">All Books</option>
                            </select>
                        </div>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <IoChevronDownCircleOutline className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Class Section */}
                    <div className="group relative">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50">
                            <FaSchool className="flex-shrink-0 w-5 h-5 text-gray-400" />
                            <select
                                onChange={(e) => Class(e.target.value)}
                                className="w-full bg-transparent text-gray-200 focus:outline-none appearance-none py-1.5 text-sm cursor-pointer"
                                aria-label="Class management"
                            >
                                <option value="" className="text-gray-900">Class</option>
                                <option value="/AddClass" className="text-gray-900">Add Class</option>
                                <option value="/classList" className="text-gray-900">All Classes</option>
                            </select>
                        </div>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <IoChevronDownCircleOutline className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
