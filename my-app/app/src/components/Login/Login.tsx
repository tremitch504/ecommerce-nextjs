import './login.css';
import ddLogo from '../../../../public/ddLogo.jpeg';


export default function Login() {
  return (
   <div className="login-wrapper">
     <img className="login-img"  src={ddLogo.src}/>
     {/* <div className="login-img"></div> */}

     <div className="login-account-container">
        <div className="login-account-header">
            <h1>Login to your Account</h1>
        </div>

        <form action="">
            <div className="login-credentials-container">
                <h2>Email</h2>
                <div className="login-credentials-input">
                <input type="text" name="email" id="" />
                </div>
            </div>
            <div className="login-credentials-container">
                <h2>Password</h2>
                <div className="login-credentials-input">
                <input type="text" name="password" id=""></input>
                <span className="akar-icons--eye"></span>
                </div>
                <div className="forgot-pw-container"><h2>Forgot Password?</h2></div>
            </div>

            <button className="login-btn" type='submit'>LOGIN</button>
        </form>

        <div className="new-user-redirect">
           <h1>New User?</h1> <h2>Click Here</h2>
        </div>
     </div>
   </div>

  )

  }