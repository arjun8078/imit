/* eslint-disable react/prop-types */

import  { useState } from 'react';
import axios from 'axios';
import Comments from './Comments';

const Post = ({ post, onLike }) => {
    const handleLike = async () => {
        try {
          await axios.post(`http://localhost:3001/api/posts/${post._id}/like`, { userId: 'your-user-id' });
          onLike(); // refresh likes
        } catch (error) {
          console.error('Error liking post:', error);
        }
      };
    
  return (
    <div className="border p-4 mb-4 rounded-lg">
    <div className="flex items-center mb-2">
      <img src={post.user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      <div className="ml-2">
        <p className="font-bold">{post.user.name}</p>
        <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
      </div>
    </div>
    <p className="mb-2">{post.caption}</p>
    <img src={`http://localhost:3001${post.image}`} alt="post" className="w-full rounded mb-2" />
    <div className="flex items-center justify-between">
      <button onClick={handleLike} className="text-blue-500">
        Like {post.likes.length}
      </button>
      <Comments postId={post._id} comments={post.comments} />
    </div>
  </div>
  )
}

export default Post