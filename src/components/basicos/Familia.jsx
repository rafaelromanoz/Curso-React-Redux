import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {
//o map vai receber o children e vai retornar um clone do elemento children passando props       
        props.children.map((child,i) => {
          return cloneElement(child, {...props, key:i});
        })
      }
    </div>
  );
};
