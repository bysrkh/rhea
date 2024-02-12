import React from 'react'
import ReactDOM from 'react-dom'

const App = props => {

    return (
        <>
            <h1 className="mt-2 text-blue-600">Hello World</h1>
        </>
    )
}

export default App

ReactDOM.render(<App/>, document.querySelector('#app'))