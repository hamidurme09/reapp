/**
 * Block dependencies
 */

import icon from "./icon";
import "./style.scss";
import Gallery from "react-photo-gallery";

/**
 * Block libraries
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

/**
 * Register Block
 */

export default registerBlockType("reapp/g-block", {
  title: __("ReApp"),
  description: __("A demo custom reapp block"),
  category: "common",
  icon: "shield",

  attributes: {
    content: {
      type: "string",
      default: "ReactHelloWorld !",
    },
  },

  edit: (props) => {
    const {
      attributes: { content },
      className,
    } = props;

    return (
      <Fragment>
        <div className={className}>
          <h2>{content}</h2>
        </div>
      </Fragment>
    );
  },

  save: (props) => {

    const { content } = props.attributes;

    return (
      <div>
        <h2>{content}</h2>
      </div>
    );
  },
});
