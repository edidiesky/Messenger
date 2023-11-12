import { AnimatePresence, AnimatePresenceProps } from "framer-motion";

interface MyAnimatePresenceProps extends AnimatePresenceProps {
  children: React.ReactNode;
}

const MyAnimatePresence: React.FC<MyAnimatePresenceProps> = ({
  children,
  ...rest
}) => {
  return (
    <AnimatePresence {...rest}>
      {children}
    </AnimatePresence>
  );
};

export default MyAnimatePresence;
