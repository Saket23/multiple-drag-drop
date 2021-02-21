import React, { PureComponent } from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';

import { arrayMove } from './utils';
import { list } from './constants';

const SortableItem = sortableElement(({value}) => 
    <div className = 'list-item'>
        {value}
    </div>
);

const SortableContainer = sortableContainer(({children}) => {
  return <div className = 'list-items'>{children}</div>;
});

export default class ListItem extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            items: list,
        }
    }
    // handleOnDragStart = (event) => {
    //     console.log('saket start', event.target.id);
    // }

    // handleOnDragEnter = (event) => {
    //     console.log('saket enter', event.target.id)
    // }

    // handleOnDragOver = (event) => {
    //     console.log('saket over', event.target.id)
    //     event.preventDefault()
    // }

    // handleOnDragleave = (event) => {
    //     console.log('saket leave', event.target.id)
    // }

    // handleDragDrop = (event) => {
    //     console.log('saket drop', event.target.id)
    // }

    // handleDragEnd = (event) =>{
    //     console.log('saket end', event.target.id)
    // }
    
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
          }));
    }

    render(){
        const { items } = this.state;
        return(
            <SortableContainer onSortEnd={this.onSortEnd}>
                {items.map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
            </SortableContainer>
        )
    }
}