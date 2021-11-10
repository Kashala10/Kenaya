import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Styles from '../styles/Auth.module.css'
import { GoogleSignIn, FacebookSignIn  } from './icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleLogin } from 'react-google-login';
// import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase/firebase'



const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState('')

    const SignUpManualHandler = () => {
        if(!email || !password || !name || !mobile || !terms) {
            setError('Please fill all the fields')
        } else {
            setError('')
            console.log(email, password, name, mobile, terms)
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
        toast.success('Client/admin area currently unavailable')
    }

    return (
        <Row>
            <Col md={6}>
                <div className={Styles.AuthText}>
                    <h1>Create Account</h1>
                    <div className={Styles.AuthMethods}>
                        <a>
                            {/* <GoogleSignIn /> */}
                            <GoogleLogin
                                clientId="184606835782-sdis3vil6ekcj9b0t23ocs6iqmj66p7m.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button style={{background:'none', border:'none'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <GoogleSignIn /> 
                                    </button>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </a>
                        <a>
                            <FacebookSignIn/>
                        </a>
                    </div>
                    <p>Use your email for registration</p>
                </div>
            </Col>
            <Col md={6}>
                <form className={Styles.AuthForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="name" onChange={(e) => setName(e.target.value)} className="form-control" value={name} placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile:</label>
                        <input type="mobile" onChange={(e) => setMobile(e.target.value)} className="form-control" value={mobile} placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password:</label>
                        <input type="password" onChange={(e) => setPassword(!terms)} className="form-control" value={password} placeholder="" />
                    </div>
                    <div className="mt-4">
                        <Button variant="primary" size="lg" onClick={SignUpManualHandler}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="mt-4 form-check">
                        <input className="form-check-input" onChange={(e) => setTerms(!terms)} type="checkbox" value={terms} name="tc" />
                        <label className="form-check-label" htmlFor="tc">I agree with Term &amp; Conditions</label>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default SignUpForm