import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core';

const footer = (props) => {

    const index = props.category ? props.muscleCategories.findIndex(group => group === props.category)+1:0;

    const onIndexSelect = (event, index) => {
        props.onSelect(index === 0 ? '': props.muscleCategories[index-1]);
    }
    return (
        <Paper >
            <Tabs
            value = {index}
                indicatorColor="primary"
                textColor="primary"
                centered
             onChange={onIndexSelect}>
                <Tab label='All' />
               { props.muscleCategories.map(categories => 
                   <Tab label={categories} key={categories}/>
                   ) }
            </Tabs>
        </Paper>
    )

}

export default footer;