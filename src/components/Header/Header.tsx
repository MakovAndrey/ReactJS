import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "../Header/Header.module.css";

const navigate = [
    {
        name: "Main",
        path: "/",
    },
    {
        name: "Chats",
        path: "/chats",
    },
    {
        name: "Profile",
        path: "/profile",
    },
];

export const Header: FC = () => {
    
    return (
        <>
            <header className={style.Appheader}>
                <p>My first page React</p>
                <ul className={style.HeaderUl}>
                    {navigate.map((item, idx) => (
                        <li
                            className={style.messagelistLi}
                            key={idx}
                            data-testid="li"
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? style.activeLink : style.NavLink
                                }
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};
