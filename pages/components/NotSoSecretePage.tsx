import React from "react";
import Link from "next/link";
import style from "../../styles/notSecrete.module.scss";

const NotSoSecretePage = () => {
  return (
    <div className={style.secrete_div}>
      <div>
        <div className={style.secrete_text}>Totally not a secrete page</div>
      </div>
      <div className={style.btn}>
        <Link href='/'>
          <a>
            <button>Go to Secret Page</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotSoSecretePage;
