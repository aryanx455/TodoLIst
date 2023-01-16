import React from "react";
import styled from "styled-components"
const Typography = styled.p`
    font-weight: 600;
    color: darkgoldenrod;
`
const Header = () => {
    return <div>
        <h1>TodoApp</h1>
        <Typography>What needs to be Done?</Typography>
    </div>;
};

export default Header;
