import React, { useState } from "react";
import { createTodo } from "../../lib/todo-lib";

const TodoForm = ({ resetandRefecth }) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [todoDescription, setTodoDescription] = useState("");

    const onChangeHandler = (e, value) => {
        if (value === "title") {
            setTitleError(false);
            setTodoTitle(e.target.value);
        } else if (value === "description") {
            setTodoDescription(e.target.value);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!todoTitle.trim().length) {
            setTitleError(true);
            return;
        }
        createTodo({ title: todoTitle, description: todoDescription })
            .then((res) => {
                resetandRefecth();
                setTodoTitle("");
                setTodoDescription("");
            })
            .catch((e) => {
                alert("something went wrong");
            });
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex gap-2 items-center my-4 flex-col md:flex-row"
        >
            <input
                className={`border  outline-none border-gray-400 rounded-md p-1 px-4 ${
                    titleError && "border-red-500"
                }`}
                value={todoTitle}
                onChange={(e) => onChangeHandler(e, "title")}
                placeholder="Title*"
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
    );
};

export default TodoForm;
