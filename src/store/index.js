import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './Categories';
import products from './Products';
import cart from './Cart';


const rootReducer = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();