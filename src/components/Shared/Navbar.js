import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-[#7860cc] p-9 px-[10%]">
            <p className="text-white font-bold text-2xl cursor-pointer">
                TODO LIST
            </p>
            <div className="w-[20%] flex gap-1">
                <p className="text-white font-bold underline text-xl cursor-pointer">
                    Home
                </p>
            </div>
        </div>
    );
};

export default Navbar;
