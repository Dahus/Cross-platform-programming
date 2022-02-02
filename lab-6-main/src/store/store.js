import { createStore } from 'redux';
import reducer from './reducers/pollsReducer.js'

const store = createStore(reducer);
console.log(store.getState());

export default store;