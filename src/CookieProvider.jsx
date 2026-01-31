import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshThunk } from "./features/auth/authSlice";

export default function CookieProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk()); // restore session using refresh cookie
  }, [dispatch]);

  return children;
}
