import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {HiOutlineBars3} from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'
import { TopStyles } from "./styles";
import VideoIcon from "../../assets/svg/video";
import { RxCross1 } from "react-icons/rx";

type SearchType = {

    setSearch: (volue: boolean) => void;
    search?: boolean;
    searchvalue?: string;
    setSearchValue: (value: string) => void
}

const Top: React.FC<SearchType> = ({ setSearch, search, setSearchValue, searchvalue }) => {
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchValue(e.target.value)
    }
    const HandleClearSearchInput = ()=> {
        setSearchValue('')
        setSearch(false)
    }
    return (
        <TopStyles>
            <div className="w-90 auto flex column gap-1">
                <div className="flex top_search item-center justify-space w-90 auto">
                    <div className="icon top_icon flex item-center justify-center">
                        <HiOutlineBars3 fontSize={'25px'} />
                    </div>
                    <h4 className="fs-24 text-dark text-extra-bold">Chats</h4>
                    <div className="icon top_icon flex item-center justify-center">
                        <VideoIcon />
                    </div>
                </div>
                {
                    search ? <div className="flex w-90 auto item-center gap-1">
                        <div onClick={HandleClearSearchInput} className="icon icons flex item-center justify-center">
                            <BsArrowLeft color="var(--dark-1)" fontSize={'20px'} />
                        </div>
                        <form action="" className="flex-1 family1 auto flex item-center gap-1">
                            <div className="icons flex item-center justify-center">
                                <IoSearch color="var(--dark-1)" fontSize={'20px'} />
                            </div>
                            <input
                                onChange={(e) => onChange(e)}
                                type="text"
                                name='searchvalue'
                                value={searchvalue}
                                // autoComplete={"false"}
                                
                                placeholder="Search Messenger"
                                className="input fs-14 flex-1 text-dark text-light"
                            />
                            {
                                searchvalue && <div style={{marginLeft:"-10px"}} onClick={() => setSearchValue('')}
                                 className="icon icons_1 flex item-center justify-center">
                                    <RxCross1 color="var(--dark-1)" />
                                </div>
                            }
                        </form>
                    </div> : <div className="flex w-90 auto item-center gap-2">
                        {/* <div className="icon flex item-center justify-center">
                            <BsArrowLeft color="var(--dark-1)" fontSize={'20px'} />
                        </div> */}
                        <form action="" className="flex-1 family1 auto flex item-center gap-1">
                            <IoSearch color="var(--dark-1)" fontSize={'20px'} />
                            <input
                                onClick={() => setSearch(true)}
                                type="text"
                                placeholder="Search Messenger"
                                className="input fs-14 flex-1 text-dark text-light"
                            />
                        </form>
                    </div>
                }
            </div>
        </TopStyles>
    )
}



export default Top