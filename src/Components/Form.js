import React from "react";

const Form =(props) => {
    const handleChange = event => {
        const {name, value} = event.target;
        props.change(name, value);

    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
            placeholder='Please enter your name.'
            value={props.values.name}
            name='name'
            onChange={handleChange}
            />
            </label>
            <label>Email
                <input 
                placeholder='Please enter your Email.'
                value={props.values.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Role 
                <input
                placeholder='Please enter your role.'
                value={props.values.role}
                name='role'
                onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your team.' />
        </form>
    )
}

export default Form;