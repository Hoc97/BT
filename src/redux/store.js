import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import middleReSa from './reducer/saga/middleRega';
import rootReducer from './reducer/rootReducer';

const middleware = reduxSaga();
const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;
middleware.run(middleReSa);
