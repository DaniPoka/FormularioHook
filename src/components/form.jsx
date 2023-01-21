import React from 'react';


const Form = props => {
    const{inputs, setInputs} = props;

    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
            });
    }

    return(
        <form>
            <div>
            <label htmlFor='nombre'>Nombre: </label>
            <input onChange={onChange} type="text" name="nombre" />
            </div>
            <div>
            <label htmlFor='apellido'>Apellido: </label>
            <input onChange={onChange} type="text" name="apellido" />
            </div>
            <div>
            <label htmlFor='email'>Email: </label>
            <input onChange={onChange} type="text" name="email" />
            </div>
            <label htmlFor='password'>Password: </label>
            <input onChange={onChange} type="password" name="password" />
            <div>
            <label htmlFor='confirmPassword'>Confirm Password: </label>
            <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    )
}

export default Form;