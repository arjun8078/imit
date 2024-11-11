/* eslint-disable react/prop-types */
import {useState} from 'react'
import axios from 'axios';

const Upload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await axios.post('http://localhost:3001/api/upload', formData);
        const imageUrl = response.data.imageUrl;
  
        // Create post with image URL
        await axios.post('http://localhost:3001/api/posts', {
          userId: 'your-user-id', // replace with actual user ID
          caption,
          image: imageUrl,
        });
        setFile(null);
        setCaption('');
        onUpload(); // refresh the feed
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  return (
    <div className="flex flex-col items-center p-4 border-b">
    <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
    <input
      type="text"
      placeholder="Add a caption..."
      value={caption}
      onChange={(e) => setCaption(e.target.value)}
      className="mb-2 p-2 border rounded w-full"
    />
    <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded">
      Upload
    </button>
  </div>
  )
}

export default Upload