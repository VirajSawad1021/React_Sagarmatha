/**
 * TodoItem — one single row of the list.
 *
 * Props it receives:
 *   todo     → { id, text, done }
 *   onToggle → function to call with this todo's id
 *   onDelete → function to call with this todo's id
 *
 * It holds no state of its own. It shows what it's given, and
 * reports clicks back up to App.
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
