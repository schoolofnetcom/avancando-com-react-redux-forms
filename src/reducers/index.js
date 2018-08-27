import { combineReducers } from 'redux';
import name from './name';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    form: reduxFormReducer,
    name
});