

import { FetchOptions, ofetch } from "ofetch";

const defaultOptions: FetchOptions = {
  baseURL: "http://94.139.254.148",
};

function createHttpClient(options?: FetchOptions) {
  const fetch = ofetch.create({ ...defaultOptions, ...options });

  async function get<T>(url: string, fetchOptions: FetchOptions<"json"> = {}) {
    return fetch<T>(url, {
      ...fetchOptions,
      method: "GET",
    });
  }

  async function post<T>(url: string, fetchOptions: FetchOptions<"json"> = {}) {
    return fetch<T>(url, {
      ...fetchOptions,
      method: "POST",
    });
  }

  async function put<T>(url: string, fetchOptions: FetchOptions<"json"> = {}) {
    return fetch<T>(url, {
      ...fetchOptions,
      method: "PUT",
    });
  }

  async function del<T>(url: string, fetchOptions: FetchOptions<"json"> = {}) {
    return fetch<T>(url, {
      ...fetchOptions,
      method: "DELETE",
    });
  }


  return { get, post, put, del };
}

export default createHttpClient();
