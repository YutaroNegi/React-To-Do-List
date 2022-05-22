import React from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { useState } from 'react';

function InputContainer(props){
    const [text, setText] = useState('')

    function handleTextChange(e){
        setText(e.target.value)
    }

    function handleEnter(e){
      if(e.keyCode === 13) {
        props.addItem(text)

        setText('')
      }
    }

    function handleAddClick(){
        props.addItem(text)
        setText('')
    }

    return(
        <div className='input-div-style'>
            <Input value={text} onChange={handleTextChange} onKeyDown={handleEnter} placeholder='Item' />
            <Button onClick={handleAddClick} primary>Primary</Button>
        </div>
    )
}

export default InputContainer