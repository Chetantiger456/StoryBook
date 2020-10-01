import React from 'react';
import './App.css';
import StoryBookForm from './components/storybook/Form';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import StoryBookList from './components/storybook/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Story Book</h1>
      <BrowserRouter>
        <Link to='/new_post'>Add New Post</Link>
        <Link to='/'>Publisher</Link>

        <Route path='/new_post' component={StoryBookForm} />
        <Route path='/' component={StoryBookList} exact={true} />
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
