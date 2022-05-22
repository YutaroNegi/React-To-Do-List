import React from "react";
import { Radio } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

function ListItem(props){
    return(
        <List.Item key={props.item.id}>
            <List.Content className="item">
            <Radio onClick={()=>{props.handleChangeDone(props.item.id)}} toggle defaultChecked={props.item.done}/>
            <span>{props.item.text}</span>
            <div onClick={()=>{props.handleDeleteClick(props.item.id)}} className='cursor-pointer'><i aria-hidden="true" className="trash large icon"></i></div>
            </List.Content>
        </List.Item>
    )
}

export default ListItem