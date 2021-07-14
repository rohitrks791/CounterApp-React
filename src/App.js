import React, {useState} from "react"
import "./style.css"

const App=()=>{

    let [score, setScore] = useState(0)

    return(
        <div>
            <div id = "container">
                <h2>Counter</h2>
                <h1 id="counterValue">{score}</h1>
                <div id="buttons">
                <button id="increment" onClick={()=>(score<25)?setScore(score+1): score}> Increment </button>
                <button id="decrement" onClick={()=>(score<=25 && score>0)?setScore(score-1):" "}> Decrement </button>
                <button id="reset" onClick={()=>{setScore(0)}}> Reset </button>
                </div>
            </div>
        </div>
    )
}

export default App
