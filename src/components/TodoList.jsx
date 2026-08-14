import TodoItem from './TodoItem';

/**
 * TodoList — receives the array and renders one TodoItem per todo.
 *
 * It owns NO state. It only takes props and passes them along.
 * (A component like this is often called "presentational".)
 */
export default function TodoList({ todos, onToggle, onDelete }) {
  // Empty state — nothing to show yet.
  if (todos.length === 0) {
    return <p className="empty">Nothing here yet. Add your first todo! 🎉</p>;
  }

  return (
    <ul className="list">
      {/* ------------------------------------------------------------
          TASK 2 — Render one <TodoItem /> for every todo
          ------------------------------------------------------------
          Use .map() to turn each todo object into JSX:

            {todos.map((todo) => (
              <TodoItem
                key={todo.id}        // ⚠️ key is required by React
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}

          Why `key`? It lets React tell the items apart when the
          list changes, so it re-renders only what actually moved.
      ------------------------------------------------------------ */}

      {/* 👉 Write your .map() here */}
    </ul>
  );
}
