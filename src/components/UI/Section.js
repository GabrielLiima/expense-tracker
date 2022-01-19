import classes from "./Section.module.css";

// Basic css for the title of the sections
const Section = (props) => {
  return (
    <h2 className={`${classes.section} ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default Section;
