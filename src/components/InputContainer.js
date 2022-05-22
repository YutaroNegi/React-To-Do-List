import React from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

function InputContainer(props){
    return(
        <div className='input-div-style'>
            <Input value={props.text} onChange={props.handleTextChange} onKeyDown={props.handleEnter} placeholder='Item' />
            <Button onClick={props.hadleAddClick} primary>Primary</Button>
        </div>
    )
}

export default InputContainer