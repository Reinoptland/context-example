import React from "react";
import useAuth from "../contexts/AuthContext";

export default function TodoList() {
  const authInfo = useAuth();
  // console.log("LOGIN INFO IN LIST?", authInfo);
  return <div>USERID IN LIST: {String(authInfo.userId)}</div>;
}
