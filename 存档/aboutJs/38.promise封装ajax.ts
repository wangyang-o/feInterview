type AjaxType = <T = any>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS",
  url: string
) => Promise<T>;
const ajax: AjaxType = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.response);
        } else {
          reject(xhr);
        }
      }
    };
  });
};
