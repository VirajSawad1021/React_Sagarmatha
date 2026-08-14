# ✅ Solution (Instructor / check-your-work)

Try the tasks first! Only look here once you're stuck for more than a few minutes.

---

## Task 1 — `addTodo` in `src/App.jsx`

```jsx
function addTodo(text) {
  const newTodo = { id: Date.now(), text: text, done: false };
  setTodos([...todos, newTodo]);
}
```

**Why the spread (`...`)?** React only re-renders when it sees a *new* array.
`todos.push(newTodo)` changes the old array in place, so React sees the same
array and skips the update — the screen would never change.

---

## Task 2 — the `.map()` in `src/components/TodoList.jsx`

```jsx
<ul className="list">
  {todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ))}
</ul>
```

**Why `key`?** It gives React a stable identity per row, so when the list
changes it can update only what moved instead of re-rendering everything.
Using the array index as a key breaks when items are deleted or reordered.

---

## Task 3 — `toggleTodo` in `src/App.jsx`

```jsx
function toggleTodo(id) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
}
```

`.map()` returns a new array. For the matching todo we build a new object with
`done` flipped; every other todo is returned untouched.

---

## Task 4 — `deleteTodo` in `src/App.jsx`

```jsx
function deleteTodo(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}
```

`.filter()` keeps every todo whose id is *not* the one being deleted.

---

## Task 5 (bonus) — the counter in `src/App.jsx`

```jsx
const remaining = todos.filter((todo) => !todo.done).length;
```

No extra state needed. `remaining` is *derived* from `todos`, so it recalculates
on every render automatically. A common beginner mistake is putting this in its
own `useState` — then you have two sources of truth that can drift apart.

---

## Stretch goals (if a group finishes early)

1. **Filter buttons** — All / Active / Done.
   Add `const [filter, setFilter] = useState('all')` in `App.jsx` and compute
   the visible list before passing it to `<TodoList />`.
2. **Clear completed** — one button that removes every done todo.
3. **Edit a todo** — double-click the text to turn it into an input.
4. **Save to localStorage** — so the list survives a page refresh
   (`useEffect` + `localStorage.setItem`).
