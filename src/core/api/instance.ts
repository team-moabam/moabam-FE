import axios from 'axios';

// TODO: 이후에 .env 파일에 넣어서 관리하는 백엔드 서버 API 주소로 변경해야 해요.
const baseURL = 'https://jsonplaceholder.typicode.com';

export const baseInstance = axios.create({ baseURL });
