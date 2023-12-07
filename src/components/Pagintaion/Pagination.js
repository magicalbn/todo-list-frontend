import React, { useEffect, useState } from "react";

const Pagination = ({ totalItems, fetchList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchList(currentPage, rowsPerPage);
    }, [currentPage, rowsPerPage]);

    const changePageHandler = (next) => {
        const totalPages = Math.ceil(totalItems / rowsPerPage);
        if (next) {
            if (currentPage >= totalPages) {
                return;
            }
            setCurrentPage(currentPage + 1);
        } else {
            if (currentPage === 1) {
                return;
            }

            setCurrentPage(currentPage - 1);
        }
    };

    const changeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setCurrentPage(1);
    };
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
                    Page: {currentPage} of {Math.ceil(totalItems / rowsPerPage)}
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
