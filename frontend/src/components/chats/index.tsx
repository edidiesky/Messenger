import React, { useEffect, useState } from "react";
import { FriendListStyles, HomeStyles } from "./styles";
import Top from "./top";

import FriendList from "./friendlist";
import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { useParams } from "react-router-dom";
import { GetAllUserProfile, GetAllUserSearch } from "../../features/auth/authReducer";
import LoaderIndex from "../loaders";
import { motion } from "framer-motion";
import ActiveList from "./activelist";

const userdata = [
    // 5. Center Devils
    {
        "name": "Robert D. Nixon",
        "image": "https://i.pinimg.com/236x/aa/4f/14/aa4f1494ba69f716fb92f0115a6c5fb4.jpg",
        "email": "RobertDNixon@gmai.com",
      
        createdAt: new Date("2020-01-14").toISOString(),

    },
    {
        "name": "Lional Messi",
        "image": "https://i.pinimg.com/236x/87/0f/4c/870f4c67a5e58a423545d735cae171f6.jpg",
        "email": "lionelmessi102@gmai.com",
      
        createdAt: new Date("2011-02-19").toISOString(),

    },
]

const Chat: React.FC = () => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)
    const [searchvalue, setSearchValue] = useState<string>('')
    const { id } = useParams()
    // console.log(id)

    const { users, userInfo, userprofileisLoading, userSearchResult } = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) {
            dispatch(GetAllUserProfile({ id: userInfo?.id }))
        }
    }, [])

    useEffect(() => {
        if (searchvalue) {
            dispatch(GetAllUserSearch({ name: searchvalue }))
        }
    }, [searchvalue])
    return (
        <HomeStyles className="h-100">
            <Top
                setSearchValue={setSearchValue}
                searchvalue={searchvalue}
                setSearch={setSearch}
                search={search}
            />
            {
               <div className="w-90 auto">
                    <FriendListStyles
                        as={motion.div}
                        initial={{ opacity: 0, visibility: "hidden" }}
                        exit={{ opacity: 0, visibility: "hidden" }}
                        animate={!search ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden", height: "0px" }}
                    >
                        {
                            userprofileisLoading ? <LoaderIndex type="small" /> :
                                <div className="chatlistWrapper w-100 flex column">
                                    {
                                        users?.map((x?: any) => {
                                            return <FriendList {...x} />
                                        })
                                    }
                                </div>
                        }

                    </FriendListStyles>
               </div>
            }

            {
              <div className="w-90 auto">
                    <FriendListStyles
                        as={motion.div}
                        initial={{ opacity: 0, visibility: "hidden" }}
                        exit={{ opacity: 0, visibility: "hidden", display: "none" }}
                        animate={searchvalue ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden", display: "none" }}
                    >
                        <div className="w-90 auto flex column gap-1">
                            <div className="search_tab w-100 flex item-center gap-2">
                                <div className="">
                                    <BsSearch fontSize={'25px'} color={'var(--dark-1)'} />
                                </div>
                                <h4 className="fs-16 text-light text-dark">Search Messages for {searchvalue}</h4>
                            </div>

                            <div className="w-90 auto flex column">
                                {
                                    userSearchResult?.map((x?: any) => {
                                        return <ActiveList {...x} />
                                    })
                                }
                            </div>
                        </div>

                    </FriendListStyles>
              </div>
            }

        </HomeStyles>
    )
}



export default Chat