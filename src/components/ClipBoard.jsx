import React,{useState} from 'react'
import './ClipBoard.css'
function ClipBoard() {

    const [text, setText] = useState('')
    const [copyOk,setCopyOk] = useState(null)

    const handleTextChange = (event) => {
        setText(event.target.value)
        
        setCopyOk(null) 


    }

    const handleTextClear = (event) =>{
        setCopyOk(null)
    }

    const copy = async () => {
        try{
            await navigator.clipboard.writeText(text)
        }catch{

        }
    }


  return (
    <div>
        <textarea className='inputText' rows="20" cols="50" value={text} onChange={handleTextChange} name="" id=""></textarea>
        <button className='btn'  onClick={copy}>Copy</button>
        <button className='btn' onClick={clear}>Clear</button>
    </div>
  )
}

export default ClipBoard