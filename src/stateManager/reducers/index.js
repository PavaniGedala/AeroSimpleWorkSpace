import {combineReducers} from 'redux';
import {reducer as form} from "redux-form";
import user from './user.reducer'
import { reducer as reduxFormReducer } from 'redux-form';


var reducers=combineReducers({
    userData:user,
    form: reduxFormReducer // to bind to redux
})

export default reducers;
