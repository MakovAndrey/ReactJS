import { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "src/store";
import { auth } from "src/store/profile/slice";

const nav = [
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
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Articles",
        path: "/articles",
    },
];

export const Header: FC = () => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(auth(false));
    };

    const handleLogin = () => {
        navigate("/signin");
    };

    return (
        <>
            <header className={style.Appheader}>
                <p>My first page React</p>
                <ul className={style.HeaderUl}>
                    {nav.map((item, idx) => (
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
                {isAuth ? (
                    <button onClick={handleLogout}>logout</button>
                ) : (
                    <button onClick={handleLogin}>login</button>
                )}
                <Outlet />
            </main>
        </>
    );
};
