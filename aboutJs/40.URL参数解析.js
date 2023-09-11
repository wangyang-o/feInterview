// 手写parseQuery实现对URL的解析;
// 可以利用a标签的href特性;
// 可以用浏览器端的URL对象来处理;

const parseQuery = (url) => {
  const a = document.createElement("a");
  a.href = url;
  const result = {};
  const query = a.search.slice(1);
  for (const part of query.split("&")) {
    const [key, value] = part.split("=");
    result[key] = decodeURIComponent(value);
  }
  return result;
};

// 示例用法：
const url = "https://www.example.com/path/to/page?name=John&age=30";
const queryParams = parseQuery(url);
console.log(queryParams);

// 方式二
const url1 = new URL("https://www.example.com/path/to/page?name=John&age=30");
const urlQueryParams = Object.fromEntries(url1.searchParams.entries());
console.log(urlQueryParams);
