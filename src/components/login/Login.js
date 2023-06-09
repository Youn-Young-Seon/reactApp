import { useRef } from "react";
import * as L from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { api } from "../../utils/api";
import { loginAsync} from "./Login.Slice";


const Login = () => {    
    const dispatch = useDispatch();
    const loginForm = useRef(null);
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        const id = loginForm.current.elements.id.value;
        const pw = loginForm.current.elements.password.value;

        const param = {
            id, password:pw
        }

        api.post(`/login`, param, (data) => {
            localStorage.setItem("sessionId", data.data.sessionId);
            dispatch(loginAsync({ name: data.data.name, sessionId: data.data.sessionId }));
            navigate("/");
        }, (error) => {
            console.log(error);
            navigate('/login');
        });
    };

    return (   
        <>
            <L.Body>
                <L.Grid>
                    <L.Form action="/" method="POST" onSubmit={ login } ref={ loginForm }>
                        <L.Field>
                            <L.Label></L.Label>
                            <L.Input id="id" type="text" name="id" autoComplete="id" placeholder="ID" ></L.Input>
                        </L.Field>
                        <L.Field>
                            <L.Label></L.Label>
                            <L.Input id="password" type="password" name="password" placeholder="PW" ></L.Input>
                        </L.Field>                        
                        <L.Field>
                            <L.Submit type="submit" value="Sign in" />
                        </L.Field>
                        <Link to="/join">
                            <L.Join type="button">sign up</L.Join>
                        </Link>
                    </L.Form>                    
                </L.Grid>
            </L.Body>
        </>        
    );
}

export default Login;