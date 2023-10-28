import { React, useState, useRef } from 'react'
import circle from "../Assets/circle.png"
import cross from "../Assets/cross.png"

export default function TicTacToe() {

    let [data, setData] = useState(["", "", "", "", "", "", "", "", ""])
    let [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)

    const titleRef = useRef(null);
    const box0 = useRef(null)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

    const toggle = (e, num) => {
        if (!data[num]) {

            if (lock) return 0;
            if (count % 2 === 0) {
                e.target.innerHTML = `<img src='${circle}' />`
                data[num] = "o"
                setCount(++count)
            }
            else {
                e.target.innerHTML = `<img src='${cross}' />`
                data[num] = "x"
                setCount(++count)
            }
            winner();
            console.log(data)
        }
    }

    const winner = () => {
        if(count === 9) {
            titleRef.current.innerHTML = "No One <span class='text-orange-500 px-2'>Won<span/>"
            setTimeout(() => {
                reset();
            }, 1500);
        }
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") won(data[0])
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") won(data[3])
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") won(data[6])
        else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") won(data[6])
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") won(data[7])
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") won(data[8])
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") won(data[8])
        else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") won(data[2])
    }

    const won = (data) => {
        setLock(true)
        if (data === "x") titleRef.current.innerHTML = `Congratulations : <img class='w-20' src='${cross}' /> won`
        else if (data === "o") titleRef.current.innerHTML = `Congratulations :  <img class='w-20' src='${circle}' /> won`
    }

    const reset = () => {
        setData(["", "", "", "", "", "", "", "", ""])
        setCount(0)
        setLock(false)

        titleRef.current.innerHTML = "Tic Tac Toe Game In <span class='text-orange-500 pl-2'>React</span>"
        box_array.map((box) => box.current.innerHTML = "" )

        console.log("Reset Done!")
    }

    return (
        <div className='w-full h-screen bg-black/90 flex flex-col items-center p-10'>

            <p ref={titleRef} className='text-center flex justify-center items-center text-white text-4xl font-semibold'>Tic Tac Toe Game In
                <span className='text-orange-500 pl-2'>React</span>
            </p>

            <div className='m-10'>

                <div className='w-96 flex justify-around my-4'>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box0} onClick={(e) => toggle(e, 0)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box1} onClick={(e) => toggle(e, 1)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box2} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className='w-96 flex justify-around my-4'>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box3} onClick={(e) => toggle(e, 3)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box4} onClick={(e) => toggle(e, 4)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box5} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className='w-96 flex justify-around my-4'>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box6} onClick={(e) => toggle(e, 6)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box7} onClick={(e) => toggle(e, 7)}></div>
                    <div className='w-28 h-28 bg-gray-800 rounded-md cursor-pointer' ref={box8} onClick={(e) => toggle(e, 8)}></div>
                </div>

            </div>

            <button className='text-orange-500 bg-gray-800 px-8 py-3 text-3xl rounded-full' onClick={reset}>
                Reset
            </button>
        </div>
    )
}
