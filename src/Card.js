import React from 'react'

const Card = (props) => {
  return (
      <div className="p-5 m-4 bg-light rounded-3">
        <div className="container-fluid py-5">
            {props.children}
        </div>
      </div>
  );
}

export default Card