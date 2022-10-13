import { ThunkDispatch } from "@reduxjs/toolkit";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "src/store";
import { fetchData } from "src/store/articles/slice";

export const Articles: FC = () => {
    const loading = useSelector((state: StoreState) => state.articles.loading);
    const error = useSelector((state: StoreState) => state.articles.error);
    const articles = useSelector(
        (state: StoreState) => state.articles.articles
    );

    const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

    useEffect(() => {
        handleFetchData();;
    }, []);

    const handleFetchData = () => {
        fetchDispatch(fetchData());
    };

    return (
        <>
            <h2>Articles</h2>
            {loading && <div>Loading...</div>}
            <button onClick={() => handleFetchData()}>reload</button>
            <ul>
                {articles.map((acticle: any) => (
                    <li key={acticle.id}>{acticle.title}</li>
                ))}
            </ul>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    );
};
