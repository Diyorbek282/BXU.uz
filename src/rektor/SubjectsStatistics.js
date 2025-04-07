import React, {useEffect, useState} from 'react';
import Sidebar from "../rektor/RektorSidebar";
import {useNavigate} from "react-router-dom";
import ApiCall from "../config";
import HemisApiCall from "./HemisApiCall";

function SubjectsStatistics(props) {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSubjects();
    }, []);
    const fetchSubjects = async () => {
        try {
            const response = await HemisApiCall('/api/v1/message', 'GET', null, null, true);
        } catch (error) {

            console.error("Error fetching news:", error);
        }
    };

    return (
        <div>
            <Sidebar/>
            <div className="p-10 pb-1 sm:ml-64 flex flex-wrap items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl xl:text-4xl">Fanlar statistikasi</h2>
            </div>
            <div className="p-10 pt-0 sm:ml-64">
            </div>
        </div>
    );
}

export default SubjectsStatistics;