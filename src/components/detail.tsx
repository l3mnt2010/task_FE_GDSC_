import React from "react";
import ModalCustom from "./Modal";

export interface Task {
  id: number;
  name: string;
  create_at: string;
  finish_at: string;
  done: boolean;
  isCloseEdit: () => void;
  isOpenEdit?: () => void;
  fetchTasks?: () => any;
}

const Detail: React.FC<Task> = (props) => {
  const { id, name, create_at, finish_at, done, isCloseEdit, isOpenEdit } =
    props;
  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-4 py-3">{create_at}</td>
      <td className="px-4 py-3">{finish_at}</td>
      <td className="px-4 py-3 max-w-[12rem] truncate">
        <input type="checkbox" defaultChecked={done === true ? true : false} />
      </td>
      <td className="px-4 py-3">
        <button onClick={isOpenEdit}>Edit</button>
        {
          <ModalCustom
            create_at={create_at}
            done={done}
            finish_at={finish_at}
            id={id}
            isCloseEdit={isCloseEdit}
            name={name}
          />
        }
      </td>
      <td className="px-4 py-3">
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Detail;
