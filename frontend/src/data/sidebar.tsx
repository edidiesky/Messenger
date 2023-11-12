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
        text: "Marketplace",
        icons: <PeopleIcon />,
        path:"/marketplace"
    },
    {
        text: "Request",
        icons: < RequestIcon />,
        path:"/requests"
    },
    {
        text: "Archive",
        icons: <ArchiveIcon />,
        path:"/archive"
    }
]