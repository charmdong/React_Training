import React from 'react';

function Button(props) {
  const { text, onClick, bgColor="green" } = props;

  return (
    <button 
      style={{
        border: 0,
        borderRadius: 10,
        padding: 10,
        backgroudColor: {bgColor}
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;