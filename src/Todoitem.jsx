import PropTypes from "prop-types";

const TodoItem = ({ todo, removeTaskWithIndex, index }) => {
  // Functions
  const handleButtonClick = () => {
    removeTaskWithIndex(index);
  };

  return (
    <li className="flex items-center w-min gap-11">
      {todo}
      <button onClick={handleButtonClick} className="bg-gray-500 text-white p-2 rounded-full">
        {/* Dustbin Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
      </button>
    </li>
  );
};

// Prop Types
TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  removeTaskWithIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;