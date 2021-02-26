import React, { useState, useEffect } from "react";
import style from "../../styles/postLists.module.scss";

const PostLists = () => {
  const [show, setShow] = useState({ show: "" });
  const [list, setList] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShow({ show: value });
  };
  const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id } = e.target;

    fetch("http://localhost:3000/api/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(show),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error: ", err);
      });

    setShow({ show: "" });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => {
        console.log(err);
      });
  });

  const displayList = list.map((element, i) => (
    <div>
      <div className={style.outputItem} key={i}>
        {element.show}
      </div>
      <div className={style.btn}>
        <button onClick={deleteItem} id={element.id}>
          Delete
        </button>
      </div>
    </div>
  ));

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
      <div className={style.outputList}>{displayList}</div>
    </div>
  );
};

export default PostLists;
