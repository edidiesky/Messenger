import React from 'react';
import { motion } from 'framer-motion'
import { BiChevronRight, BiDotsVerticalRounded, BiPhone, BiSearch } from "react-icons/bi";
import { FaPhoneAlt, FaVideo, FaFacebook } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { UserProfileSidebarStyles } from './styles/UserProfileSidebar';
import { useAppSelector } from '../../../hooks/reduxtoolkit';
const UserProfileSidebarVariants = {
    initial: {
        right: '-100%',
        width:"0",
        opacity:0,
    },
    enter: {
        right: 0,
        width: "500px",
        opacity:1,
        transition: {
            duration: .2,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        right: '-100%',
        width:"0",
        opacity:0,
        transition: {
            duration: .2,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

const UserProfileSidebar = ({ sidebar }: { sidebar?: boolean }) => {
    const { userDetails } = useAppSelector(store => store.auth)
    return (
        <UserProfileSidebarStyles
            as={motion.div}
            variants={UserProfileSidebarVariants}
            initial='initial'
            exit={'exit'}
            animate={sidebar ? 'enter' : "exit"}
            className="w-100">
            <div className="w-90 flex column auto gap-2">
                <div className="w-100 flex item-center justify-center column gap-1">
                    <img
                        alt=""
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src={userDetails?.image}
                    />
                    <h4 className="fs-18 text-bold flex column item-center justify-center">
                        {userDetails?.name}
                        <span className="w-[70%] auto text-center fs-12 text-light block text-grey">   Active 8h ago</span>
                    </h4>
                </div>
                <div className="w-100 flex item-center justify-center gap-3">
                    <div className="flex column gap-1">
                        <div style={{ width: '50px', height: "50px", borderRadius: "50%", background: "#fafafa" }} className="fs-24 flex item-center justify-center">
                            <FaFacebook />
                        </div>
                        <span className=" text-center fs-12 text-light block text-grey">   Profile
                        </span>
                    </div>

                    <div className="flex column gap-1">
                        <div style={{ width: '50px', height: "50px", borderRadius: "50%", background: "#fafafa" }} className="fs-24 flex item-center justify-center">
                            <FaBell />
                        </div>
                        <span className=" text-center fs-12 text-light block text-grey">   Mute
                        </span>
                    </div>

                    <div className="flex column gap-1">
                        <div style={{ width: '50px', height: "50px", borderRadius: "50%", background: "#fafafa" }} className="fs-24 flex item-center justify-center">
                            <BiSearch />
                        </div>
                        <span className=" text-center fs-12 text-light block text-grey">   Search
                        </span>
                    </div>
                </div>

                <div className="flex column">
                    <div className="list flex item-center justify-space w-100">
                        <h4 className="fs-16 text-bold">
                            Chat Info
                        </h4>
                        <span className="text-center
                             fs-24 text-light block text-dark">
                            <BiChevronRight /></span>
                    </div>

                    <div className="list flex item-center justify-space w-100">
                        <h4 className="fs-16 text-bold">
                            Customize Chat
                        </h4>
                        <span className="text-center
                             fs-24 text-light block text-dark">
                            <BiChevronRight /></span>
                    </div>

                    <div className="list flex item-center justify-space w-100">
                        <h4 className="fs-16 text-bold">
                            Media files and Links
                        </h4>
                        <span className="text-center
                             fs-24 text-light block text-dark">
                            <BiChevronRight /></span>
                    </div>


                    <div className="list flex item-center justify-space w-100">
                        <h4 className="fs-16 text-bold">
                            Privacy and Support
                        </h4>
                        <span className="text-center
                             fs-24 text-light block text-dark">
                            <BiChevronRight /></span>
                    </div>
                </div>
            </div>
        </UserProfileSidebarStyles>
    )
}


export default UserProfileSidebar