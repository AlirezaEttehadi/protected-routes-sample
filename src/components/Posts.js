import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <h1>Posts</h1>
      <input
        type="text"
        value={postId}
        onChange={(event) => setPostId(event.target.value)}
      />
      <button onClick={() => navigate(`/posts/${postId}`)}>Go To Post</button>
    </>
  );
}
