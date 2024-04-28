
import { FaVideo } from 'react-icons/fa'
import { MdWebStories } from 'react-icons/md'
import ArchiveIcon from "../assets/svg/Archive";
import PeopleIcon from "../assets/svg/MarketPlace";
import RequestIcon from "../assets/svg/Request";
import ChatsIcon from "../assets/svg/chats";
import People from "../assets/svg/people";



export const sidebatlist = [
    {
        text: "Chats",
        icons: <ChatsIcon />,
        path:""
    },
    {
        text: "People",
        icons: <People />,
        path:"/active"
    },
    {
        text: "Archive",
        icons: <ArchiveIcon />,
        path:"/archive"
    }
]


export const smallSidebatlist = [
    {
        text: "Chats",
        icons: <ChatsIcon />,
        path: ""
    },
    {
        text: "Calls",
        icons: <FaVideo fontSize='24px' />,
        path: "/calls"
    },
    {
        text: "People",
        icons: <People />,
        path: "/active"
    },
    {
        text: "Stories",
        icons: <MdWebStories fontSize='24px' />,
        path: "/marketplace"
    },
]