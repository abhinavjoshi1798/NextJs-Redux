import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { deleteTodo, updateTodo } from "@/provider/redux/Todos";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const updateTodoStatus = (index) => {
    dispatch(updateTodo(index));
    toast.info("Todo Updated Successfully");
  };

  const deleteTodos = (index) => {
    dispatch(deleteTodo(index));
    toast.success("Todo Deleted Successfully");
  };

  return (
    <section className="py-10 w-full">
      <table className="w-full text-center border mx-auto table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.length > 0 ? (
            todos.map((el, index) => (
              <tr key={el.id} className="border px-4">
                <td className={`${el.isCompleted ? 'line-through' : ""}`}>{el.id}</td>
                <td className={`${el.isCompleted ? 'line-through' : ""}`}>{el.title}</td>
                <td className={`${el.isCompleted ? 'line-through' : ""}`}>{el.description}</td>
                <td>
                  <div className="flex justify-center items-center">
                    {el.isCompleted ? (
                      <FcCheckmark />
                    ) : (
                      <FcCancel />
                    )}
                  </div>
                </td>
                <td className="flex justify-center gap-x-5">
                  <button className="px-6 py-2 text-white bg-red-500 rounded"
                  onClick={()=>deleteTodos(index)}>
                    Delete
                  </button>
                  {!el.isCompleted && (
                    <button
                      onClick={() => updateTodoStatus(index)}
                      className="px-6 py-2 text-white bg-orange-500 rounded"
                    >
                      Update
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No Todo Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Todo;
