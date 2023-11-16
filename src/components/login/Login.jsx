import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/loginStyle.css';




const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loggedIn, setLoggedIn] = useState(false);
        const [error, setError] = useState('');
        const [isSignIn, setIsSignIn] = useState(true);
        const [isSignUp, setIsSignUp] = useState(false);
        const navigate = useNavigate();
      
        const emailValidation = (email) => {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regexEmail.test(email);
        };
        const passwordValidation = (password) => {
          const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
          return regexPassword.test(password);
        };

        const handleLogin = () => {
          if (!emailValidation(email)) {
            setError('Please enter a valid email.');
          } else if (!passwordValidation(password)) {
            setError('Password must contain at least 8 characters, including an uppercase letter and a special character.');
          } else if (email === 'fortafit@gymail.com' && password === 'Password1!') {
            setLoggedIn(true);
            navigate("/");
            setError('');
          } else {
            setLoggedIn(false);
            setError('Failed log in. Check your email and password.');
          }
        };

        if (loggedIn) {
          return 
        }

        const handleSignInClick = () => {       
          setIsSignIn(false);
          setIsSignUp(true);
        };

        const handleSignUpClick = () => {
          setIsSignIn(true);
          setIsSignUp(false);
        };

    return (
        <div className="logSection">
         
            <div className="logBox">
                <div className='inputInfo'>
                  <span>Email</span>
                  <input
                  type="email"
                  placeholder="fortafit@gymail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
                </div>
                <div className='inputInfo'>
                  <span>Password</span>
                  <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
                </div>
                
                <button onClick={handleLogin}>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
                {isSignIn && 
                  <div>
                    <p>Already have an account? <span className="signLink" onClick={handleSignInClick}>  Sign In</span></p>
                    <p>(Make <span className='spanInfo'>new Account</span> or go to Sign In)</p>
                  </div>
                }
                {isSignUp && 
                  <div>
                    <p>New to FortaFit? <span className="signLink" onClick={handleSignUpClick}>Sign Up</span></p>
                    <p><span className='spanInfo'>Test Account</span> - fortafit@gymail.com <span className='spanInfo'>/</span> Password1!</p>
                  </div>
                }

                {loggedIn ? (
                  <p className='welcome'>Bienvenido, has iniciado sesión correctamente.</p>
                ) : (
                  <p className='error'>{error}</p>
                )}
            </div>
            <div className='backgroundImg'>
              <h1>Login</h1>
            </div>
        </div>
  )
}

export default Login