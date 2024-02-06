"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
    setMaintask([...maintask, { title, desc }]);
    setTitle("");
    setdesc("");
  };

  const deletefunc = (i) => {
    let copy = [...maintask];
    copy.splice(i,1);
    setMaintask(copy)
  }

  let renderTask = <h2>no task available</h2>;

  if(maintask.length > 0){
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
        <div className="flex items-center  w-2/3 justify-between ">
          <h5>{t.title}</h5>
          <h6>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deletefunc(i);
        }} className="bg-red-600 p-2 text-white font-extrabold rounded-xl">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl p-5 text-center font-bold">
        Siddhak's Todo
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center mt-7 mx-5 gap-10"
      >
        <input
          className=" border-2 border-zinc-800 p-2"
          type="text"
          value={title}
          placeholder="Write your task Title here "
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          className=" border-2 border-zinc-800 p-2"
          type="text"
          value={desc}
          placeholder="Write your description here"
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white font-extrabold p-3">
          Submit
        </button>
      </form>

      <div className="bg-gray-200 p-8 mt-10">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
