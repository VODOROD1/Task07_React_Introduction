// константа вводится для того, чтобы не словить ошибку, когда
// происходит замена типа экшона в action, а в редьюсере забыли поменять экшон
export const ACTION_CHANGE_TITLE = 'ACTION_CHANGE_TITLE';
export const ACTION_CHANGE_TEXT = 'ACTION_CHANGE_TEXT';

// Создадим функции, которые возвращают объекты экшенов.
export const changeTitle = (newTitle) => {
  return {
    type: ACTION_CHANGE_TITLE,
    payload: newTitle
  }
}

export const changeText = (newText) => {
  return {
    type: ACTION_CHANGE_TEXT,
    payload: newText
  }
}

