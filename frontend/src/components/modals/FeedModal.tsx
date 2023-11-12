import React, { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import styleds from "styled-components";
import { motion } from "framer-motion";
import { RxCross2 } from 'react-icons/rx'
import { slideUp } from "../../utils/framer";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  type?: string;
  modal?: boolean;
  setModal: (val: boolean) => void;
}

const TweetModal: React.FC<modalType> = ({ modal, setModal, type }) => {

  return (
    <TweetModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop" onClick={() => setModal(false)}></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow gap-2"}
      >
        {/* top of the feed */}
        <div className="top w-100 flex">
          <div className="w-90 auto">
            <div className="icons text-dark flex item-center justify-center">
              <RxCross2 fontSize={'20px'} />
            </div>
          </div>
        </div>
        {/* original feed */}
        <div className="tweet_content w-100">
          <div className="w-90 auto flex item-start gap-1">
            <div className="image_wrapper">
              <div className="image_gradient"></div>
              <img src="/images/johanna-richardson.jpg" alt="" className="avatar_profile" />
            </div>
            <div className="flex flex-1 column gap-1">
              <div className="flex w-85 column flex-1" style={{ gap: '.7rem' }}>
                <h4 className="fs-18 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                  Wizarad
                  <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                  <span className="text-light fs-16 text-grey block">@wiz102_263</span>
                  <span className="text-light fs-16 text-grey block">· 10h</span>
                </h4>
                <h5 className="w-90 text-light family1 fs-18">
                  Japan abeg na 😭😭

                  Zambia wake up
                  Zambia wake up
                  Zambia wake up
                  Zambia wake up
                </h5>
                <span className="text-light fs-16 text-grey block">Replying to <span className="text-blue">Wizarab10</span> </span>


              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </TweetModalStyles>
    // <h2>hello</h2>
  );
}
export default TweetModal

const TweetModalStyles = styleds(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 4800;

  align-items: start;
  justify-content: center;
  top: 0;
  .area {
    height: 8rem !important;
/* border-bottom: 1px solid rgba(0,0,0,.1); */

}

  .image_wrapper {
      width:5rem;
      height:5rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
    }
    .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      background:rgba(0,0,0,.2);
      opacity:0;
      z-index:20;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
    position:relative;
  }
  .btn-3 {
        padding: 1rem 2rem;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
 
  .backdrop {
    background: rgba(255, 255, 255, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 600px;
    display: flex;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    position: relative;
    box-shadow:var(--shadow);

    padding:1rem 0;
    margin-top:2rem;
      @media (max-width:480px) {
      width: 90%;
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }
  }
`;
