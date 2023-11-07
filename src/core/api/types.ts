import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInterceptorManager,
  InternalAxiosRequestConfig
} from 'axios';
import '@tanstack/react-query';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}

// statusCode를 포함한 응답 타입
export type ResponseWithStatusCode<T = any> = T & { statusCode: number };

// AxiosInstance 인터페이스의 내용을 그대로 확장하여 응답에 ResponseWithStatusCode를 적용한 인터페이스
export interface CustomAxiosInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<any>>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = ResponseWithStatusCode<T>, D = any>(
    config: AxiosRequestConfig<D>
  ): Promise<R>;
  get<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  delete<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  head<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  options<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  post<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  put<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patch<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  postForm<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  putForm<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patchForm<T = any, R = ResponseWithStatusCode<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}
