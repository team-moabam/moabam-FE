import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';
import router from '@/core/routes/router';

const App = () => {
  const [postId, setPostId] = useState(1);

  const handleAllFetch = async () => {
    const { data } = await axios.get('/example/posts');
    console.log(data);
  };

  const handleDetailFetch = async () => {
    const { data } = await axios.get(
      `/example/posts/${postId}?paramA=1&paramB=2`
    );
    console.log(data);
  };

  const handlePostPost = async () => {
    const { data } = await axios.post('/example/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    console.log(data);
  };

  const handlePutPost = async () => {
    const { data } = await axios.put(`/example/posts/${postId}`, {
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    console.log(data);
  };

  const handleDeletePost = async () => {
    const { data } = await axios.delete(`/example/posts/${postId}`);

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
      <div>
        <button onClick={handlePostPost}>포스트 생성</button>
      </div>
      <div>
        <button onClick={handlePutPost}>포스트 수정</button>
      </div>
      <div>
        <button onClick={handleDeletePost}>포스트 삭제</button>
      </div>
    </>
  );
};

export default App;
