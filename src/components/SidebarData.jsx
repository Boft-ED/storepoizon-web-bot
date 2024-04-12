import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { ROUTES } from "../utils/router";

export const SidebarData = [
    {
        title: "Главная",
        path: ROUTES.HOME,
        icon: <AiIcons.AiFillHome />,
        chName: "nav-text",
    },
    {
        title: "Отзывы",
        path: "/reviews",
        icon: <AiIcons.AiFillHome />,
        chName: "nav-text",
    },
    {
        title: "Контакты",
        path: "/contact",
        icon: <AiIcons.AiFillHome />,
        chName: "nav-text",
    },
    {
        title: "FAQ",
        path: ROUTES.CATALOG,
        icon: <AiIcons.AiFillHome />,
        chName: "nav-text",
    },
]