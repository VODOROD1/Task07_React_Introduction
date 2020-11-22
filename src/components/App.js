import React, { useEffect, Fragment } from 'react'
// import Context from './Context'

import Todo from '../Todo/Todo'

console.log('Работает!')

function App({firstName, secondName, dispatch}) {

    return (
        // <Context.Provider value={{removeTodo}}>
            <Fragment>
                <Todo />
            </Fragment>
        // </Context.Provider>
    )
}

export default App;