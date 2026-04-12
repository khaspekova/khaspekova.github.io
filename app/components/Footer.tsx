import VectorEmail from "@/components/UI/VectorEmail";
import classes from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <VectorEmail />
        <div className={`${classes.bottom} font-large`}>
          <div className={classes.bottomLeft}>
            <p>©2025</p>
            {/* <p>based in Amsterdam</p> */}
          </div>
          <p className={classes.woof}>woofty doofty ⌾︎︎︎</p>
        </div>
      </div>
    </footer>
  );
}
