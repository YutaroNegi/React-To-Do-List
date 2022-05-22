import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import ListItem from './ListItem'

function ListContainer(props){
    return(
        <Segment inverted className='items-box bg-dark white-txt'>
        <List divided inverted relaxed>
            {props.items.map(item=>{
                return(<ListItem item={item} handleChangeDone={props.handleChangeDone} handleDeleteClick={props.handleDeleteClick}></ListItem>)
            })}
        </List>
        </Segment>
    )
}

export default ListContainer

