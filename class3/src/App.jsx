import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [desc, setdesc] = useState("");
  const [role, setrole] = useState("");
  const [allUser, setallUser] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const oldUser = [...allUser];
    oldUser.push({ name, imageUrl, role, desc });
    setallUser(oldUser);

    setname("");
    setimageUrl("");
    setdesc("");
    setrole("");
  };

  const deleteElement = (idx) =>{
    const copyUser = [...allUser]
    copyUser.splice(idx,1);
    setallUser(copyUser);
  }

  return (
    <div className="h-screen bg-[#111] text-[#FFF]">
      <form onSubmit={formHandler} className="text-center">
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          className=" border-2 m-2 p-2 w-[95%] outline-0 lg:w-[47%] xl:w-[47%]"
          type="text"
          placeholder="Enter your Name"
          value={name}
        />
        <input
          onChange={(e) => {
            setimageUrl(e.target.value);
          }}
          className=" border-2 m-2 p-2 w-[95%] outline-0 lg:w-[47%] xl:w-[47%]"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
        />
        <input
          onChange={(e) => {
            setrole(e.target.value);
          }}
          className=" border-2 m-2 p-2 w-[95%] outline-0 lg:w-[47%] xl:w-[47%]"
          type="text"
          placeholder="Enter role"
          value={role}
        />
        <input
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          className=" border-2 m-2 p-2 w-[95%] outline-0 lg:w-[47%] xl:w-[47%]"
          type="text"
          placeholder="Enter Description"
          value={desc}
        />
        <input
          type="submit"
          value="Create User"
          className=" px-4 py-2 mt-2 bg-emerald-600 rounded w-[95%] active:scale-95 cursor-pointer"
        />
      </form>

      <div className="p-7 flex gap-4 flex-wrap">
        {allUser.map((ele, idx) => {
          return (
            <Card
              key={idx}
              name={ele.name}
              role={ele.role}
              desc={ele.desc}
              imageUrl={ele.imageUrl}
              deleteElement = {deleteElement}
              index = {idx}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
