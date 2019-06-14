import { createStore } from 'redux'
import MainReducer from './reducers/MainReducer'

const store = createStore(MainReducer, {
    mensaje: "Platzi es lo mejor"
});

export default store