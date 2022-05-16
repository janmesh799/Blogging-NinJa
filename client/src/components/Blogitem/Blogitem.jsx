import React from "react";

const Blogitem = (props) => {
  const { title, description } = props.note;
  return (
    <>
      <div className="card mx-2 my-4 col-md-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Blogitem;
