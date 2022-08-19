/** @format */

import Image from "next/image";
import React, { useEffect, useState } from "react";
import TimeAgo from "timeago-react";
function CommentBox({ id }) {
  const [comments, setComments] = useState([]);
  const [fetchComments, setFetchComments] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const comment = await fetch(`/api/comment?id=${id}`);
      const data = await comment.json();

      setComments(data);
      setFetchComments(false);
    };
    getComments();
  }, [fetchComments]);
  const [comment, setComment] = useState("");
  const createComment = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        text: comment,
        blog: id,
        createdAtPost: new Date().getTime().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFetchComments(true);
  };
  return (
    <div className="w-full ">
      <h1 className=" text-3xl font-medium text-left text-[#bd9575] mb-10 ">
        Tu comentario nos importa
      </h1>
      <div className="flex ">
        {/* Image */}
        <div className="mr-5">
          <Image src={"/assets/Comment.jpg"} alt="" width={50} height={50} />
        </div>
        {/* Box */}
        <form
          onSubmit={(e) => {
            createComment(e);
          }}
        >
          <textarea
            name=""
            id=""
            rows={3}
            cols="30"
            className="border border-primary-1  p-4 outline-none"
            placeholder="Escribe tu comentario"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className=" border-x border-primary-1 border-b h-12 flex justify-end p-1 ">
            <button className="rounded-md px-3 py-2 text-white bg-primary-1">
              Comment
            </button>
          </div>
        </form>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment._id} className="flex mt-4">
              <div className="mr-5">
                <Image
                  src={
                    comment?.user?.image
                      ? comment.user.image
                      : "/assets/Comment.jpg"
                  }
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="border border-primary-1 p-4">
                <p className="text-primary-1 font-medium">
                  {comment?.user?.name ? comment.user.name : "Anonimo"}
                </p>
                <p>{comment.text}</p>
                <p>
                  <TimeAgo
                    datetime={comment.createdAtPost}
                    locale="vi"
                    className="text-xs text-gray-700  opacity-80"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentBox;
