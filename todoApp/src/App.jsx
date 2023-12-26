import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import bgMobile from "../images/bg-mobile-dark.jpg"
import lightBgMobile from "../images/bg-mobile-light.jpg"
import bgDesktop from '../images/bg-desktop-dark.jpg'
import lightBgDesktop from "../images/bg-desktop-light.jpg"

export default function body() {
  const [whatTodo, setWhatTodo] = useState("")
  const [list, setList] = useState([])
  const [theme, setTheme] = useState(true)

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
 
  const onChange = () => {
    setWhatTodo(event.target.value)
  }

  const handleClick = () => {
    if (whatTodo != "") {
     setList(previousList => [...previousList, {
      name:whatTodo, isChecked: "active"
     }])
    } else {}
    setWhatTodo("")
  }

  const handleTheme = () => {
    setTheme(!theme)
    if(theme == true) {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }
  }

  return (
    <main className='bg-[#e4e5f1] dark:bg-[#161722] w-full min-h-[100vh] flex flex-col items-center justify-start absolute top-0'>
      
      <picture className='w-full'>
        <source media="(min-width:520px)" srcSet={theme ? bgDesktop : lightBgDesktop} />
        <img src={theme ? bgMobile : lightBgMobile} className='w-full'></img>
      </picture>
      <Todo onChange={onChange} whatTodo={whatTodo} onClick={handleClick} list={list} updateList={setList} theme={theme} handleTheme={handleTheme} />

    </main>
  )
}