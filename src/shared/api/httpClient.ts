

import { FetchOptions, ofetch } from "ofetch";

const defaultOptions: FetchOptions = {
  baseURL: "https://94.139.254.148",
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

  interface FileResponse {
    fileName: string;
    blob: Blob;
  }

  async function downloadFile(
    url: string,
    fetchOptions?: FetchOptions<"blob">
  ): Promise<FileResponse> {
    let fileName = "download.xlsx";

    const blob = await fetch<FileResponse, "blob">(url, {
      ...fetchOptions,
      method: "GET",
      onResponse: ({ response }) => {
        const contentDisposition = response.headers.get("content-disposition");

        if (contentDisposition !== null) {
          let name = contentDisposition.split(/;(.+)/)[1].split(/=(.+)/)[1];

          if (name.toLowerCase().startsWith("utf-8''")) {
            name = decodeURIComponent(name.replace(/(utf|UTF)-8''/, ""));
          } else {
            name = decodeURIComponent(name.replace(/['"]/g, ""));
          }

          if (name) fileName = name;
        }
      },
    });

    return {
      fileName,
      blob,
    };
  }

  async function downloadFilePost(
    url: string,
    fetchOptions?: FetchOptions<"blob">
  ): Promise<FileResponse> {
    let fileName = "template.xlsx";

    const blob = await fetch<FileResponse, "blob">(url, {
      ...fetchOptions,
      method: "POST",
      onResponse: ({ response }) => {
        const contentDisposition = response.headers.get("content-disposition");

        if (contentDisposition !== null) {
          let name = contentDisposition.split(/;(.+)/)[1].split(/=(.+)/)[1];

          if (name.toLowerCase().startsWith("utf-8''")) {
            name = decodeURIComponent(name.replace(/(utf|UTF)-8''/, ""));
          } else {
            name = decodeURIComponent(name.replace(/['"]/g, ""));
          }

          if (name) fileName = name;
        }
      },
    });

    return {
      fileName,
      blob,
    };
  }

  return { get, post, put, del, downloadFile, downloadFilePost };
}

export default createHttpClient();
