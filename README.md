# 📝 React Todo — Workshop Activity (Sagarmatha)

A small Todo app that already works. Adding, checking off, deleting — all done.

**Your job isn't to fix it. It's to grow it, using AI as your pair programmer.**

---

## 🚀 Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Leave it running — the
page refreshes itself every time you save a file.

---

## 📂 What's in here

```text
src/
├── App.jsx                  ← owns the todos, holds all the logic
├── components/
│   ├── TodoForm.jsx         ← the input box + Add button
│   └── TodoItem.jsx         ← one row of the list
├── index.css                ← all the styling
└── main.jsx                 ← app entry point
```

That's it. Four files, ~150 lines total. **Read all of it before you start** —
it takes five minutes and everything after this will make more sense.

### The one idea to hold on to

`App.jsx` owns the list. Nobody else is allowed to change it.

```text
        App          ← holds `todos` in useState
         │
         │  data goes DOWN as props
         ▼
   ┌─────────────┬──────────────┐
   │  TodoForm   │   TodoItem   │
   └─────────────┴──────────────┘
         │              │
         └──────────────┘
      events go UP by calling
      the functions App passed down
```

A child never edits the list. It calls `onAdd(...)`, `onToggle(id)`, or
`onDelete(id)`, and **App** decides what that means. This is called *lifting
state up*, and it's most of what React architecture is.

---

## ✅ The activity

**Pick features from the list below and build them with AI.** Claude, ChatGPT,
Copilot, Cursor — whatever you have.

Aim for **2–3 features**, not ten. A feature that works and that you can explain
beats five you pasted in and don't understand.

### Feature ideas

**Warm-up**
- Show today's date in the header
- A "Clear completed" button that removes all finished todos
- Sort so unfinished todos float to the top
- Empty-state artwork or a friendlier message

**Solid**
- **Filter tabs** — All / Active / Done
- **Edit a todo** — double-click the text to change it
- **Priority levels** — high / medium / low, with a colour dot
- **Due dates**, with overdue ones highlighted
- **Search box** to filter todos by text

**Ambitious**
- **Save to `localStorage`** so the list survives a refresh
- **Drag to reorder** the list
- **Categories or tags**, with a count per tag
- **Dark mode toggle** (the colours are all CSS variables at the top of
  `index.css` — that's the whole job)
- **Undo** the last delete

---

## 🤖 How to actually use the AI

This is the real skill being practised today. Three rules:

**1. Give it the code, not a description of the code.**
Paste the actual contents of `App.jsx`. Models guess badly when they can't see
what you have.

> ❌ "add a filter to my todo app"
>
> ✅ "Here's my App.jsx: `[paste]`. Add All / Active / Done filter tabs above
> the list. Keep the existing state shape and follow the style already in the
> file — plain CSS classes in index.css, no new libraries."

**2. Ask one feature at a time.** Get it working, check the browser, *then* ask
for the next thing. Ten features in one prompt gives you a pile of code you
can't debug.

**3. Make it explain itself.** After it gives you code:

> "Explain why you put that state in App instead of TodoItem."
>
> "What breaks if I remove the `key` prop here?"

If the explanation doesn't make sense to you, don't paste the code in yet —
push back and ask again.

### When it gives you something broken

That will happen. Don't just re-prompt "it doesn't work" — that's the least
useful thing you can say. Instead:

1. Open the browser console (**F12**) and read the **first** red error. The rest
   are usually knock-on effects.
2. Paste that exact error back, along with the code it's complaining about.
3. If it loops on the same wrong fix twice, stop. Start a fresh chat with just
   the current file — the old conversation is poisoning it.

---

## 🧠 Things AI gets wrong in React (watch for these)

| What it does | Why it's wrong |
|---|---|
| `todos.push(newTodo)` | mutates state — React won't re-render. Needs `setTodos([...todos, x])` |
| `key={index}` in a `.map()` | breaks when you delete or reorder. Use `key={todo.id}` |
| Adds `useState` for something derivable | like a `count` that mirrors `todos`. Just compute it — see `remaining` in `App.jsx` |
| Suggests installing a library | for a 20-line feature. You don't need Redux for a todo list |
| Rewrites the whole file | when you asked for one small change. Ask it for just the diff |

If the AI hands you any of these, you now know more than it does about your app.
Say so and ask for the fix.

---

## 🎤 At the end

Be ready to show the group, in ~2 minutes:

1. **What you built** — demo it live
2. **One prompt that worked well** — and why you think it did
3. **One thing the AI got wrong** — and how you caught it

That third one is the most interesting part. Bring it.
