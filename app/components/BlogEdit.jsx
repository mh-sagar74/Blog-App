"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Btn from "./Btn";
import TextArea from "./TextArea";
import { useEffect, useState } from "react";

export default function BlogEdit() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("MyBlog")) || [];
    const selectedPost = storedData.find((p) => p.key === key);
    if (selectedPost) {
      setEdit(selectedPost.post);
    }
  }, [key]);

  const handleDoneBtn = () => {
    let storedData = JSON.parse(localStorage.getItem("MyBlog")) || [];
    const updatedData = storedData.map((p) =>
      p.key === key ? { ...p, post: edit } : p
    );

    localStorage.setItem("MyBlog", JSON.stringify(updatedData));
    router.push("/blog");
  };

  return (
    <div>
      <h1 className="font-semibold pb-3">@{searchParams.get("name")}</h1>
      <TextArea
        label="Edit your Blog"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <Btn disabled={!edit.length} click="Done" onCLick={handleDoneBtn} />
    </div>
  );
}
