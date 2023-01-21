import './App.css';
import React, { useState } from 'react';
import Form from './components/form';
import Results from './components/results';



function App() {    
  
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password:"",
    confirmPassword: ""
  });

      return (            
        <>
        <Form inputs={state} setInputs={setState} />
        <Results datos={state} />
        </>
        
      );    
  }


export default App;
