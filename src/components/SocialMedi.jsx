import React from "react";

const SocialMedi = ({ className, link, icon }) => {
  return (
    <li className={className}>
      <a href={link}>{icon}</a>
    </li>
  );
};

export default SocialMedi;
