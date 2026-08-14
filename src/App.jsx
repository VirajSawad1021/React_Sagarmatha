import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/**
 * ============================================================
 *  📝 TODO APP — Workshop Starter
 * ============================================================
 *
 *  App.jsx is the PARENT component. It owns the data (state)
 *  and passes it DOWN to children as props.
 *
 *  Children never change the list themselves — they call the
 *  functions we pass them ("lifting state up").
 *
 *     App (owns todos)
 *      ├── TodoForm   → calls onAdd("Buy milk")
 *      └── TodoList   → renders each TodoItem
 *            └── TodoItem → calls onToggle(id) / onDelete(id)
 *
 *  👉 Your job: complete the TODOs below (Task 1, 3, 4).
 * ============================================================
 */

// Each todo is a plain object: { id, text, done }
const STARTER_TODOS = [
  { id: 1, text: 'Learn what a component is', done: true },
  { id: 2, text: 'Pass data down with props', done: false },
  { id: 3, text: 'Store data with useState', done: false },
];

export default function App() {
  // The single source of truth for the whole app.
  const [todos, setTodos] = useState(STARTER_TODOS);

  /* ------------------------------------------------------------
     TASK 1 — Add a new todo
     ------------------------------------------------------------
     `text` is whatever the user typed in the form.

     Steps:
       1. Build a new todo object:
            const newTodo = { id: Date.now(), text: text, done: false };
       2. Put it in state WITHOUT mutating the old array:
            setTodos([...todos, newTodo]);

     ⚠️ Never do todos.push(...) — React won't re-render.
  ------------------------------------------------------------ */
  function addTodo(text) {
    // 👉 Write your code here
  }

  /* ------------------------------------------------------------
     TASK 3 — Toggle a todo between done / not done
     ------------------------------------------------------------
     We get the `id` of the todo that was clicked.

     Hint: use .map() to build a NEW array. Keep every todo the
     same, except the one whose id matches — flip its `done`:

       setTodos(
         todos.map((todo) =>
           todo.id === id ? { ...todo, done: !todo.done } : todo
         )
       );
  ------------------------------------------------------------ */
  function toggleTodo(id) {
    // 👉 Write your code here
  }

  /* ------------------------------------------------------------
     TASK 4 — Delete a todo
     ------------------------------------------------------------
     Hint: .filter() keeps only the items you return true for.
     Keep every todo whose id is NOT the one we want to remove.
  ------------------------------------------------------------ */
  function deleteTodo(id) {
    // 👉 Write your code here
  }

  // TASK 5 (bonus) — count how many todos are still not done.
  // Hint: todos.filter((todo) => !todo.done).length
  const remaining = 0;

  return (
    <div className="page">
      <header className="header">
        <h1>📝 My Todo List</h1>
        <p className="subtitle">React Workshop · Sagarmatha</p>
      </header>

      <main className="card">
        {/* Passing a FUNCTION down as a prop */}
        <TodoForm onAdd={addTodo} />

        {/* Passing DATA and FUNCTIONS down as props */}
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <footer className="footer">
          <span>
            {remaining} of {todos.length} left to do
          </span>
        </footer>
      </main>

      <p className="hint">
        Edit <code>src/App.jsx</code> and the files in{' '}
        <code>src/components/</code> — the page reloads by itself.
      </p>
    </div>
  );
}
