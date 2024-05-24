import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import Hero from "./components/Hero.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProfilesPage from "./pages/ProfilesPage.tsx";
import Courses from "./pages/Courses.tsx";
import CourseOverview from "./components/CourseOverview.tsx";
import Header from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Teachers from "./pages/Teachers.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Hero />, errorElement: <NotFoundPage /> },
  { path: "/courses", element: <Courses /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/courses/:courseId", element: <CourseOverview /> },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
  { path: "/courses", element: <Hero /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
