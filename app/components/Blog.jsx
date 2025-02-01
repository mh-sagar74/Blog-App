"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Btn from "./Btn";
import {
  getTodoDataLocalStorage,
  setTodoDataLocalStorage,
} from "./todoLocalStorage";
import { useRouter } from "next/navigation";

export default function Blog() {
  const [allPosts, setAllPosts] = useState(() => getTodoDataLocalStorage());

  const handleDltBtn = (key) => {
    setAllPosts(allPosts.filter((post) => post.key !== key));
    console.log(key);
  };

  setTodoDataLocalStorage(allPosts);

  const router = useRouter();
  const handleAddBlogBtn = () => {
    router.push("/create-blog");
  };

  return (
    <div>
      {allPosts.map((post) => (
        <div className="bg-gray-200 mb-6 pb-4" key={uuidv4()}>
          <span className="text-wrap" key={post.key}>
            <h1 className="font-semibold bg-gray-400 p-3 overflow-auto">
              @{post.userName}
            </h1>
            <h1 className="p-3 overflow-auto">{post.post}</h1>
            <h1 className="pl-3 text-xs text-gray-600">
              Posted on {post.date} at {post.time}
            </h1>
            <div className="ml-3 mt-3">
              <Btn onCLick={() => handleDltBtn(post.key)} click={"Delete"} />
            </div>
          </span>
        </div>
      ))}
      <hr className="mb-3 mt-3" />
      <Btn variant="contained" click="Add Blog" onCLick={handleAddBlogBtn} />
    </div>
  );
}
