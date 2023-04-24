import styled from "styled-components";

const Body = styled.div`
    display: grid;
    place-items: center;
    background-color: #2c3338;
    width:100%;
    height:100vh;
`;

const Grid = styled.div`
    inline-size: 90%;
    margin-inline: auto;
    max-inline-size: 20rem;
`;

const Form = styled.form`
    display: grid;
    gap: 0.875rem;
    color: #eee; 
`;

const Field = styled.div`
    display: flex;
`;

const Label = styled.label`
    display: flex;
    border-radius: 0.25rem;
    padding: 1rem;
    background-color: #363b41;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-inline: 1.25rem;
`;

const Input = styled.input`
    flex: 1;
    inline-size: 100%;
    background-image: none;
    border: 0;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 1rem;
    transition: background-color 0.3s;
    background-color: #3b4148;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:hover {
        background-color: #434a52;
    }

    &:focus {
        background-color: #434a52;
    }
`;

const Submit = styled.input`
    cursor: pointer;
    inline-size: 100%;
    background-color: #ea4c88;
    color: #eee;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.25rem;
    padding: 1rem;    
    border: 0;

    &:hover {
        background-color: #d44179;
    }

    &:focus {
        background-color: #d44179;
    }
`;

const Join = styled.button`
    cursor: pointer;
    inline-size: 100%;
    background-color: #30b077;
    color: #eee;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.25rem;
    padding: 1rem;    
    border: 0;

    &:hover {
        background-color: #35966b;
    }
`;

export { Body, Grid, Form, Field, Label, Input, Join, Submit };