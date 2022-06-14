import React from "react";
import classes from "./Footer.module.css";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <section className={classes.footer}>
          Liepājas Valsts tehnikums &copy; {new Date().getFullYear()}
        </section>
      </div>
    );
  }
}
export default Footer;
