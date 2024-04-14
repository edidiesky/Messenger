import React from 'react';
import { BiDotsVerticalRounded, BiPhone, BiSearch } from "react-icons/bi";
import { FaPhoneAlt, FaVideo, FaFacebook } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { UserProfileSidebarStyles } from './styles/UserProfileSidebar';
import { useAppSelector } from '../../../hooks/reduxtoolkit';

const UserProfileSidebar = () => {
    const { userDetails } = useAppSelector(store => store.auth)
    return (
        <UserProfileSidebarStyles className="w-100">
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
                    <h4 className="fs-16 text-extra-bold flex column item-center justify-center">
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
            </div>
        </UserProfileSidebarStyles>
    )
}


export default UserProfileSidebar