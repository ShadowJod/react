import React from "react";

const Card = (props) => {

  return (
    <div className="text-center w-30 bg-amber-100 text-black rounded flex flex-col items-center gap-1 p-2 shrink-0">
      <img
        className=" h-25 w-25 rounded object-cover"
        src={props.imageUrl}
        alt="image"
      />
      <h2>{props.name}</h2>
      <h3 className="text-sm">{props.role}</h3>
      <p className="text-xs">{props.desc}</p>
      <button
        onClick={()=>{
          props.deleteElement(props.index)
        }}
        className=" text-xs bg-red-600 text-fuchsia-50 px-2 py-1 rounded active:scale-95 hover:text-fuchsia-50"
      >
        Delete 
      </button>
    </div>
  );
};

export default Card;
