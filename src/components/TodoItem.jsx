/**
 * TodoItem — one single row of the list.
 *
 * Props it receives:
 *   todo     → { id, text, done }
 *   onToggle → function to call with the todo's id
 *   onDelete → function to call with the todo's id
 *
 * ✅ This file is already wired up. Read how the buttons call the
 *    functions that came down from App.jsx.
 */
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.done ? 'item item-done' : 'item'}>
      <label className="item-label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className="item-text">{todo.text}</span>
      </label>

      <button
        className="btn btn-delete"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        ✕
      </button>
    </li>
  );
}
