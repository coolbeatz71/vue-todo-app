import mockedData from './getTodos';

const axios = {
  get: () => new Promise(resolve => resolve({ data: [mockedData] })),
  post: () => new Promise(resolve => resolve({ data: [mockedData] })),
  delete: () => new Promise(resolve => resolve({})),
  put: () => new Promise(resolve => resolve({ data: [mockedData] })),
};
export default axios;
