import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/';
import './SignIn.css'

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <div className="signin">
            {/* <div class="wrapper animated bounce">
                <h1>OrgaLife</h1>
                <hr />
                <form onSubmit={userLogin}>
                    <label id="icon" for="username"><i class="fa fa-user"></i></label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label id="icon" for="password"><i class="fa fa-key"></i></label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit" >Sign In</button>
                    <hr />
                    <div class="crtacc"><a href="#">Create Account</a></div>
                </form>
            </div> */}
            <div class="box">
                <h2>Login</h2>
                <form onSubmit={userLogin}>
                    <div class="inputBox">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                        <label for="">Username</label>
                    </div>
                    <div class="inputBox">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                        <label for="">Password</label>
                    </div>
                    <input  type="submit" name="" value="Submit" />
                </form>
                <p class="register">Нямате акаунт ? <Link to="/signup" className="signuplabel">Регистрация</Link></p>
            </div>
        </div>
    )
}

export default SignIn
