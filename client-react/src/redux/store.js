import { createStore, applyMiddleware, compose } from 'redux';
import { dataListReducer } from './reducers/dataReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(dataListReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;