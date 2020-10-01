import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import storybooksReducer from '../reducers/stroybooksReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        storybooks:storybooksReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore