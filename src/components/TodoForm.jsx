import { useState } from 'react';

/**
 * TodoForm — the input box and the Add button.
 *
 * Two ideas worth noticing:
 *
 * 1. CONTROLLED INPUT
 *    The input's value comes from state (`text`), and every keystroke
 *    updates that state via onChange. React owns the input.
 *
 * 2. CALLBACK PROP
 *    This component has no idea how todos are stored. It just calls
 *    `onAdd(...)`, a function the parent (App.jsx) handed to it.
 */
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page

    const trimmed = text.trim();
    if (trimmed === '') return; // ignore empty input

    onAdd(trimmed); // 👈 tell the parent: "add this one"
    setText(''); // clear the box
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="btn btn-add" type="submit">
        Add
      </button>
    </form>
  );
}
