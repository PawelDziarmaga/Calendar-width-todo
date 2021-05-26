import React from 'react'
import Form from './Leyouts/Form/Form'
import Nav from './Leyouts/Nav/Nav'
import Body from './Leyouts/Body/Body'
import Footer from './Leyouts/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Calendar width todo list</h1>
      <Form />
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
