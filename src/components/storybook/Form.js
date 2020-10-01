import React from 'react'
import { connect } from 'react-redux'
import { startAddStoryBook } from '../../actions/storybooksaction'

class StoryBookForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            StoryTitle: '',
            storyDescription: ''
        }
    }

    handleChange = (event) => {
        this.setState({
                [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
         
        const formData = {
            storyTitle : this.state.storyTitle,
            storyDescription : this.state.storyDescription 
        }     
          // console.log(formData)
        const redirect = ()=>{
          return this.props.history.push('/')
        }
        
        this.props.dispatch(startAddStoryBook(formData, redirect))

    }

    render(){
        return(
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <label htmlFor="storyTitle">Story Title</label>
                    <input type="text"
                           id="storyTitle" 
                           name="storyTitle"
                           value={ this.state.storyTitle }
                           onChange={ this.handleChange }
                           placeholder="title"
                           required
                           />
                           <br/>
                    <label htmlFor="storyDescription">Story Description</label>
                    <textarea cols="35"
                           rows="5" 
                           id="storyDescription" 
                           name="storyDescription"
                           value={ this.state.storyDescription }
                           onChange={ this.handleChange }
                           placeholder="description"
                           required
                           ></textarea>
                           <br/>
                    <input type="submit" name="Publish" value="Publish" /> 
                </form>
            </div>
        )
    }
}

export default connect()(StoryBookForm)