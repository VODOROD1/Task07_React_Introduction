import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import filtersReducer from './filtersReducer';
// Обычно редьюсеры делятся по задачам, в этом случае это:
// работа с заметками
// объединяем все редьюсеры внутри combineReducers()
const summonReducer = combineReducers({tasksReducer, filtersReducer});

export default summonReducer;