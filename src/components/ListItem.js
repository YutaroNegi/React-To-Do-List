import React from "react";
import { useDispatch } from "react-redux";
import { Radio } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { deleteItem, doneItem} from '../reducer/listReducer'

function ListItem(props){
    const dispatch = useDispatch()
    return(
        <List.Item key={props.item.id}>
            <List.Content className="item">
            <Radio onClick={()=>{dispatch(doneItem(props.item.id))}} toggle defaultChecked={props.item.done}/>
            <span>{props.item.text}</span>
            <div onClick={()=>{dispatch(deleteItem(props.item.id))}} className='cursor-pointer'><i aria-hidden="true" className="trash large icon"></i></div>
            </List.Content>
        </List.Item>
    )
}

export default ListItem