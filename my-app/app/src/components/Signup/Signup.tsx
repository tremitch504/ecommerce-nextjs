import '../Login/login.css';
import ddLogo from '../../../../public/ddLogo.jpeg';


export default function Signup() {
  return (
   <div className="login-wrapper">
     <img className="login-img"  src={ddLogo.src}/>
     {/* <div className="login-img"></div> */}

     <div className="signup-account-container">
        <div className="signup-account-header">
            <h1>Sign Up</h1>
        </div>

        <form action="">
            <div className="signup-credentials-container">
                <h2>Email</h2>
                <div className="signup-credentials-input">
                <input type="text" name="email" id="" />
                </div>
            </div>
            <div className="signup-credentials-container">
                <h2>Password</h2>
                <div className="signup-credentials-input">
                <input type="text" name="password" id=""></input>
                </div>
            </div>
            <div className="signup-credentials-container">
                <h2>Confirm Password</h2>
                <div className="signup-credentials-input">
                <input type="text" name="confirm-pw" id=""></input>
                </div>
            </div>

            <div className="signup-phone-birthday-container">
                  <div className="signup-credentials-container">
                <h2>Phone</h2>
                <div className="signup-phone-bday-input">
                <input type="text" name="phone" id="phone-bday-input"></input>
                </div>
            </div>

              <div className="signup-credentials-container">
                <h2>Birthday</h2>
                <div className="signup-phone-bday-input">
                <input type="text" name="birthday" id="phone-bday-input"></input>
                </div>
            </div>
            </div>
            

            <button className="signup-btn" type='submit'>SIGN UP</button>
        </form>

        <div className="new-user-redirect">
           <h1>Already have an account?</h1> <h2>Click Here</h2>
        </div>
     </div>
   </div>

  )

  }