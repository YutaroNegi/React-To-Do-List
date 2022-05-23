import React from 'react'
import { useSelector } from 'react-redux'
import { List, Segment } from 'semantic-ui-react'
import ListItem from './ListItem'

function ListContainer(props){
    const items = useSelector(state => state)
    return(
        <Segment inverted className='items-box bg-dark white-txt'>
        <List divided inverted relaxed>
            {items.map(item=>{
                return(<ListItem item={item}></ListItem>)
            })}
        </List>
        </Segment>
    )
}

export default ListContainer

