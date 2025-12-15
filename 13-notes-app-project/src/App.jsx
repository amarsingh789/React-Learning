import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [deatils, setDeatils] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, deatils})
    // console.log(copyTask)
    setTask(copyTask)
    // console.log(copyTask);
    

    // console.log("Sumitted");
    // console.log(title, deatils);

    setTitle('')
    setDeatils('')
  };

const delteBtn = (idx)=>{
  const copyTask =[...task];
  // console.log(copyTask[idx]);
  copyTask.splice(idx, 1)

  setTask(copyTask)
  
}

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* first input box */}
        <input
          type="text"
          placeholder="Enter Task Heading"
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value);
            
          }}
          className="px-5 w-full py-2 border-2 font-medium outline-none rounded"
        />
        {/* Detailed input box */}
        <textarea
          type="text"
          className="px-5 w-full h-32 py-2 flex font-medium items-center flex-row border-2 rounded  outline-none"
          placeholder="Enter Details"
          value={deatils}
          onChange={(e)=>{
            setDeatils(e.target.value)
            // console.log(e.target.value)
          }}
        />
        <button className="bg-white w-full font-medium text-black px-5 py-2 outline-none rounded active:bg-gray-400">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h2 className="text-3xl font-bold">Recent Notes</h2>
        <div className="flex  flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem, idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              {/* <h2 className="absolute top-5 right-5 bg-red-500 p-1 text-xs rounded-full"><X size={16} color="#ffffff" strokeWidth={2.75} /></h2> */}
              <div>
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight text-xs font-semibold text-gray-500">{elem.deatils}</p>
              </div>
              <button onClick={()=>{
                delteBtn(idx)
              }} className="w-full bg-red-500 cursor-pointer active:scale-95 text-white py-1 text-xs rounded font-bold">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
