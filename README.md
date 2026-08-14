# 📝 React Todo — Workshop Activity (Sagarmatha)

A tiny Todo app you finish yourself. Everything is already wired up — the
styling, the form, the layout. **Five small pieces of logic are missing**, and
those five pieces are the whole point: they're how state and props actually
work in React.

Estimated time: **40–60 minutes**.

---

## 🚀 Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Leave it running —
the page refreshes itself every time you save a file.

You should see the header, the input box, and **"Nothing here yet"**. That's
correct — the list isn't rendered yet. That's Task 2.

---

## 📂 What's in here

```text
src/
├── App.jsx                  ← 👈 you edit this (Tasks 1, 3, 4, 5)
├── components/
│   ├── TodoForm.jsx         ← ✅ done for you — read it as an example
│   ├── TodoList.jsx         ← 👈 you edit this (Task 2)
│   └── TodoItem.jsx         ← ✅ done for you — read how it calls props
├── index.css                ← styling, no need to touch
└── main.jsx                 ← app entry point
```

### The one idea to hold on to

`App.jsx` owns the list. Nobody else is allowed to change it.

```text
        App          ← holds `todos` in useState
         │
         │  data goes DOWN as props
         ▼
   ┌─────────────┬──────────────┐
   │  TodoForm   │   TodoList   │
   └─────────────┴──────────────┘
         │              │
         │              ▼
         │          TodoItem
         │              │
         └──────────────┘
      events go UP by calling
      the functions App passed down
```

A child never edits the list. It calls `onAdd(...)` / `onToggle(id)` /
`onDelete(id)`, and **App** decides what that means. This is called
*lifting state up*, and it's most of what React architecture is.

---

## ✅ Your tasks

Each one is marked with a `TASK` comment in the code. Do them in order —
each builds on the last.

| # | File | What to build | You'll learn |
|---|------|----------------|--------------|
| 1 | `src/App.jsx` | `addTodo(text)` — add a new item | updating state without mutating |
| 2 | `src/components/TodoList.jsx` | `.map()` over `todos` | rendering lists + `key` |
| 3 | `src/App.jsx` | `toggleTodo(id)` — check / uncheck | updating one item in an array |
| 4 | `src/App.jsx` | `deleteTodo(id)` — remove an item | `.filter()` |
| 5 | `src/App.jsx` | `remaining` counter | deriving values from state |

**After each task, check the browser.** Don't write all five and then look —
if something breaks you won't know which one did it.

### How you know you're done

- [ ] Typing a todo and hitting **Add** puts it at the bottom of the list
- [ ] The three starter todos are visible when the page loads
- [ ] Clicking a checkbox strikes the text through (and un-strikes it)
- [ ] The **✕** button removes that one row and nothing else
- [ ] The footer count drops as you tick things off

---

## 🧠 Rules of thumb (these cause 90% of the bugs)

1. **Never change state directly.**
   `todos.push(x)` ❌ → `setTodos([...todos, x])` ✅
   React compares the old and new value. Same array = no re-render.

2. **`.map()` and `.filter()` return new arrays.** That's exactly why we use
   them here — they hand you a fresh array instead of editing the old one.

3. **Every item in a list needs a `key`.** Use the item's `id`, not the
   array index.

4. **Props flow down, events flow up.** If a child needs to change something a
   parent owns, the parent passes down a function.

---

## 🆘 If you get stuck

| What you see | Usually means |
|---|---|
| Nothing happens when you click Add | `addTodo` is still empty (Task 1) |
| List stays empty but adding "works" | the `.map()` in `TodoList` is missing (Task 2) |
| `Each child in a list should have a unique "key"` | you forgot `key={todo.id}` |
| `todos.map is not a function` | you set state to something that isn't an array |
| Page went blank | check the browser console — the error names the file and line |

Open the browser console with **F12**. The first red error is the real one;
the rest are usually knock-on effects.

Answers with explanations are in [SOLUTION.md](SOLUTION.md) — try first. 🙂
