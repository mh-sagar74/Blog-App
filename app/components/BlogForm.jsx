"use client";

import Input from "./Input";
import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import Btn from "./Btn";
import { v4 as uuidv4 } from "uuid";
import {
  getTodoDataLocalStorage,
  setTodoDataLocalStorage,
} from "./todoLocalStorage";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [posts, setPosts] = useState(() => getTodoDataLocalStorage());
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const date = new Date();

  const handlePostBtn = () => {
    if (input && textArea) {
      setPosts((pre) => {
        return [
          ...pre,
          {
            userName: input.toLocaleLowerCase(),
            post: textArea,
            key: uuidv4(),
            time: date.toLocaleTimeString(),
            date: `${date.getDate()}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`,
          },
        ];
      });
      setIsSuccess(true);
    }
    setInput("");
    setTextArea("");
    router.push("/blog");
  };

  setTodoDataLocalStorage(posts);

  return (
    <div>
      <Input
        label="@user_name"
        value={input}
        onChange={(e) => setInput(e.target.value.replace(/\s/g, ""))}
      />
      <TextArea
        label="Write Your Blog"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <Btn onCLick={handlePostBtn} click={"Post"} />
      {isSuccess ? (
        <div className="text-white bg-blue-500">
          Your blog posted successfully
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
