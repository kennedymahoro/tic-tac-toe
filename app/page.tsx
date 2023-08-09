"use client"
import {useState} from "react";
import Logo from "../public/squre-logo.png"
import Image from "next/image"
export default function Home() {
  // both players
  let Array_Squares = [];
  let [Which_Player, set_which_player] = useState(true)
  // x player
  const X_p = "X";
  let X_Array: number[] = [];
  // o player
  const O_p = "O";
  let currentplayer: string = Which_Player == true ? X_p : O_p;
  let O_Array: number[] = [];

  const name_of_classes = "bg-white hover:bg-sky-300 w-28 h-28"

  const Button = (props: {id:number}):any => {
    return (
      <button type="button" key={props.id} onClick{() => {
        if(currentplayer == "X"){
         X_Array.push(props.id)
        }
        else{
          O_Array.push(props.id)
        }
        Array_Squares.push(props.id)
        set_which_player(e => !e)
      }} className={name_of_classes}>
        {currentplayer}
      </button>
    ) 
  }



  return (
    <main className="w-screen h-screen bg-white flex flex-col overflow-hidden">
      <Image src={Logo} alt="Logo" className="my-2 absolute right-0 " height={100} width={100} /> 
      <div className="grid place-content-center w-screen h-screen">
        <div className="grid grid-cols-3 w-fit h-fit gap-x-2 gap-y-2 bg-zinc-400 ">
          <Button id={1} />
          <button></button>
        </div>
      </div>
    </main>
  )
}
