import { Variants, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { errorMessage } from "../../utils/framer";
import { useAppDispatch } from "../../hooks/reduxtoolkit";
// import { useDispatch } from "react-redux";
type messageprops = {
  showAlert?: boolean,
  alertText?: string,
  alertType?: string,
}
const Message: React.FC<messageprops> = ({
  showAlert,
  alertText,
  alertType,
}) => {

  const dispatch = useAppDispatch();



  const errorMessageVariants: Variants = {
    hidden: {
      scale: 0, // Add other properties like opacity, transform, etc.
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
    },
    visible: {
      scale: 1,
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      // Add other properties as needed
    },
    exit: {
      // Define exit animation properties here
      scale: 0, // Define exit animation properties here
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
    },
  };

  const successMessageVariants: Variants = {
    hidden: {
      opacity: 0,
      visibility: 'hidden',
      top: "-100vh",
    },
    visible: {
      top: '6%',
      opacity: 1,
      visibility: 'visible',
      // Add other properties as needed
    },
    exit: {
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
      top: "-100vh",
      transition: { duration: 0.4 },
    },
  };

  if (alertType === 'danger') {
    return (
      <ErrorMessage
        as={motion.div}
        variants={errorMessageVariants}
        initial="hidden"
        animate={showAlert ? "visible" : "exit"}
        exit="exit"
        className="gap-1 flex item-center justify-space"
      >
        <div className="flex flex1 text-extra-bold">{alertText}</div>
      </ErrorMessage>
    );
  }

  return (
    <MessageContent
      as={motion.div}
      variants={successMessageVariants}
      initial="hidden"
      animate={showAlert ? "visible" : "exit"}
      exit="exit"
      className={"gap-1 flex item-center justify-space"
      }
    >
      <div className=" flex1 text-extra-bold text-center">{alertText}</div>
    </MessageContent>
  );
}

const ErrorMessage = styled(motion.div)`
  min-width: 200px;
  border-radius: 5px;
  padding: 10px 14px;
  background: #f9060618;
  color: #5b0444c9;
  font-size: 14px;
`;
const MessageContent = styled(motion.div)`
  min-width: 260px;
  padding: 14px 16px;
  background-color: #5AD539;
  z-index: 10000;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: all 1s;
  text-align:center;
  position:fixed;
  /* left:50%; */
  &.danger {
    background-color: var(--red);
    color: #fff;
    border-left: 4px solid var(--red);
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
`;

export default Message