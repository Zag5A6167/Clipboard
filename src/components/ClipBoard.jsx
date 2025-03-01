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

   


  return (
    <div>
        <textarea className='inputText' rows="20" cols="50" value={text} onChange={handleTextChange} name="" id=""></textarea>
        <button className='btn'  onClick={copy}>Copy</button>
        
    </div>
  )
}

export default ClipBoard