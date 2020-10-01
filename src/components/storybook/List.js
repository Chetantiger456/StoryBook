import React from 'react'
import { connect } from 'react-redux'

class StoryBookList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchKey: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleReset = (event) => {
        this.setState({
            searchKey : ''
        })
    }

    render(){
        const storyBookCount = this.props.storybooks.length
        return(
            <div>
                <h1>Story Book List - { storyBookCount }</h1>
               <div> <input type="search" name="searchKey" value={ this.state.searchKey } placeholder="search" onChange={this.handleChange} /> </div>
               <div className="scroll">
               <table  >
                   <thead>
                   {/* <p style={ {color:"red", marginLeft:"360px"}}>No Recored Found, Story book is empty</p> */}
                  
               { (!storyBookCount) ? (<p class="no-record">No Recored Found, Story book is empty</p>):
               (
                   this.props.storybooks.filter(storybook => storybook.storyTitle.toLowerCase().includes(this.state.searchKey.toLocaleLowerCase())).map(storybook => {
                    return (
                        <div >
                            <tr>
                           <th>
                           Title: </th>
                          <th> 
                              { storybook?.storyTitle }
                           </th>
                           </tr>

                           <tr>
                           <th>
                           Description:</th> <th style ={{ wordWrap: "break-word"}}>{ storybook?.storyDescription }
                           </th>
                           
                       </tr>
                            
                            
                        </div>
                    )
                })
               )
               } 
            
                    </thead>
               </table>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        storybooks :state.storybooks
    }
}
export default connect(mapStateToProps)(StoryBookList)