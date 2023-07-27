import "./list.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
