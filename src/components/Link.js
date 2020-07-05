import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  }

  return (
    <a
        className={className}
        href={href}
        onClick={onClick}
    >
      { children }
    </a>
  );
}

export default Link;