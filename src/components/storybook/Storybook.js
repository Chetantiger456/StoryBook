import React from 'react'
import StoryBookForm from './Form';
import StoryBookList from './List';

class StoryBook extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <h1>Story Book</h1>
                <StoryBookForm /> 
            </div>
        )
    }
}

export default StoryBook