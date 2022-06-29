import { createStore } from "redux";
import rootreducers  from "./components/redux/reducers/main";

const store = createStore(
    rootreducers
);

export default store;