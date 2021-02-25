import React, { useState } from "react";
import style from "../../styles/postLists.module.scss";

const PostLists = () => {
  const [show, setShow] = useState({ show: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShow({ show: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${show.show} submitted`);
    setShow({ show: "" });
  };

  return (
    <div className={style.postList_container}>
      <p>Type in your favorite show</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='Type show'
            value={show.show}
            onChange={handleChange}
          />
        </div>
        <span>
          <button className={style.button}>Post</button>
        </span>
      </form>
    </div>
  );
};

export default PostLists;
