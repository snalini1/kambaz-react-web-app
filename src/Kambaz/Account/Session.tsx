import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { setEnrollments } from "../reducer";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
      if (currentUser) {
        try {
          const enrollments = await client.getEnrollments();
          dispatch(setEnrollments(enrollments));
        } catch (enrollmentErr: any) {
          if (enrollmentErr.response?.status !== 401) {
            console.error("Error fetching enrollments:", enrollmentErr);
          }
          dispatch(setEnrollments([]));
        }
      }
    } catch (err: any) {
      if (err.response?.status !== 401) {
        console.error("Session error:", err);
      }
      dispatch(setCurrentUser(null));
      dispatch(setEnrollments([]));
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (!pending && !currentUser && retryCount < 1) {
      const timer = setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setPending(true);
        fetchProfile();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pending, currentUser, retryCount]);

  if (!pending) {
    return children;
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Checking session...</p>
        {retryCount > 0 && (
          <p className="mt-1 text-muted small">Retrying session check...</p>
        )}
      </div>
    </div>
  );
}