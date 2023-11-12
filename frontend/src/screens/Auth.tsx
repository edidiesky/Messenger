

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/reduxtoolkit';
import { GetAllUserProfile, loginUser, registerUser } from '../features/auth/authReducer';
import LoaderIndex from '../components/loaders';
import Message from '../components/loaders/Message';
import { ClearAuthAlert } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
const list = [
  'Not on Facebook?',
  'Forgotten password',
  'Privacy Policy',
  'Terms',
  'Cookies Policy',
  ' © Meta 2023'
]
const AuthIndex: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    registerisLoading,
    userInfo,
    registerisSuccess,
    loginisSuccess,
    alertText,
    showAlert,
    alertType,
    loginisLoading
  } = useAppSelector(store => store.auth)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [authstate, setAuthState] = useState(false);

  const [password, setPassword] = useState('');
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // dispatch(loginUser({email, password}))
    e.preventDefault()
    if (!authstate) {
      // login the user
      // console.log('Login the user')
      dispatch(loginUser({ email, hashedPassword: password }))

    } else {
      dispatch(registerUser({ email, hashedPassword: password, name }))
    }
  }

  // // clear the errors
  useEffect(() => {
    if (showAlert) {
  const timeout = setTimeout(() => {
      dispatch(ClearAuthAlert("any"))
    }, 3000);
    return () => clearTimeout(timeout)
    }
  
  }, [showAlert]);

  // navigate when the user has been succesfully registered
  useEffect(() => {
    if (registerisSuccess || loginisSuccess) {
      const timeout = setTimeout(() => {
        navigate(`/chat/t/${userInfo?.id}`)
      }, 5000);
      return () => clearTimeout(timeout)
    }
    
  }, [userInfo, registerisSuccess, loginisSuccess]);

  // useEffect(() => {
  //   if (registerisSuccess || loginisSuccess) {
  //     dispatch(GetAllUserProfile({id:userInfo?.id}))
  //   }

  // }, [userInfo, registerisSuccess, loginisSuccess]);

  return (

    <AuthStyles className='w-100 h-100 flex column gap-2 item-center justify-center'>
      {
        registerisLoading && <LoaderIndex />
      }
      {
        loginisLoading && <LoaderIndex />
      }
      <div className='w-90 auto h-100 flex column gap-2 item-center justify-space'>
        <div className="flex h-100 column gap-2 w-100 item-center justify-center">
          <img src="https://z-p3-static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="" />
          <h1 className="fs-50 text-bold">
            Connect with your favourite people
          </h1>
          <Message showAlert={showAlert} alertText={alertText} alertType={alertType} />
          <form className='w-85 auto flex column gap-1' action="">
            {
              !authstate ? <div className="w-100 flex column gap-1">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-100 fs-16 flex-1 text-dark family1"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-100 fs-16 flex-1 text-dark family1"
                  value={password}
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> : <div className="w-100 flex column gap-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  className="input w-100 fs-16 flex-1 text-dark family1"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-100 fs-16 flex-1 text-dark family1"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-100 fs-16 flex-1 text-dark family1"
                  value={password}
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            }

            {/* <FormInput placeholder='Enter your email' type='text' required={true} state={email} label={'Email'} setState={setEmail} /> */}
            <div className="w-100 flex item-center justify-center">
              <button onClick={(e) => handleLogin(e)} disabled={!email || !password} type='submit' className="btn fs-16 text-light">Continue</button>
            </div>
            <div className="w-100 flex item-center justify-center">
              <h5 onClick={() => setAuthState(!authstate)} className="fs-14 text-light text-grey2">
                {
                  authstate ? 'Already a member' : 'Not yet a Member'
                } <span style={{ textDecoration: "underline", cursor: "pointer" }} className="auth_link text-bold text-dark">
                  {
                    authstate ? 'Sign In' : 'Sign Up'
                  }
                </span>
              </h5>
            </div>

          </form>
          <ul style={{ marginTop: "1rem" }} className="fs-16 bottom text-light gap-3 flex item-center justify-center">
            {
              list.map((x?: any) => {
                return <li>{x}</li>
              })
            }
          </ul>
        </div>

      </div>
    </AuthStyles>
  )
}


const AuthStyles = styled.div`
  width: 100%;
  position: relative;
    /* padding:1rem 0 !important; */
  min-height: 100vh;
  .btn {
    padding:1.6rem 2rem !important;
    border-radius: 40px;
    margin:2rem auto;
    font-size: 15px;
    &:disabled {
      cursor: not-allowed;
      opacity: .7;
    }
  }
  .bottom{
    padding:2rem 0 !important;

  }
  
   
  h1 {
    font-size: 40px;
    font-weight: 500;
    margin: 5rem auto;
  }
  form {
    max-width: 360px;
      .input {
        border-radius: 4px;
        background:#Fff;
        padding: 1.3rem 2.4rem;
        width: 100%;
        outline: 1.5px solid rgba(0,0,0,.1);
        border: none;
        font-size: 1.5rem;
        font-weight: 400;
        &::placeholder {
        font-size: 1.6rem;
        }
        &:focus {
            outline: 2px solid #222;
        }
        &.inputError {
          border: 1px solid var(--red);
        }
        &:invalid[focused='true'] ~ span {
          display:block;
        }
        &:invalid[focused='true']{
          border: 1px solid var(--red);
        }
        &:valid[focused='true']{
          border: 1px solid var(--green);
        }
    }
  }
`

export default AuthIndex