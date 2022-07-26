import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import './AuthPage.css';
import Logo from '../../components/Logo/Logo'

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
    return (
      <main className="AuthPage">
        <Logo />
        <h2 className="tagline">The fast food carb counter app made for Diabetics who count carbs!</h2>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ?  <button>Dont have an account? Create Account</button> : <button>Log In</button>}</h3>
      </main>
    );
  }