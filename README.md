SQL Query Editor - README
📌 Project Overview
This project is a web-based SQL Query Editor that allows users to write and execute SQL queries on sample datasets. It includes a code editor, query results display, and query history tracking. The application provides an intuitive interface for users to interact with structured data efficiently.

🛠️ Tech Stack & Libraries Used
Frontend:
React.js – The primary framework used for building the UI.

React Context API – Manages global state for queries and query history.

React Virtualized – Optimizes table rendering for large datasets.

react-csv – Enables exporting query results to CSV format.

react-toastify – Displays user-friendly toast notifications.

CodeMirror – Provides a robust code editing experience.

Styling:
CSS Media Queries – Ensures responsive design across all screen sizes.

Custom CSS – Styled UI components like query editor, results table, and sidebar.

⏳ Page Load Time & Measurement
Page Load Time: ~1.2 seconds (Measured using Chrome DevTools' Performance Tab)
Key Performance Metrics:

First Contentful Paint (FCP): ~900ms

Time to Interactive (TTI): ~1.2s

🚀 Performance Optimizations
1️⃣ Optimized Rendering
Used useMemo for expensive computations (like dynamic column rendering in the table).

Used useCallback for event handlers to prevent unnecessary re-renders.

2️⃣ Improved Query Execution
Implemented Debouncing – Prevents unnecessary execution of queries while typing.

Reduced unnecessary state updates in React Context to enhance efficiency.

3️⃣ Lazy Loading & Efficient Data Handling
Lazy Loaded Components – Loads non-essential components asynchronously.

Used React Virtualized – Efficiently renders large datasets in the results table.

4️⃣ Optimized CSS & Responsiveness
Minimized CSS usage – Reduced unused styles and optimized media queries.

Disabled horizontal overflow to prevent unnecessary scrollbars on small screens.

📜 How to Run the Project?
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Start the Development Server
bash
Copy
Edit
npm start
This will launch the application on http://localhost:3000/.

📢 Future Enhancements
✅ Support for custom user-defined queries on external datasets.

✅ Improved query execution engine with backend database integration.

✅ Dark mode support for better user experience.
