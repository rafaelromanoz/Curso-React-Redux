import React from "react";
import "../layout/Card.css";

export default (props) => {
    const cardStyle={
        backgroundColor:props.color || '#F00',
        borderColor:props.color || 'F00'
    }
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">
          {props.children} {/* children significa os filhos dentro do card */}
      </div>
    </div>
  );
};
