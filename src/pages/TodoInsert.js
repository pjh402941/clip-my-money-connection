import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./list.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
