import React from "react";
import '../css/test.css'
import {motion} from 'framer-motion'
import { useEffect , useRef } from "react";
import paraData from "./paragraph" 

export default function Test(){


    const [ status , setStatus ] = React.useState('hold')
     
    const [placeholder , changedPlaceholder ] = React.useState('Press Start to begin Typing Test!')

    function changePlaceholder(){
        changedPlaceholder(()=>'Start Typing ')
    }

    function focusLost(){
        if(status==='hold'){
            changedPlaceholder(()=>'Press Start to begin Typing Test!')
        }
        else{
        changedPlaceholder(()=>'Type here!')
        }
    }
    
    const [ type , typeUpdate ] = React.useState('')

    const [words , setWords ] = React.useState([])

    const[ paraStatus , setparaStatus ] = React.useState(true)


    useEffect(()=>{

        const lengthPara = Object.keys(paraData).length

        const random = Math.floor(Math.random() * lengthPara) + 1;

        const paragraph = paraData[random]

        const paragraphWords = paragraph.split(' ')

        setWords(paragraphWords)
    },[paraStatus])


    function textChange(event){

        let value = event.target.value
          
        typeUpdate(value)
   
    }
     const [ timer , updateTimer] = React.useState(60)

     const [ start , updateStart] = React.useState(true)

     const [ counter , counterUpdate] = React.useState(0)

     const [ correct , setCorrect] = React.useState(0)

     const [ incorrect , setInorrect] = React.useState(0)

     const [ highlightindex , setHighlightindex ] = React.useState(-1)

     const [highlightchar , setHighlightchar ] = React.useState("")

   let watch = useRef()


    function timerStart(){


         watch.current = setInterval(() => { updateTimer((prev) => {
                if(prev === 0){
                    clearInterval(watch.current)
                    setStatus('hold')
                    typeUpdate("Oops time over!")
                    changedPlaceholder(()=>'Type here!')
                    setHighlightchar("")
                    setHighlightindex(-1)
                    return 0
                }
                else{
              
                return prev - 1
                    }
         })}, 1000);
         updateStart(false)
        setStatus("start")
        changedPlaceholder(()=>'Start Typing ')
        
    }
 

    function timerStop(){
        updateStart(prev=>prev?false:true)
        clearInterval(watch.current)
        updateTimer(60)
        typeUpdate("")
        changedPlaceholder(()=>'Press Start to begin Typing Test!')
        setStatus('hold')
        counterUpdate(0)
        setCorrect(0)
        setInorrect(0)
        setHighlightchar("")
        setHighlightindex(-1)
        setparaStatus(prev=>!prev)
        
    }

    useEffect(()=>{

        return ()=> clearInterval(watch.current)

    },[])


    function handleInput(event){
         
        if(event.key !== "Shift"){

         if(event.key ===" "){
         match()
         counterUpdate(prev=>prev+1)
         setHighlightindex(-1)

        }
        else if(event.key==="Backspace"){
                setHighlightindex((prev)=>{
                    if(prev> -1){
                    return prev-1
                }
                else return prev
                })
                console.log(highlightindex)
                setHighlightchar("")
        }
        else{
            setHighlightindex(prev=>prev+1)
            setHighlightchar(event.key)
        }
    }
    }

    let string = []

    function match(){
        const curWord = words[counter]
        type.trim().split(" ").map((words,ind)=>{

            string.push(words)
        
        })
        const curString = string[counter]

        if(curWord===curString){

            setCorrect(prev=>prev+1)
        }
        else{
            setInorrect(prev=>prev+1)
        }
       
    
           

    }

    function charColor(wordIndex , charIndex , char){

            if(wordIndex === counter && charIndex === highlightindex && highlightchar){

                if(char===highlightchar){
                    return 'correct'
                }
                else{
                    return 'incorrect'

                }

            }
            else if(wordIndex === counter && highlightindex >= words[counter].length){
                console.log("ok")
                    return 'incorrect'
            }
            else return ''

    }

    const accuracy = Math.round(correct/(correct+incorrect)*100)

    return(
        <motion.div
        initial={{scale: 0 }}
    animate={{scale: 1 }}
    exit={{scale: 0 }}
    transition={{ duration: 0.5}}>
           
            <div className="type-main wf-section">
         <div className="corners-top">
            <div className="right-corner"><img src="/images/pin-svgrepo-com.svg" alt=""/></div>
            <div  className="top-corner"><img src="/images/pin-svgrepo-com.svg" alt=""/></div>
         </div>
         <div className="stats">
            <div className="seconds">
               <div className="seconds-image"><img src="/images/sand-clock-timer-svgrepo-com.svg" alt="" className="sec-img"/></div>
               <div className="seconds-text">
                  <div className="seconds-text-top">{timer}</div>
                  <div className="seconds-text-bottom">Seconds</div>
               </div>
            </div>
            <div className="wpm">
               <div className="wpm-image"><img src="/images/keyboard-svgrepo-com.svg" alt=""/></div>
               <div className="wpm-text">
                  <div className="wpm-text-top">{correct}</div>
                  <div className="wpm-text-bottom">WPM</div>
               </div>
            </div>
            <div className="accuracy">
               <div className="accuracy-image"><img src="/images/stopwatch-svgrepo-com.svg"  alt=""/></div>
               <div className="accuracy-text">
                  <div className="accuracy-top-text">{isNaN(accuracy)?0:accuracy}%</div>
                  <div className="accuracy-bottom-text">accuracy</div>
               </div>
            </div>
         </div>
         <div className="paragraph">
            <div className="para-text"> <p>{words.map((word,index)=>{
                return(
                    <span key={index}>{
                        word.split("").map((char,i)=>{
                            return <span className={charColor(index,i,char)} key={i}>{char}</span>
                        })
                        } </span>
                )
            })}</p>
            </div>
         </div>
         <div className="input">
            <div className="form-block w-form">
                  <form className="form">
                    <input  type="text" 
                            name="text" 
                            className="text-field w-input"
                            placeholder={placeholder} 
                            onFocus={changePlaceholder} 
                            onBlur={focusLost} 
                            onChange={textChange}
                            onKeyDown={handleInput}
                            value={type}
                            disabled={status==='hold'}/>
                    {start && <button className="form-button w-button" onClick={() => timerStart()}>Start</button>}
                  {!start && <button className="form-button w-button"onClick={() => timerStop()}>Reset</button>}
                    </form>
                

            </div>
         </div>
         <div className="corners-down">
            <div className="bottom-corner"><img src="/images/pin-svgrepo-com.svg" alt="" className="bottom-img" /></div>
            <div className="left-corner"><img src="/images/pin-svgrepo-com.svg" alt=""/></div>
         </div>
      </div>
    
        </motion.div>
    )


}