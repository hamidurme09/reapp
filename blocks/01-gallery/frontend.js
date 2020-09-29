const { render } = wp.element;

import FrontText from "./components/FrontText";

const textDemo = document.querySelectorAll(".wp-block-reapp-g-block");

textDemo.forEach((text) => {
  render(<FrontText />, text);
});
