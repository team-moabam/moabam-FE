import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import postTestAPI from './core/api/functions/postTestAPI';
import router from '@/core/routes/router';

const App = () => {
  const [postId, setPostId] = useState(1);

  const handleAllFetch = async () => {
    const data = await postTestAPI.getAllPosts();

    console.log(data);
  };

  const handleDetailFetch = async () => {
    const data = await postTestAPI.getDetailPost(`${postId}`);

    console.log(data);
  };

  const handlePostPost = async () => {
    const data = await postTestAPI.postPost({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    console.log(data);
  };

  const handlePutPost = async () => {
    const data = await postTestAPI.putPost({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    console.log(data);
  };

  const handleDeletePost = async () => {
    const data = await postTestAPI.deletePost(`${postId}`);

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
