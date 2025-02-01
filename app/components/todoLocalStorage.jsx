export function getTodoDataLocalStorage() {
  const totalPosts = localStorage.getItem("MyBlog");
  if (!totalPosts) return [];
  return JSON.parse(totalPosts);
}

export function setTodoDataLocalStorage(posts) {
  return localStorage.setItem("MyBlog", JSON.stringify(posts));
}
