import axios from "axios";
import { call } from "redux-saga/effects";
import CustomError from "./custom-error";

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

const getFullPath = (path: string) => {
  return `${apiEndpoint}/${path}`;
};

export function* request(path, options) {
  try {
    const result = yield call(() =>
      axios.request({
        url: path,
        ...options,
      })
    );
    return result.data;
  } catch (error) {
    const { response } = error || {};
    if (error?.status === 500 || response?.status === 500) {
      reportError(error);
      throw new CustomError("Something went wrong", 500);
    }
    if (!response) {
      throw new CustomError("Network disconnected", 503);
    }
    const message = response.data.error || response.statusText || "unknown error occurred";
    throw new CustomError(message, response.status);
  }
}

export const get = (path, params = null, headers = {}, opts = null) => {
  const options = {
    method: "get",
    headers,
    ...opts,
  };

  return request(getFullPath(path), options);
};

export const post = (path, params = null, headers = {}) => {
  const options = {
    method: "post",
    data: params,
    headers,
  };
  return request(getFullPath(path), options);
};

export const patch = (path, params = null, headers = {}) => {
  const options = {
    method: "patch",
    data: params,
    headers,
  };
  return request(getFullPath(path), options);
};

export const deleteRequest = (path, params = null, headers = {}) => {
  const options = {
    method: "delete",
    data: params,
    headers,
  };

  return request(getFullPath(path), options);
};
