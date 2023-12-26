import { useState } from "react";
import sunIcon from "../images/icon-sun.svg"
import moonIcon from "../images/icon-moon.svg"
import TodoItem from "./TodoItem";
    


function Todo({ whatTodo, onChange, onClick, list, updateList, theme, handleTheme }) {
  const [display, setDisplay] = useState("all")
  
  
  function all() {
    setDisplay("all")
  }

  function notDone() {
    setDisplay("active")
  }

  function done() {
    setDisplay("completed")
  }

  
    return (
        <div className="relative bottom-40 ws:max-xws:bottom-20 flex flex-col justify-center min-w-[20rem] max-w-[24rem] laptop:min-w-[30rem]">
         <div className="flex flex-row justify-between items-center mb-6">
           <h1 className="text-[2.2rem] text-white tracking-[0.7rem] font-semibold">TODO</h1>
           <img src={theme ? sunIcon : moonIcon} onClick={handleTheme} className="hover:cursor-pointer" />
         </div>
         <div className="relative">
           <input placeholder="Create a new todo..." type="text" value={whatTodo} onChange={onChange} className="bg-[#fafafa] dark:bg-[#25273c] w-full h-12 p-4 pl-10 rounded-lg text-sm dark:text-white text-[#484b6a] caret caret-[#57ddff]" onKeyDown={(e) => {if (e.key === "Enter") {onClick()}}} />
           <div className="rounded-full w-5 h-5 border-2 border-slate-600 relative bottom-9 left-3"></div>
           <p className="text-[#3a7bfd] absolute top-3 right-4 text-sm hover:cursor-pointer" onClick={onClick}>Add</p>
         </div>
         <div className="rounded-lg">
            <ul>{list.map((item, id) => {
              if(item.isChecked == display || display == "all") {
                return (
                 <TodoItem key={id} whatTodo={item.name} list={list} updateList={updateList} index={id} isChecked={item.isChecked} />
                )
              } else {}
            })}</ul>
         </div>
        {list.length >= 1 ? (<ItemTracker count={list.length} list={list} updateList={updateList} ind={list.length} all={all} notDone={notDone} done={done} display={display} />) : null}
        {list.length >= 1 && window.screen.width < 640 ? (<Tabs all={all} notDone={notDone} done={done} display={display} />) : null}
        </div>
        
    )
}

function ItemTracker({ count, list, updateList, all, notDone, done, display }) {
  list.forEach((item) => {
    if(item.isChecked == "completed") {
     count = count - 1
    }
    else {}
  })

  function onClick() {
    const newList = list.filter((item) => item.isChecked == "active")
    updateList(newList)
  }

  return (
    <div className="bg-[#fafafa] dark:bg-[#25273c] h-12 w-full p-4 rounded-b-lg flex flex-row justify-between">
    <p className='text-slate-500 text-sm'><span>{count}</span>{count == 1  ? " item left" : " items left"}</p>
    {window.screen.width >= 640 ? (<Tabs all={all} notDone={notDone} done={done} display={display} />) : null}
    <p className='text-slate-500 text-sm hover:cursor-pointer hover:text-[#484b6a] dark:hover:text-white' onClick={onClick}>Clear Completed</p>
    </div>
  )
}

function Tabs({ all, done, notDone, display}) {
  return (
    <div className={window.screen.width < 640 ? "bg-[#fafafa] dark:bg-[#25273c] h-12 w-full p-4 px-12 mt-6 flex flex-row justify-between rounded-lg" : "bg-[#fafafa] dark:bg-[#25273c] h-8 w-[12rem] flex flex-row justify-between rounded-lg"}>
      <p className={display == "all" ? "text-[#3a7bfd] text-md hover:cursor-pointer" : "text-slate-500 text-md hover:cursor-pointer hover:text-[#484b6a] dark:hover:text-white"} onClick={all}>All</p>
      <p className={display == "active" ? "text-[#3a7bfd] text-md hover:cursor-pointer" : "text-slate-500 text-md hover:cursor-pointer hover:text-[#484b6a] dark:hover:text-white"} onClick={notDone}>Active</p>
      <p className={display == "completed" ? "text-[#3a7bfd] text-md hover:cursor-pointer" : "text-slate-500 text-md hover:cursor-pointer hover:text-[#484b6a] dark:hover:text-white"} onClick={done}>Completed</p>
    </div>
  )
}

export default Todo