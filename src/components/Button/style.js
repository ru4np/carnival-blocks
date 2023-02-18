import styled from "styled-components";

export const ButtonStyle = styled.button`
    width:${(props) => props.width};
    height: ${(props) => props.height};
    background: #6246EA;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: white;
`