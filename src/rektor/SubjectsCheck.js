import React from 'react';
import Sidebar from "../rektor/RektorSidebar";

function SubjectsCheck(props) {
    return (
        <div>
            <Sidebar/>
            <div className="p-10 pb-1 sm:ml-64 flex flex-wrap items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl xl:text-4xl">Kunlik fanlar o'tilishi</h2>
            </div>

            <div className="p-10 pt-0 sm:ml-64">
            </div>
        </div>
    );
}

export default SubjectsCheck;