import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function TodoList() {
  const authInfo = useContext(AuthContext);
  console.log("LOGIN INFO IN LIST?", authInfo);
  return <div>USERID IN LIST: {String(authInfo.userId)}</div>;
}
