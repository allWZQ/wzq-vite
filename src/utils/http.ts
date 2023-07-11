import axios from "axios";

// 创建axios实例
const Http = axios.create({
  timeout: 1000 * 60 * 3,
  baseURL: `${import.meta.env.VITE_APP_API_HOST}/`,
});

Http.interceptors.request.use(
  async (config) => {
    // 增加固定请求参数
    let data = config.data;
    let isGet = config.method == "get";
    if (isGet) {
      data = config.params;
    }
    data = {
      ...data,
    };
    // 打印请求参数
    console.log("----------------");
    console.log(config);
    console.log(config.url);
    console.log(JSON.stringify(data));
    console.log("----------------");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Http.interceptors.response.use(
  (response) => {
    let resultData;
    resultData = response.data;
    // 打印结果
    console.warn("----------------");
    console.log(response.config.url);
    console.log(resultData);
    console.warn("----------------");
    return resultData;
  },
  (error) => {
    // 拦截错误
    console.log(error);
    const err = {
      ...error,
      ...error.response,
    };
    return Promise.reject(err);
  }
);

export default Http;
