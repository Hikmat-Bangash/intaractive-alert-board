import dashboardIcon from "../../public/assets/icons/dashboard.svg"
import feedIcon from "../../public/assets/icons/alarm.svg"
import profileIcon from "../../public/assets/icons/user.svg"
import planIcon from "../../public/assets/icons/myplan.svg"
import alertIcon from "../../public/assets/icons/bell.svg"
import aiadvisorIcon from "../../public/assets/icons/message.svg"

export const Tabs = [
    {
        index: 1,
        name: "DASHBOARD",
        link: "/",
        icon: dashboardIcon
    },
    {
        index: 2,
        name: "MY FEED",
        link: "/feed",
        icon: feedIcon

    },
    {
        index: 3,
        name: "PROFILE",
        link: "/profile",
        icon: profileIcon

    },
    {
        index: 4,
        name: "MY PLAN",
        link: "/plan",
        icon: planIcon

    },
    {
        index: 5,
        name: "MY ALERTS",
        link: "/alerts",
        icon: alertIcon

    },
    {
        index: 6,
        name: "AI ADVISOR",
        link: "/aiadvisor",
        icon: aiadvisorIcon

    },
]

