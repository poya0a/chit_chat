import React, { useEffect } from "react";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useAppDispatch } from "@store/store";
import { actIsLoading } from "@components/common/loadingSlice";

const ax = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

const AxiosInterceptor = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const pending = (config: AxiosRequestConfig): any => {
      dispatch(actIsLoading(true));
      return config;
    };

    const fulfilled = (response: AxiosResponse): AxiosResponse => {
      dispatch(actIsLoading(false));
      return response;
    };

    const rejected = async (error: AxiosError): Promise<AxiosError> => {
      dispatch(actIsLoading(false));
      return error;
    };

    const reqInterceptor = ax.interceptors.request.use(pending);
    const resInterceptor = ax.interceptors.response.use(fulfilled, rejected);

    return () => {
      ax.interceptors.request.eject(reqInterceptor);
      ax.interceptors.response.eject(resInterceptor);
    };
  }, []);
};

export default ax;
export { AxiosInterceptor };
