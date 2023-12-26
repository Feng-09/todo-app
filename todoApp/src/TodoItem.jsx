import crossIcon from "../images/icon-cross.svg"
import checkIcon from "../images/icon-check.svg"

function TodoItem({ whatTodo, list, updateList, index, isChecked }) {
  function handleCompleted() {
    const newList = [...list]
    newList[index].isChecked = 'completed'
    updateList(newList)
  }

  function undoCompleted() {
    const newList = [...list]
    newList[index].isChecked = "active"
    updateList(newList)
  }

    return (
      <li>
        <div className={index == 0 ? "bg-[#fafafa] dark:bg-[#25273c] h-12 w-full p-4 rounded-t-lg flex flex-row justify-between group" : "bg-[#fafafa] dark:bg-[#25273c] h-12 w-full p-4 flex flex-row justify-between group"}>
         <div className="flex flex-row">
          <div className=" bg-slate-600 hover:bg-gradient-to-br from-[#57ddff] to-[#c058f3] rounded-full w-5 h-5 p-0.5 mr-3">
           <div className="rounded-full w-full h-full hover:cursor-pointer bg-[#fafafa] dark:bg-[#25273c]" onClick={handleCompleted}></div>
          </div>
          {isChecked == "completed" ? (<CheckIcon onClick={undoCompleted} />) : null}
          <p className="item-text text-[#484b6a] dark:text-white text-sm peer-[.is-active]:text-slate-500 peer-[.is-active]:line-through">{whatTodo}</p>
         </div>
         <img src={crossIcon} className="w-4 h-4 hover:cursor-pointer laptop:hidden group-hover:block" onClick={() => {
          updateList(list.filter((a, id) => {
            return id != index
          }))
         }} />
       </div>
      </li>
    )
  }

  function CheckIcon({ onClick }) {
    return (
      <div className="bg-gradient-to-br from-[#57ddff] to-[#c058f3] h-5 w-5 flex items-center justify-center rounded-full absolute left-4 peer is-active hover:cursor-pointer">
        <img src={checkIcon} className="w-3 h-3" onClick={onClick} />
      </div>
    )
  }

export default TodoItem