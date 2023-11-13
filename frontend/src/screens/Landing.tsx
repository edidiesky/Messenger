

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'; import { useAppDispatch, useAppSelector } from '../hooks/reduxtoolkit';
import { GetAllUserProfile, loginUser, registerUser } from '../features/auth/authReducer';
import LoaderIndex from '../components/loaders';
import Message from '../components/loaders/Message';
import { ClearAuthAlert } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Image from '../components/common/Image';

const list = [
  'Features',
  'Desktop App',
  'Privacy & Safety',
  'For Developers',
]
const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {
    userInfo,
    users,
    loginisSuccess,
    alertText,
    showAlert,
    alertType,
    loginisLoading,
    loginisError
  } = useAppSelector(store => store.auth)

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // dispatch(loginUser({email, password}))
    e.preventDefault()
    dispatch(loginUser({ email, hashedPassword: password }))
  }

  // if an error occurs navigate to the login page
  useEffect(()=> {
    if (loginisError) {
      navigate('/login')
    }
  }, [loginisError])

  // console.log(users[0]?.id)
  useEffect(() => {
    if (userInfo) {
      const timeout = setTimeout(() => navigate(`/chat/t/${userInfo?.id}`), 4000)
      return () => clearTimeout(timeout)
    }
  }, [userInfo])
  return (
    <LandingStyles>
      {
        loginisLoading && <LoaderIndex />
      }
      <div className="w-100 flex auto column gap-3">
        <div className="top auto w-85 flex item-center justify-space">
          <img style={{ width: "4rem" }} 
            src={"https://z-p3-static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"}/>
             <div className="w-100 flex item-center justify-end">
            <ul style={{ justifyContent: "flex-end" }} className="flex w-100 item-center gap-4">
              {
                list.map((x?: any) => {
                  return <li className="fs-14 text-extra-bold text-dark">
                    {x}
                  </li>
                })
              }

            </ul>
          </div>
        </div>
        <div className="hero_intro w-85 auto">
          <div className="flex column gap-2">
            <h1
              style={{ backgroundImage: "linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)" }}
              className="text-bold">
              Hang out
              anytime, anywhere
            </h1>
            <span className="fs-18 text-grey">Messenger makes it easy and fun to stay close to your favorite people.</span>
            <form action="" className="w-85 flex item-start gap-1 column">
              <Message showAlert={showAlert} alertText={alertText} alertType={alertType} />

              <input
                value={email}
                name='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text" placeholder='Email address or Phone Number' />
              <input
                value={password}
                name='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password' />
              <div style={{ marginTop: "2rem" }} className="flex item-center">
                <button
                  onClick={(e) => handleLogin(e)}
                  disabled={
                    !email && !password
                  } className="btn-2 flex text-extra-bold item-center justify-center">Log In</button>
              </div>
            </form>
            <div className="flex py-2 item-center gap-2">
              <img style={{ height: "4.5rem" }} src="https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ym/r/c48ZOHvW58y.png" alt="" />
              <img style={{ height: "4.5rem" }} src="https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ym/r/E0Xmh71WBR7.png" alt="" />
            </div>
          </div>
          <div className="flex column gap-3">
            <Image
              width={'100%'}
              height={'100%'}
              src={"https://z-p3-scontent.fphc2-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=5TmtbfqopsgAX_VzCJ9&_nc_ht=z-p3-scontent.fphc2-1.fna&oh=00_AfBG1sFbp1AXSOJs4B97DBIwzJsmmG0Pg-YrewvU_Wt3tA&oe=6554FAE7"}  placeholderSrc={'https://z-p3-scontent.flos3-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=9sB98to9RLQAX-wfJ7Q&_nc_ht=z-p3-scontent.flos3-1.fna&oh=00_AfAIFPGCg7yaI_CNbpMJrowxiUBafMdEQeJj1oAuazR8Lg&oe=65491D67'}
            />
          </div>
        </div>
      </div>
      <div className="w-100">
        <ul style={{flexWrap:"wrap"}} className="w-85 auto flex item-center gap-4">
          <li className="fs-13 text-light flex item-center gap-1 text-dark">
            <span className="text-extra-bold">© Meta 2023.</span>
            The Apple and Google Play logos are trademarks of their respective owners.</li>
          <li className="fs-13 text-bold">Privacy Policy</li>
          <li className="fs-13 text-bold">Cookie Policy</li>
          <li className="fs-13 text-bold">Terms</li>
          <li className="fs-13 text-bold text-grey">English (UK)</li>
          <li className="fs-13 text-light flex item-center gap-1 text-dark">
            <img style={{width:"17rem"}} src="https://z-p3-scontent.flos2-1.fna.fbcdn.net/v/t39.8562-6/284131241_398860802255675_7090232386370085328_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=HErioBRqlQMAX9zQssD&_nc_ht=z-p3-scontent.flos2-1.fna&oh=00_AfBRJCLPzTwwzBhXENhanPZ2phpGzZdwUISJDbS3GLfDPA&oe=654A78C6" alt="" />
            </li>
        </ul>
      </div>
    </LandingStyles>
  )
}


const LandingStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 3rem 0;
ul {
  @media (max-width:580px) {
     gap:2rem;

      }
}
     .fs-14 {
      @media (max-width:580px) {
      font-size: 12px !important;
      line-height: 1.1;

      }
    }
  .hero_intro{
    display: grid;
    justify-content: space-between;
    grid-gap: 6rem;
    padding: 5rem 0;
    form {
      margin: 2rem 0;
      width: 300px;
      .btn-2 {
        padding: 1.2rem 2.4rem;
        background-color: var(--primary);
        font-size: 16px;
        color: #fff;
        border-radius: 40px;
        transition: all .6s;
        cursor: pointer;
        &:hover {
          opacity: .8;
        }
        &:disabled {
          opacity: .7;
        }
      }
      input {
        padding: 1rem 2rem;
        background-color: var(--light-grey);
          font-size: 14px;
        color: var(--dark-1);
        border-radius: 15px;
        &::placeholder {
          color: #777;
          font-size: 15px;
        }
      }
    }
 
    h1 {
      font-size: 85px;
      line-height: 1.2;
      -webkit-background-clip: text;
      color: transparent;
      word-break: break-word;

      @media (max-width:780px) {
      font-size: 65px;

      }

        @media (max-width:580px) {
      font-size: 50px;
      line-height: 1.1;

      }
    }
    grid-template-columns: .6fr .7fr;
    @media (max-width:1080px) {
      grid-template-columns: 1fr;
    }
  }
  /* background-color: red; */
`

export default LandingPage