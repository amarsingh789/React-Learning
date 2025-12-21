# React Learning Journey 🚀

This repository documents my journey of learning React through hands-on practice, UI mini projects, and step-by-step implementation of core to advanced React concepts.  
It includes both **classwork-based practice folders** and **independent projects built to apply real-world concepts**.

---

## 📚 Topics Covered
- JavaScript Functions
- CSS Fundamentals
- React Components
- Props
- useState (Basic & Advanced)
- Form Handling
- Two-Way Data Binding
- Local Storage
- API Calling
- useEffect Hook
- React Router DOM (Basic & Advanced)
- Context API (Basic)
- Gallery Project
- E-commerce Project
- UI Mini Projects
- Tailwind CSS

---

## 🖼️ Gallery Project (Independent – Main Project)

The **Gallery Project** is a standalone React project built to practice real-world frontend concepts.

### Key Features
- Image gallery using API data (Picsum API)
- Pagination with Material UI
- Skeleton loading cards for better UX
- Lazy loading and smooth image transitions
- Reusable component-based architecture
- Styled using Tailwind CSS
- Fixed bottom pagination layout

### Concepts Applied
- `useState` & `useEffect`
- API fetching with Axios
- Conditional rendering
- Component reusability
- Props-based data flow
- Performance-focused UI improvements
- Clean folder structure

> ⚠️ Note:  
> The earlier **17-gallery-project** folder was created as part of classwork practice.  
> The **gallery-project** folder is an independent and improved implementation with better UI, UX, and structure.

---

## 🛒 E-commerce Project (Independent Project)

The **E-commerce Project** is a self-built React application focusing on real-world application flow and UI behavior.

### Key Features
- Product listing with pagination
- Skeleton loaders for better loading experience
- State management using `useState`
- Side effects handled with `useEffect`
- Client-side routing using React Router DOM
- Modular and reusable components
- Clean and responsive UI

### Concepts Applied
- Pagination logic
- `useState` & `useEffect`
- Skeleton UI patterns
- React Router DOM
- Component communication
- Real-world project structure

---

## 🔁 State Flow & Props Drilling Project (20-extra-project)

This project focuses on understanding **data flow in React** and how state is passed **top-down** using props.

### Concept Explanation
- Data flow follows:  
  **App → Navbar → Sidebar → Theme → UserProfile → Username**
- Reverse data flow is not direct in React
- State is lifted up and passed down using props

### Example Pattern Used

```js
const [theme, setTheme] = useState('dark');

<Navbar theme={theme} setTheme={setTheme} />

function changeTheme() {
  props.setTheme('light');
}
``` 

## 🔁 State Flow & Props Drilling (20-extra-project)

### Key Learnings
- Props drilling
- Lifting state up
- Controlled state updates
- Understanding unidirectional data flow in React

---

## 🌗 Context API Project (21-context-api)

This project demonstrates **basic usage of React Context API** to avoid props drilling.

### Features
- Theme switching (Light / Dark)
- Global state management using Context
- Button-based theme toggle

### Concepts Applied
- `createContext`
- `Context.Provider`
- `useContext` hook
- Removing unnecessary props drilling
- Cleaner component structure

---

## 🧭 React Router Projects

### 18-react-router
Basic implementation of **React Router DOM**, covering:
- BrowserRouter setup
- Routes & Route
- Page navigation
- Basic client-side routing concepts

### 19-react-advance-router-dom
Advanced routing concepts implemented using **React Router DOM**, including:
- Nested routes
- Dynamic routes
- 404 / Not Found page handling
- `useNavigate` hook
- Programmatic navigation
- Route-based UI structure

---

## 📁 Folder Structure
- 03-Props → Understanding and using props in React components  
- 04-card-project → Card-based UI project  
- 05-css → Core CSS concepts and styling practice  
- 06-tailwind → Tailwind CSS utilities and layouts  
- 07-ui-project → Small UI components and layouts  
- 08-function → JavaScript functions for React  
- 09-useState → Basic state management using useState hook  
- 10-useState-advance → Advanced state management concepts  
- 11-form-handling → Handling form inputs and controlled components  
- 12-two-way-binding → Two-way data binding using state and events  
- 13-notes-app-project → Notes application using React fundamentals  
- 14-localstorage → Using browser localStorage for data persistence  
- 15-api-calling → Fetching and displaying data from APIs  
- 16-useeffect → Side effects handling using the useEffect hook  
- 17-gallery-project → Gallery project (classwork version)  
- gallery-project → Independent gallery project with pagination & skeleton loaders  
- E-commerces-project → Independent e-commerce application  
- 18-react-router → Basic React Router DOM concepts  
- 19-react-advance-router-dom → Advanced routing & nested routes  
- 20-extra-project → State flow & props drilling demonstration  
- 21-context-api → Context API basic implementation  

---

## 🧠 Learning Approach
- Daily hands-on React practice
- Topic-wise structured and numbered folders
- Gradual progression from basics to advanced React concepts
- UI-focused learning for better visual understanding
- Clean, readable, and maintainable code
- Refactoring projects into reusable components

---

## 🎯 Goal
To build a strong foundation in React and frontend development, gain confidence with real-world concepts like APIs, routing, pagination, and state management, and move towards building **production-ready React applications**.
