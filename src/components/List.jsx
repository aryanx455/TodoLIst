import React from "react";
import styled from "styled-components";
const Li = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    border: 2px solid black;
    margin: 20px;
    color: white;
    min-height: 20px;
    font-size: larger;
    font-weight: 700;
    padding: 10px;
`;
const Button = styled.button`
    border: 2px solid black;
    min-height: 30px;
    border-radius: 3px;
    min-width: 5vw;
    cursor: pointer;
    font-weight: 700;

`
const Container = styled.div`
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 20vw;
    margin: auto;

`
const Ul = styled.ul``;

const List = ({ todos,setTodos }) => {
    const editHandler = () => {};
    const deleteHandler = ({id}) => {
        setTodos(todos.filter((item) => item.id != id));
    };
    const completeHandler = (item) => {
        setTodos(todos.map((i) => {
            if(i.id == item.id){
                item.completed = !item.completed
            }
        }))
    };

    return (
        <Ul>
            <Container>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </Container>
            <h3>{todos.length} Tasks Remaining</h3>
            {todos.map((item) => (
                <div key={item.id}>
                    <Li>
                        
                        <input
                            type="checkbox"
                            name="completed"
                            value="true"
                            onClick={() => completeHandler(item)}
                        />
                        <input type="text" hidden />
                        {item.name}
                        <div>
                            <button onClick={() => editHandler(item)}>Edit</button>
                            <button onClick={() => deleteHandler(item)}>Delete</button>
                        </div>
                    </Li>
                </div>
            ))}
        </Ul>
    );
};

export default List;
