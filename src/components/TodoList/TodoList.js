import React from "react";
import TodoCard from "./TodoCard/TodoCard";

const TodoList = ({ todoList, fetchList }) => {
    return (
        <div className="w-full my-5 max-w-3xl rounded-md overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 bg-[#F2F2F2] w-full p-3">
                <p className="font-medium text-[14px] text-[#4D4D4D]">Title</p>
                <p className="hidden md:block">Description</p>
                <p className="font-medium text-[14px] text-[#4D4D4D] text-right">
                    Mark Complete
                </p>
            </div>
            {todoList.map((eachTodo) => {
                return (
                    <TodoCard
                        key={eachTodo._id}
                        fetchList={fetchList}
                        todoDetails={eachTodo}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
