import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({ isAllowed, children, redirect }) {
  if (!isAllowed) {
    return <Navigate to={redirect} />;
  } else {
    return children || <Outlet />;
  }
}