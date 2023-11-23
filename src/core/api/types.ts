import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInterceptorManager,
  InternalAxiosRequestConfig
} from 'axios';
import '@tanstack/react-query';

export type CustomAxiosError = AxiosError<{
  message?: string;
  validation?: {
    [key: string]: any;
  };
}>;

// Tanstack-Query 글로벌 에러 타입 설정
declare module '@tanstack/react-query' {
  interface Register {
    defaultError: CustomAxiosError;
  }
}

// AxiosInstance 인터페이스의 내용을 그대로 확장하고 응답에서 data 만 파싱한 인터페이스
export interface CustomAxiosInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = T, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
  get<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  delete<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  head<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  options<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  post<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  put<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patch<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  postForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  putForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patchForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}
