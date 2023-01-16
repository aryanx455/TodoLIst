import React from "react";
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
const Input = styled.input`
    border: 3px black solid;
    min-height: 20px;
`
const Button = styled.button`
    border: 2px solid black;
    margin: 25px;
    border-radius: 2px;
    background-color: black;
    color: white;
    min-height: 25px;
    cursor: pointer;

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = ({input,setInput,todos,setTodos}) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTodos([...todos,{id:uuidv4(),name:input,Date : Date.now.toString,completed: false}])
        setInput("");

    }
    const onChangeHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }
    return (
        <Container className="form-div">
            <form action="submit">
                <Input type="text" onChange={onChangeHandler} value = {input}/>
                <Button type="submit" onClick={onSubmitHandler}>Add</Button>
            </form>
        </Container>
    );
};

export default Form;
