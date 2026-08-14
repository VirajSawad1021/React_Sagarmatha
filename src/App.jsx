import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

/**
 * ============================================================
 *  📝 TODO APP
 * ============================================================
 *
 *  This app works. Run it, click around, then read the code —
 *  it's about 60 lines and there's nothing hidden.
 *
 *  App.jsx is the PARENT. It owns the list of todos, and hands
 *  pieces of it DOWN to children as props. Children never change
 *  the list themselves — they call the functions App gives them.
 *
 *     App (owns todos)
 *      ├── TodoForm  → calls onAdd("Buy milk")
 *      └── TodoItem  → calls onToggle(id) / onDelete(id)
 *
 *  That's the whole architecture. Everything else is styling.
 * ============================================================
 */

// Each todo is a plain object: { id, text, done }
const STARTER_TODOS = [
  { id: 1, text: 'Read through the code', done: true },
  { id: 2, text: 'Pick a feature to build', done: false },
  { id: 3, text: 'Ship it with AI as your pair', done: false },
];

export default function App() {
  // The single source of truth for the whole app.
  const [todos, setTodos] = useState(STARTER_TODOS);

  // Add a new todo to the end of the list.
  // Note: we build a NEW array instead of using todos.push().
  // React only re-renders when it sees a new value.
  function addTodo(text) {
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
  }

  // Flip one todo between done / not done.
  // .map() returns a new array; only the matching todo is replaced.
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  // Remove one todo. .filter() keeps everything that isn't this id.
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Derived from state — no extra useState needed. This recalculates
  // on every render, so it can never fall out of sync with `todos`.
  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <div className="page">
      <header className="header">
        <h1>My Todo List</h1>
        <p className="subtitle">React Workshop · Sagarmatha</p>
      </header>

      <main className="card">
        {/* Passing a FUNCTION down as a prop */}
        <TodoForm onAdd={addTodo} />

        {todos.length === 0 ? (
          <p className="empty">All clear. Add something to get started.</p>
        ) : (
          <ul className="list">
            {todos.map((todo) => (
              // `key` lets React tell the rows apart when the list changes
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}

        <footer className="footer">
          {remaining} of {todos.length} left to do
        </footer>
      </main>

      <p className="hint">
        Edit <code>src/App.jsx</code> — the page reloads by itself.
      </p>
    </div>
  );
}
