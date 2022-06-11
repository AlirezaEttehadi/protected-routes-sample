import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Post() {
  const navigate = useNavigate();
  let { userId } = useParams();
  return (
    <>
      <h1>Post {userId}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
