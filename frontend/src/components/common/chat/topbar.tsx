import React from 'react';
import { BiDotsVerticalRounded, BiPhone, BiSearch } from "react-icons/bi";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { TopBarStyles } from './styles/topbar';
import { useAppSelector } from '../../../hooks/reduxtoolkit';

const Topbar: React.FC = () => {
    const { userDetails } = useAppSelector(store => store.auth)
    return (
        <TopBarStyles className="w-100">
            <div className="w-90 flex item-center justify-space auto">
                {/* profile name */}
                <div className="topleft flex item-center gap-1">
                    <img
                        alt=""
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src={userDetails?.image} className=" avatar"
                    />
                    <h5 style={{fontWeight:"500"}} className={"fs-15 flex column text-dark"}>
                        {userDetails?.name}
                        <div className="span block fs-12 text-light text-grey">
                            {/* Active 27min ago */}
                        </div>
                    </h5>
                </div>
                {/* profile icons */}
                <div className="flex top_bar_right item-center" style={{ gap: '1rem' }}>
                    <div className="icon flex item-center justify-center avatar">
                        <FaPhoneAlt className="fs-18" />
                    </div>
                    <div className="icon flex item-center justify-center avatar">
                        <FaVideo className="fs-20" />
                    </div>
                    <div className="icon flex item-center justify-center avatar">
                        <BiDotsVerticalRounded className="fs-20" />
                    </div>
                </div>
            </div>
        </TopBarStyles>
    )
}


export default Topbar