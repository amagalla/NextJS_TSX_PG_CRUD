import React from "react";
import PostLists from "./components/PostLists";
import style from "../styles/index.module.scss";
import Link from "next/link";

const App = () => {
  return (
    <>
      <div className={style.secrete_div}>
        <Link href='/components/NotSoSecretePage'>
          <a>
            <button>Go to Secret Page</button>
          </a>
        </Link>
      </div>
      <PostLists />
    </>
  );
};

export default App;
