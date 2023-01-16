import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 40vw;
    min-height: 80vh;
    background-color: #ffffffa2;
    color: black;
    box-shadow: 2px grey;
    border: 2px grey;
    border-radius: 25px;
    padding: 2px;
`;

const App = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
        setInput("");
    }, [todos]);

    return (
        <Container className="App">
            <div className="">
                <Header />
            </div>
            <div>
                <Form
                    todos={todos}
                    setTodos={setTodos}
                    input={input}
                    setInput={setInput}
                />
            </div>
            <div>
                <List todos={todos}
                setTodos = {setTodos}
                />
            </div>
        </Container>
    );
};

export default App;
