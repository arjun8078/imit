/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const Comments = ({ postId, comments }) => {
    const [content, setContent] = useState('');

  const handleComment = async () => {
    try {
      await axios.post(`http://localhost:3001/api/posts/${postId}/comment`, {
        userId: 'your-user-id',
        content,
      });
      setContent('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  return (
    <div>
    {comments.map((comment) => (
      <div key={comment._id} className="mt-2">
        <p className="text-sm">
          <strong>{comment.user.name}:</strong> {comment.content}
        </p>
      </div>
    ))}
    <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Add a comment..."
      className="mt-2 p-2 border rounded w-full"
    />
    <button onClick={handleComment} className="px-2 py-1 bg-blue-500 text-white rounded mt-1">
      Comment
    </button>
  </div>
  )
}

export default Comments