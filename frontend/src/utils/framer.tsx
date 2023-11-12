export const dropin = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const searchIn = {
  hidden: {
    transform: "scale(0.01)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const flip = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideUp = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};


export const dropin1 = {
  hidden: {
    scale: 0,
    top: "35%",
    opacity: 0,
    visibility: "hidden",
  },
  visible: {
    scale: 1,
    top: "35%",
    opacity: 1,
    visibility: "visible",
  },
  exit: {
    scale: 0,
    top: "35%",
    opacity: 0,
  },
};
export const dropin2 = {
  hidden: {
   scale:0,
   top:"45%",
    opacity: 0,
    visibility: "hidden",
  },
  visible: {
   scale:1,
   top:"45%",
    opacity: 1,
    visibility: "visible",
  },
  exit: {
   scale:0,
   top:"45%",
    opacity: 0,
  },
};


export const errorMessage = {
  hidden: {
    scale: 0,
    opacity: 0,
    transform: "translateY(-100px)",
    visibility: "hidden",
    display: "none",
  },
  visible: {
    scale: 1,
    transform: "translateY(0)",
    display: "block",
    opacity: 1,
    visibility: "visible",
  },
  exit: {
    scale: 0,
    transform: "translateY(-100px)",
    display: "none",
    opacity: 0,
  },
};
