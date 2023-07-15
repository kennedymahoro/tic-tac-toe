"use client"
import {useState} from "react";
export default function Home() {
  let Array_Squares = [];
  let [Which_Player, set_which_player] = useState(true)
  const X = "X";
  let X_Array: number[] = [];
  const O = "O";
  let currentplayer: string = "";
  let O_Array: number[] = [];
  //let Create_play;

  const Game:MouseEventHandler = (id: number, player:boolean) => {
    if(player){
      currentplayer = X; 
      X_Array.push(id)
    }
    else{
      currentplayer = O;
      O_Array.push(id)
    } 
    Array_Squares.push([id,currentplayer])
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="grid grid-cols-3 w-fit h-fit gap-x-2 gap-y-2 bg-zinc-400 ">
      <button key={1}  onClick={Game(1,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={2}  onClick={Game(2,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={3}  onClick={Game(3,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={4}  onClick={Game(4,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={5}  onClick={Game(5,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={6}  onClick={Game(6,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={7}  onClick={Game(7,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={8}  onClick={Game(8,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      <button key={9}  onClick={Game(9,Which_Player)} className="bg-white hover:bg-sky-300 w-20 h-20 ">{currentplayer}</button>
      </div>
    </main>
  )
}
