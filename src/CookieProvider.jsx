import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { refreshThunk } from "./features/auth/authSlice";

export default function CookieProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // commented this logic as refresh token endpoint is not working and causing infinite loop of refresh attempts on app load. We can revisit this when refresh token logic is fixed.
    // dispatch(refreshThunk()); // restore session using refresh cookie
  }, [dispatch]);

  return children;
}
