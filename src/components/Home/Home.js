import React, { useState } from "react";
import Layout from "../Shared/Layout";
import TodoList from "../TodoList/TodoList";

const Home = () => {
    const [todoValue, setTodoValue] = useState("");

    const onChangeHandler = (e) => {
        setTodoValue(e.target.value);
    };

    return (
        <Layout>
            <div className="flex justify-center p-4 gap-2">
                <form className="flex gap-2 items-center">
                    <input
                        className="border outline-none border-gray-400 rounded-md p-1 px-4"
                        value={todoValue}
                        onChange={onChangeHandler}
                        placeholder="Whats on your mind..."
                    />
                    <button
                        type="submit"
                        className="p-1.5 bg-[#e5f5f0] text-[#68a690] rounded-md px-4"
                    >
                        Add
                    </button>
                </form>

                <TodoList />
            </div>
        </Layout>
    );
};

export default Home;
