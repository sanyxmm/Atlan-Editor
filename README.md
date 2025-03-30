# **SQL Query Editor**
**Link to the application:** [Atlan Editor](https://atlan-editor-gamma.vercel.app/)

## **Project Overview**
This project is a web-based SQL Query Editor that allows users to write and execute SQL queries on sample datasets.  
It includes a code editor, query results display, and query history tracking.  
The application provides an intuitive interface for users to interact with structured data efficiently.

## **Tech Stack & Libraries Used**
- **Vite** – Used as the build tool for faster development and optimized bundling.  
- **React.js** – The primary framework used for building the UI.  
- **React Context API** – Manages global state for queries and query history.  
- **react-csv** – Enables exporting query results to CSV format.  
- **react-toastify** – Displays user-friendly toast notifications.  
- **CodeMirror** – Provides a robust code editing experience.  

### **Styling:**
- **CSS Media Queries** – Ensures responsive design across all screen sizes.  
- **Custom CSS** – Styled UI components like query editor, results table, and sidebar.  

## **Page Load Time & Measurement**
- **Page Load Time:** ~0.6 seconds (Measured using Chrome DevTools' Performance Tab)  
- **Key Performance Metrics:**  
  - **First Contentful Paint (FCP):** ~100ms  
  - **Time to Interactive (TTI):** ~0.3s  

## **Performance Optimizations**
### **1. Optimized Rendering**
- Used `useMemo` for expensive computations (like dynamic column rendering in the table).  
- Used `useCallback` for event handlers to prevent unnecessary re-renders.  

### **2. Improved Query Execution**
- **Implemented Debouncing** – Prevents unnecessary execution of queries while typing.  
- **Reduced unnecessary state updates** in React Context to enhance efficiency.  

### **3. Lazy Loading & Efficient Data Handling**
- **Lazy Loaded Components** – Loads non-essential components asynchronously.  

### **4. Optimized CSS & Responsiveness**
- **Minimized CSS usage** – Reduced unused styles and optimized media queries.  
- **Disabled horizontal overflow** to prevent unnecessary scrollbars on small screens.  

## **To Run the Project & Install Dependencies**
```sh
npm install
npm run dev
