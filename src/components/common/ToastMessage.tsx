import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  return (
    <ToastContainer
      position="top-center"
      pauseOnHover={false}
      limit={1}
      autoClose={3000}
      style={{
        fontSize: "14px",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#1f1f1f",
        border: " 1px solid #0b1d78",
      }}
    />
  );
};

export default ToastMessage;
