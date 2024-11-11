/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = ({ imageId }) => {
  const [image, setImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/api/images/${imageId}`);
        setImage(response.data.image);
        setComments(response.data.comments);
        setLikes(response.data.likes);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [imageId]);

  const handleLike = async () => {
    try {
      const response = await axios.post(`/api/images/${imageId}/like`);
      setLikes(response.data.likes);
    } catch (error) {
      console.error('Error liking image:', error);
    }
  };

  const handleComment = async (commentText) => {
    try {
      const response = await axios.post(`/api/images/${imageId}/comment`, { comment: commentText });
      setComments(response.data.comments);
    } catch (error) {
      console.error('Error commenting on image:', error);
    }
  };

  return (
    <div>
      <img src={image} alt="Uploaded Image" />
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <input type="text" placeholder="Add a comment" />
      <button onClick={() => handleComment()}>Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDisplay;