import React, { useEffect, useState } from "react";
import Layout from "../Shared/Layout";
import TodoList from "../TodoList/TodoList";

import { getTodoList } from "../../lib/todo-lib";
import Pagination from "../Pagintaion/Pagination";
import TodoForm from "../TodoForm/TodoForm";

const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [totalItems, setTotalItems] = useState(1);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchList();
    }, [currentPage, rowsPerPage]);

    const fetchList = () => {
        getTodoList(currentPage, rowsPerPage)
            .then((res) => {
                setTodoList(res.data);
                setTotalItems(res.pagination?.total);
            })
            .catch((e) => console.log(e));
    };

    const resetandRefecth = () => {
        if (currentPage === 1) {
            fetchList();
        } else setCurrentPage(1);
    };

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
        <Layout>
            <div className="flex items-center p-4 gap-2 flex-col">
                <TodoForm resetandRefecth={resetandRefecth} />
                <Pagination
                    totalPages={Math.ceil(totalItems / rowsPerPage)}
                    currentPage={currentPage}
                    rowsPerPage={rowsPerPage}
                    changeRowsPerPage={changeRowsPerPage}
                    changePageHandler={changePageHandler}
                />
                <TodoList todoList={todoList} fetchList={fetchList} />
            </div>
        </Layout>
    );
};

export default Home;
