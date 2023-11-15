const JoinPage = () => {
  return (
    <div className="relative  h-screen ">
      <div className="absolute inset-x-0 top-1/3 flex flex-col items-center">
        <div className="mb-8 aspect-square w-3/5 max-w-[200px]">
          <img
            src="public\assets\Omok.png"
            alt=""
            className="w-full  rounded-full"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-3xl">안녕하세요!</h1>
          <h3 className=" text-lg text-dark-gray">
            다른 사람들과 같은 곳을 바라보면서 <br /> 루틴에 활기를 찾아봐요
          </h3>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5 mx-5 overflow-hidden rounded-full">
        <div
          className="relative bg-[#FFEB06] p-3 text-center font-extrabold text-[#6A2346] "
          onClick={() => alert('로그인 해야댐')}
        >
          <div className="absolute inset-y-0 left-5 grid place-content-center">
            <img
              src="public\kakaoTalk.png"
              alt=""
              className="h-7"
            />
          </div>
          <h1>카카오톡으로 로그인하기</h1>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
