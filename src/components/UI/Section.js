import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <h2 className={`${classes.section} ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default Section;
