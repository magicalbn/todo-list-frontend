import React, { useEffect, useState } from "react";
import Layout from "../Shared/Layout";
import TodoList from "../TodoList/TodoList";

import { getTodoList } from "../../lib/todo-lib";
import Pagination from "../Pagintaion/Pagination";

const Home = () => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const [todoList, setTodoList] = useState([]);

    const [totalItems, setTotalItems] = useState(1);

    useEffect(() => {
        // fetchList(1, 10);
    }, []);

    const fetchList = (page, limit) => {
        getTodoList(page, limit)
            .then((res) => {
                setTodoList(res.data);
                setTotalItems(res.pagination?.total);
            })
            .catch((e) => console.log(e));
    };

    const onChangeHandler = (e, value) => {
        if (value == "title") {
            setTodoTitle(e.target.value);
        } else if (value == "description") {
            setTodoDescription(e.target.value);
        }
    };

    return (
        <Layout>
            <div className="flex items-center p-4 gap-2 flex-col">
                <form className="flex gap-2 items-center my-4 flex-col md:flex-row">
                    <input
                        className="border outline-none border-gray-400 rounded-md p-1 px-4"
                        value={todoTitle}
                        onChange={(e) => onChangeHandler(e, "title")}
                        placeholder="Title"
                    />
                    <input
                        className="border outline-none border-gray-400 rounded-md p-1 px-4"
                        value={todoDescription}
                        onChange={(e) => onChangeHandler(e, "description")}
                        placeholder="Description"
                    />
                    <button
                        type="submit"
                        className="p-1.5 bg-[#c4f2e3] text-[#487565] rounded-md px-4"
                    >
                        Add
                    </button>
                </form>
                <Pagination totalItems={totalItems} fetchList={fetchList} />
                <TodoList todoList={todoList} fetchList={fetchList} />
            </div>
        </Layout>
    );
};

export default Home;
