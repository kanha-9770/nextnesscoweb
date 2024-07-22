import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignupFormDemo } from "./SignupFormDemo";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  isVisible: boolean;
  setIsFlagOpen: (flag: boolean) => void;
  setOpenSearch: (open: boolean) => void;
  setProfileOpen: (open: boolean) => void;
  setAccountOpen: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  isVisible,
  setIsFlagOpen,
  setOpenSearch,
  setProfileOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.target as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
    setIsFlagOpen(false);
    setOpenSearch(false);
    setProfileOpen(false);
  };
  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };
  
  return (
    <div>
      <button
        type="button"
        className="cursor-pointer font-montserrat text-16 font-thin rounded-full p-1 pl-4 pr-4 text-white bg-[#483d78]"
        onClick={toggleContactForm}
      >
        Contact
      </button>
      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-16 right-0 z-50 mr-12 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
          >
            <SignupFormDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
