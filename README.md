# 🖥️ React Admin Dashboard Layout

This is a responsive **Admin Dashboard Layout** built with **React**, **Tailwind CSS**, and **React Icons**. It includes a collapsible **Sidebar**, a top **Navbar**, and a flexible layout ideal for admin panels or dashboards.

---

## 🚀 Features

- ✅ Responsive Sidebar with toggle
- ✅ Navbar with Search, Notifications, and Profile Dropdown
- ✅ Modern layout using Flexbox (Tailwind)
- ✅ Clean, modular, and easy-to-extend component structure

---

## 📦 Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 🎨 React Icons

---

## 🧱 Project Structure

src/
├── App.jsx
├── main.jsx
└── Components/
├── Sidebar.jsx
├── Navbar.jsx
└── Dashboard.jsx


---

## 🧩 Component Overview

### `App.jsx`

- Manages `sidebarToggle` state.
- Renders both `Sidebar` and `Dashboard`.

```jsx
const [sidebarToggle, setSidebarToggle] = useState(false);
<Sidebar sidebarToggle={sidebarToggle} />
<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />


---

✅ **Copy this entire markdown into a file named `README.md`** in your project root.

Need help adding routing, pages, or Firebase auth? Just ping 😄
