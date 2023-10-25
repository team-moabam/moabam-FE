import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';
import router from '@/core/routes/router';

const App = () => {
  const [postId, setPostId] = useState(1);

  const handleAllFetch = async () => {
    const { data } = await axios.get('/posts');
    console.log(data);
  };

  const handleDetailFetch = async () => {
    const { data } = await axios.get(`/posts/${postId}`);
    console.log(data);
  };

  return (
    <>
      <RouterProvider router={router} />
      <div>
        <button onClick={handleAllFetch}>포스트 전체 조회</button>
      </div>
      <div>
        <button onClick={handleDetailFetch}>{postId}번 포스트 조회</button>
      </div>
      <div>
        <button onClick={() => setPostId(postId + 1)}>+</button>
        <button onClick={() => setPostId(postId - 1)}>-</button>
      </div>
    </>
  );
};

export default App;
