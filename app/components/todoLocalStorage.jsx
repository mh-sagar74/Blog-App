export function getTodoDataLocalStorage() {
  const totalPosts =
    typeof window !== "undefined" ? localStorage.getItem("MyBlog") : false;
  if (!totalPosts) return [];
  return JSON.parse(totalPosts);
}

export function setTodoDataLocalStorage(posts) {
  return typeof window !== "undefined"
    ? localStorage.setItem("MyBlog", JSON.stringify(posts))
    : false;
}
