import React from "react"

const Form = props => (
    <form onSubmit = {props.getSolves}>
        <input type = "text" name = "username" placeholder = "Username"/>
        <button>Get Solves</button>
    </form>
);

export default Form