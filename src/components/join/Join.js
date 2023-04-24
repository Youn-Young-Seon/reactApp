import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import * as J from "./Join.style";
import { useRef } from "react";

export const Join = () => {
    const navigate = useNavigate();
    const joinForm = useRef();

    const join = (e) => {
        e.preventDefault();

        const id = joinForm.current.elements.id.value;
        const pw = joinForm.current.elements.pw.value;
        const name = joinForm.current.elements.name.value;
        
        const param = {
            id, pw, name
        };

        api.post('/join', param, () => {
            navigate('/login');
        }, () => {
            navigate('/join');
        })
    }

    return(
        <J.Body>
            <J.Form action="#" method="post" onSubmit={ join } ref={ joinForm }>
                <J.H2>Sign Up</J.H2>
                <J.P>
                    <J.Label htmlFor="id" className="floatLabel">ID</J.Label>
                    <J.Input id="id" name="id" type="text"/>
                </J.P>
                <J.P>
                    <J.Label htmlFor="pw" className="floatLabel">Password</J.Label>
                    <J.Input id="pw" name="pw" type="password"/>
                </J.P>
                <J.P>
                    <J.Label htmlFor="name" className="floatLabel">name</J.Label>
                    <J.Input id="name" name="name" type="text"/>
                </J.P>
                <J.P>
                    <J.Input type="submit" value="Create My Account" id="submit"/>
                </J.P>
            </J.Form>
        </J.Body>
      )
}

export default Join;