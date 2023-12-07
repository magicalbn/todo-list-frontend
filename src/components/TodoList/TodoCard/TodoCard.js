import React from "react";
import { deleteTodo } from "../../../lib/todo-lib";

const TodoCard = ({ todoDetails, fetchList }) => {
    const { title, description, _id } = todoDetails;

    const onDoneHandler = () => {
        const confirm = window.confirm(
            "Do you want to mark this item as done?"
        );
        if (confirm) {
            deleteTodo(_id)
                .then((res) => {
                    fetchList();
                })
                .catch((e) => {
                    alert("something went wrong");
                });
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 border-b-2">
            <p>{title}</p>
            <p className="hidden md:block">{description}</p>
            <img
                alt="done"
                className="h-[20px] cursor-pointer justify-self-end self-center  mr-8 opacity-50 hover:opacity-100"
                src="./icons/done.png"
                onClick={onDoneHandler}
            />
        </div>
    );
};

export default TodoCard;
