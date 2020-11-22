// константа вводится для того, чтобы не словить ошибку, когда
// происходит замена типа экшона в action, а в редьюсере забыли поменять экшон

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_TASK = 'CHANGE_TASK';