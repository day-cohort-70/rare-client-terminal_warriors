// Authorized.js
import { Navigate, Outlet } from "react-router-dom";

export const Authorized = ({ token }) => {

  // Add a development mode flag or condition
  const isDevelopmentMode = true; // Set this to false in production

  // If in development mode or a token is present, render the protected content
  if (isDevelopmentMode || token) {
    return <Outlet />;
  }

  // Otherwise, redirect to the login page
  return <Navigate to="/login" replace />;
};