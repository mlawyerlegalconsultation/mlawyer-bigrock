# My Lawyer - Modern Law Firm Landing Page
A professional and modern landing page for a law firm, built with React, Vite, and Tailwind CSS. This project features a clean design system, routing, and a component-based architecture.

## 🚀 Technologies Used
-   **[React](https://react.dev/)**: JavaScript library for building user interfaces.
-   **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[React Router DOM](https://reactrouter.com/)**: Declarative routing for React web applications.
-   **[React Icons](https://react-icons.github.io/react-icons/)**: SVG icons (utilizing Phosphor Icons).
-   **[Motion](https://motion.dev/)**: For animations and interactions.

## 🎨 Design System
The project uses a custom color palette defined in the Tailwind configuration:
| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary** | `#005D60` (Teal) | Main brand color, buttons, headings |
| **Secondary** | `#AD8D45` (Gold) | Accents, highlights, subheadings |
| **Success** | `#2ECC71` (Green) | Success states, notifications |
| **Warning** | `#FA8C16` (Orange)| Warning alerts, attention grabbers |
| **Error** | `#E74C3C` (Red) | Error states, critical alerts |

## 📂 Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components (Header, Footer, etc.)
├── layout/         # Layout wrapper components (MainLayout)
├── pages/          # Page components (Home, NotFound, etc.)
├── data/           # Mock data or content files
├── App.jsx         # Main application component with Routes
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind theme configuration
```

## 🛠️ Installation and Setup

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

5.  **Preview production build**:
    ```bash
    npm run preview
    ```

## 🌐 Routing

The application uses `react-router-dom` for navigation.
-   `/`: Home Page
-   `/about`: About Page (Placeholder)
-   `/services`: Services Page (Placeholder)
-   `/contact`: Contact Page (Placeholder)
-   `*`: Custom 404 Not Found Page

## 📝 License
This project is Licence under MLawyer
