# Setup Overview

This project is built using Bun with Vite on React.js, ensuring fast and efficient development.

# App.jsx Overview

This React component serves as the main entry point for the app, utilizing React Router to manage different views. The navigation links, styled with Material-UI, allow users to seamlessly navigate between components such as the Counter, User Form, Rich Text Editor, and Dashboard. The routing is handled using Routes and Route from React Router, providing a dynamic and interactive user experience.

# Counter Component

This React component utilizes the useState hook to manage the counter's state. It provides increment, decrement, and reset functionality. The background color of the container dynamically changes based on the counter value. Material-UI is used for styling, with a centered layout and interactive buttons to modify the counter

# User Form Component

This React component manages a form with name, address, email, and phone fields using the useState hook. It includes form validation, and prevents the user from leaving the page with unsaved changes using the useEffect hook. When the form is valid, it saves the data to localStorage and displays a success message along with the generated user ID. The form uses Material-UI components for styling and layout.

# Text Editor Component

This React component implements a simple rich text editor with bold, italic, underline, and list formatting options using the useState hook. It stores and retrieves the text content from localStorage with the help of useEffect hooks to persist the user's input. The formatting changes are applied dynamically to the text area, allowing users to interact with the editor in real-time.

# Dashboard Component

This React component displays a line chart using Recharts to visualize data trends over time. The chart includes two lines with dynamic values for each month. The LineChart is styled with Material-UI components, providing a sleek layout. The XAxis, YAxis, Tooltip, and Legend enhance the chart's interactivity and readability, allowing users to analyze the data effectively.