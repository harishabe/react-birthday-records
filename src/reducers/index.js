import sortByNameReducers from './sortByName';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    sortByNameItem : sortByNameReducers
})

export default rootReducers;