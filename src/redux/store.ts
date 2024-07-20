import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import { photoReducer } from "./slices/photoOfDay";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: {
        photo: photoReducer,
    },
    devTools: true,
},
// composeEnhancers(applyMiddleware()())
);

export default store;