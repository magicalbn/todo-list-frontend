import React from "react";

const Pagination = ({
    totalPages,
    currentPage,
    rowsPerPage,
    changeRowsPerPage,
    changePageHandler,
}) => {
    return (
        <div className="w-full mt-5 max-w-3xl  flex gap-2 justify-end items-center">
            <div className="flex gap-2 mr-4">
                <p className="font-semibold text-sm text-[#4D4D4D]">
                    Rows per page:
                </p>
                <select
                    className="font-semibold text-sm text-[#4D4D4D]"
                    value={rowsPerPage}
                    onChange={changeRowsPerPage}
                >
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm text-[#4D4D4D]">
                    Page: {currentPage} of {totalPages}
                </p>
                <button
                    onClick={() => {
                        changePageHandler(false);
                    }}
                    className="p-1.5 rounded-full bg-gray-300 flex justify-center items-center "
                >
                    <img
                        alt="left"
                        className="h-3"
                        src="./icons/arrow-left.png"
                    />
                </button>
                <button
                    onClick={() => {
                        changePageHandler(true);
                    }}
                    className="p-1.5 rounded-full bg-gray-300 flex justify-center items-center "
                >
                    <img
                        className="h-3"
                        alt="right"
                        src="./icons/arrow-right.png"
                    />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
