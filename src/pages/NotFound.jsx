import NotStyles from "./styles/NotFound.module.css";
import { Icon } from "@iconify/react";
import { Link } from "wouter";

function NotFound() {
  return (
    <section className={NotStyles.PageNotFound}>
      <div className={NotStyles.Wrapper}>
        <div className={NotStyles.er}>404</div>
        <div className={NotStyles.Where}>Where are we... ?</div>
      </div>
      <div className={NotStyles.ButtonWrapper}>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
      <div className={NotStyles.notFound}>
        <Icon icon={"ic:outline-info"} width={"1.3em"} />
        Page Not Found
      </div>
    </section>
  );
}

export default NotFound;
