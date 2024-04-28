import React, { useState } from 'react';
import { SmallSidebarStyles } from './styles/feedbar';
import { sidebatlist } from '../../data/sidebar';
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxtoolkit';
import MyAnimatePresence from '../../utils/AnimatePresence';
import SettingsModal from '../modals/SettingsModal';

const SmallSidebar: React.FC = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    const [settingsmodal, setSettingsModal] = useState(false)
    return (
        <>
            <MyAnimatePresence>
                {
                    settingsmodal && <SettingsModal modal={settingsmodal} setModal={setSettingsModal} />
                }
            </MyAnimatePresence>
            <SmallSidebarStyles className="w-100 h-100">
                <div style={{ padding: "10px 0" }} className="h-100 w-100 flex column item-center justify-space">
                    <div className="flex column item-center justify-center w-100 gap-1">
                        {
                            sidebatlist.map((x?: any) => {
                                return <div className="w-100 relative flex item-center column justify-center ">
                                    <NavLink
                                        className="sidebar_icons flex item-center justify-center text-grey"
                                        // activeClassName="active"
                                        to={`/chat${x.path}/t/${userInfo?.id}`}
                                        key={x.id}
                                    >
                                        {x.icons}

                                    </NavLink>
                                    <span className="fs-12">{x.text}</span>

                                </div>
                            })
                        }
                    </div>
                    <div className="flex column flex item-center justify-center gap-2 w-100">
                        <div className="w-100 cursor flex column item-center justify-center">
                            <div
                                className="sidebar_icons flex item-center justify-center text-grey"
                                onClick={() => setSettingsModal(true)}
                            // activeClassName="active"
                            >
                                <IoMdSettings fontSize={'24px'} />
                            </div>
                            <span className="fs-12">Settings</span>
                        </div>
                        <img alt=""
                            width={0}
                            sizes="100vw"
                            height={0}
                            loading="lazy"
                            src={userInfo?.image}

                            className=" avatar"

                        />
                    </div>
                </div>
            </SmallSidebarStyles>
        </>
    )
}


export default SmallSidebar