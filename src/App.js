import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import './index.css'
function App() {
  return (
    <div className="App">
    
      <Navbar />
      <BookList />
      <BookForm/>
     
    </div>
  );
}

export default App;
