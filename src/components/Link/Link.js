import React from "react";

const Link = (props) => {
  let { menu, path } = props.route;
  return (
    <div>
      <li className="mr-12">
        <a href={path}> {menu}</a>
      </li>
    </div>
  );
};

export default Link;
