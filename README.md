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
I have taken the page load time used here to be the time taken for the site to be interactive, which in all the cases shown below, falls well under Google's time specified for mobile and desktop devices. It is the most important metric from the user's standpoint in my opinion as it allows the users to start navigating the site.

The Detailed Screenshots have been attached along with respective page load times in a later section of the document
The website is hosted on Vercel, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security, and ranking.
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

##**Screenshots**
![Screenshot 2025-03-30 194552](https://github.com/user-attachments/assets/441cf24c-89fc-4be4-a7fb-0f9967b9f2fa)
![Screenshot 2025-03-30 194600](https://github.com/user-attachments/assets/dbc1fc5c-50e1-46a1-8c51-c4cd7125fa9a)
![Screenshot 2025-03-30 194608](https://github.com/user-attachments/assets/2d402c93-932e-4903-87e4-d597fa6b8979)
![Screenshot 2025-03-30 194614](https://github.com/user-attachments/assets/0c252c14-e0d4-49e7-b420-1bd57bfacc0c)
![Screenshot 2025-03-30 194800](https://github.com/user-attachments/assets/bb03e28a-1c0f-4fa9-a795-27842ca802d6)
![Screenshot 2025-03-30 194811](https://github.com/user-attachments/assets/f87e7b73-9798-4cf0-8f9b-432e10736603)
![Screenshot 2025-03-30 194816](https://github.com/user-attachments/assets/7ca51069-078f-4db1-9e96-a41514c077d7)

##**page load time (lighthouse)**
![Screenshot 2025-03-30 183617](https://github.com/user-attachments/assets/a6349c1c-e1e5-44b1-b806-8fb4ad66b554)

## **To Run the Project & Install Dependencies**
```sh
npm install
npm run dev






