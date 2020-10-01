import Axios from "axios"

export const addStoryBook = (storybook) => {
    return { type: 'ADD_POST', payload: storybook }
} 

export const startAddStoryBook = (formData, redirect) => {
    return(dispatch) => {
        //Axios.post()
        dispatch(addStoryBook(formData))
        redirect()
    }
}