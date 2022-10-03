import { compose, createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";

export const composeEnchancer =
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeEnchancer());
