import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Upload from './Upload';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
    <Upload onUpload={fetchPosts} />
    {posts.map((post) => (
      <Post key={post._id} post={post} onLike={fetchPosts} />
    ))}
  </div>
  )
}

export default Feed