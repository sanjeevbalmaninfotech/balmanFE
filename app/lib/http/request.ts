import { AxiosRequestConfig, AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiErrorPayload {
  message: string;
  status?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export class ApiError extends Error {
  status?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;

  constructor(payload: ApiErrorPayload) {
    super(payload.message);
    this.name = "ApiError";
    this.status = payload.status;
    this.data = payload.data;
  }
}

// Generic request helper.
export async function httpRequest<TResponse = unknown, TBody = unknown>(
  method: HttpMethod,
  url: string,
  options?: {
    body?: TBody;
    config?: AxiosRequestConfig;
  }
): Promise<TResponse> {
  const { body, config } = options ?? {};

  try {
    const response = await axiosInstance.request<TResponse>({
      method,
      url,
      data: body,
      ...(config ?? {}),
    });

    return response.data;
  } catch (err) {
    const axiosErr = err as AxiosError;

    const status = axiosErr.response?.status;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = axiosErr.response?.data;
    const message =
      (data && (data.message || data.error || data.detail)) ||
      axiosErr.message ||
      "Something went wrong while calling the API.";

    throw new ApiError({
      message,
      status,
      data,
    });
  }
}

// Convenience wrappers
export function getRequest<TResponse = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  return httpRequest<TResponse>("GET", url, { config });
}

export function postRequest<TResponse = unknown, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  return httpRequest<TResponse, TBody>("POST", url, { body, config });
}

export function putRequest<TResponse = unknown, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  return httpRequest<TResponse, TBody>("PUT", url, { body, config });
}

export function patchRequest<TResponse = unknown, TBody = unknown>(
  url: string,
  body?: TBody,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  return httpRequest<TResponse, TBody>("PATCH", url, { body, config });
}

export function deleteRequest<TResponse = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  return httpRequest<TResponse>("DELETE", url, { config });
}

