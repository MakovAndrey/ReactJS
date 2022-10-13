import { FC } from "react";
import car from '../assets/img/hand-made.jpg';

export const Main: FC = () => {
    return (
        <>
            <h2>Main page</h2>
            <img src={car} alt="Fire fight car" />
        </>
    );
};
