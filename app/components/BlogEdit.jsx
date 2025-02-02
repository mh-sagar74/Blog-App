"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Btn from "./Btn";
import TextArea from "./TextArea";
import { useState } from "react";
import { setTodoDataLocalStorage } from "./todoLocalStorage";

export default function BlogEdit() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [blog, setBlog] = useState(searchParams.get("data"));

  const handleDoneBtn = () => {
    // setTodoDataLocalStorage(blog);
    router.push("/blog");
  };

  return (
    <div>
      <h1>@{searchParams.get("name")}</h1>
      <TextArea
        label="Edit your Blog"
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
      />
      <Btn click="Done" onCLick={handleDoneBtn} />
    </div>
  );
}
