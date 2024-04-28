import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import styleds from "styled-components";
import { motion } from "framer-motion";
import { RxCross2 } from 'react-icons/rx'
import { slideUp } from "../../utils/framer";
import { useAppSelector } from "../../hooks/reduxtoolkit";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  type?: string;
  modal?: boolean;
  setModal: (val: boolean) => void;
}

const SettingsModal: React.FC<modalType> = ({ modal, setModal, type }) => {
  const { userInfo } = useAppSelector(store => store.auth)
  return (
    <SettingsModalStyles
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
        <div className="w-90 px-8 auto flex items-center justify-space">
          <h4 className="fs-24 text-dark text-bold">Info</h4>
          <div onClick={() => setModal(false)} className="icon flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
        </div>
        <div className="w-90 px-8 auto flex column items-center justify-center">
          <div className="flex item-center justify-center flex column gap-1">
            <div className="avatar_profile flex item-center relative justify-center">
              {userInfo?.name[0]} 
              <div className="camera_profile flex item-center justify-center">
                <FaCamera fontSize={'24px'} color="#fff"/>
              </div>
            </div>
            <h4 className="fs-16 font-bold">{userInfo?.name} </h4>
          </div>
        </div>
      </motion.div>
    </SettingsModalStyles>
    // <h2>hello</h2>
  );
}
export default SettingsModal

const SettingsModalStyles = styleds(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 4800000000;
  align-items: center;
  justify-content: center;
  top: 0;

  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
 .avatar_profile {
  width:130px;
  height:130px;
  border-radius:50%;
  background:#d5d2d2f9;
  font-size:40px;
  font-weight:600;
  color:#000;
  .camera_profile {
    width:50px;
    position:absolute;
    right:-10%;
    bottom:10%;
  height:50px;
  border-radius:50%;
  background:var(--primary);
  cursor:pointer;

  border:3px solid #fff;
  }
 }
  .backdrop {
    background: #d6d6d6e3;

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 500px;
    display: flex;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 14px;
    position: relative;
    box-shadow:var(--shadow);

    padding:2rem;
    margin-top:2rem;
      @media (max-width:480px) {
      width: 90%;
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }
  }
`;
