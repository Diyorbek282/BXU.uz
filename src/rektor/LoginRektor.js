import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";
import ApiCall from "../config/index";

const LoginStudent = () => {
    const [adminData, setAdminData] = useState({ login: '', password: '' });
    const navigate = useNavigate();

    const handleAdminChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
    };


    const handleAdminSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await ApiCall('/api/v1/app/staff/login', 'POST', adminData, null, false); // false indicates not using multipart/form-data
            localStorage.removeItem("token");
            console.log(response.data)
            if (response.data.role==="ROLE_STAFF") {
                localStorage.setItem("token", response.data.token);
                navigate("/rector/subjects-statistics")
            } else {
              navigate("/")
            }

        } catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                toast.error("Login yoki parol noto'g'ri", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                // Optional: Handle other errors
                toast.error("Serverda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
            <Header />
            <ToastContainer />
            <section className="pt-24 mt-0 sm:pt-36 md:pt-40 lg:pt-28">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div>
                        <div aria-hidden="true"
                             className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                            <div
                                className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                            <div
                                className="h-40 bg-gradient-to-r from-cyan-600 to-sky-500 blur-[106px] dark:to-indigo-600"></div>
                        </div>
                        <div className="items-center gap-12 lg:flex justify-center pb-4">

                            <div
                                className="relative rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-8">
                                <div className="flex m-auto text-center">
                                    {/* Logo can be added here */}
                                </div>

                                <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white">Tizimga kirish.</h2>

                                <form onSubmit={handleAdminSubmit} className="mt-4 p-10 pt-0">
                                    <div>
                                        <h2 className={"text-center text-xl font-bold"}>Rektorat</h2>
                                        <label htmlFor="login"
                                               className="my-2 mb-2 block text-gray-600 dark:text-gray-300">Admin login <span
                                            className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="text" name="login" id="login" autoComplete="name"
                                               value={adminData.login} onChange={handleAdminChange}
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="password"
                                               className="mb-2 block text-gray-600 dark:text-gray-300">Parol <span
                                            className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="password" name="password" id="password" autoComplete="tel"
                                               value={adminData.password} onChange={handleAdminChange}
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                    </div>

                                    <button type="submit"
                                            className="relative mt-6 flex h-12 w-full items-center justify-center px-6 bg-blue-800 rounded-3xl hover:bg-black text-white text-xl font-semibold">
                                        Kirish
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LoginStudent;
