import styled from "styled-components";

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c3338;
    width:100%;
    height:100vh;
`;

const Form = styled.form`
    background: #fff;
    padding: 4em 8em 2em;
    max-width: 400px;
    margin: 50px auto 0;
    box-shadow: 0 0 1em #222;
    border-radius: 2px;
`;

const H2 = styled.h2`
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    color:darken(#e5e5e5, 50%);
    border-bottom:solid 1px #e5e5e5;
`;

const P = styled.p`
    margin: 0 0 3em 0;
    position: relative;
`;

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 400px;
    outline: none;
    margin:0;

    &[type="text"] {
        background: #fff;
        border: 1px solid #dbdbdb;
        font-size: 1.6em;
        padding: .8em .5em;
        border-radius: 2px;
    }

    &[type="password"] {
        background: #fff;
        border: 1px solid #dbdbdb;
        font-size: 1.6em;
        padding: .8em .5em;
        border-radius: 2px;
    }

    &[type="text"]:focus{
        background: #fff
    }

    &[type="password"]:focus {
        background: #fff
    }    

    &[type="submit"] {
        background: rgba(148,186,101,0.7);;
        box-shadow: 0 3px 0 0 darken(rgba(148,186,101,0.7);, 10%);
        border-radius: 2px;
        border: none;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 2em;
        line-height: 1.6em;
        margin: 2em 0 0;
        outline: none;
        padding: .8em 0;
        text-shadow: 0 1px #68B25B;
    }

    &[type="submit"]:hover {
        background: rgba(148,175,101,1);
        text-shadow:0 1px 3px darken(rgba(148,186,101,0.7);, 30%);        
    }
`;

const Span = styled.span`
    display:block;
    background: #F9A5A5;
    padding: 2px 5px;
    color: #666;
`;

const Label = styled.label`
    position: absolute;
    left: 8px;
    top: 12px;
    color: #999;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);

    &.floatLabel{
        top: -11px;
        background-color: rgba(255,255,255,0.8);
        font-size: 14px;
    }
`;

export { Body, Form, H2, P, Input, Span, Label }; 