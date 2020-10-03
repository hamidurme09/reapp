const { render } = wp.element;

import MainApp from "./components/MainApp";

const textDemo = document.querySelectorAll(".wp-block-reapp-g-block");

textDemo.forEach((text) => {
  render(<MainApp />, text);
});
