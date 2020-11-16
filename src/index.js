import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

let _state

const myUseState = initialValue => {
    _state = _state ===undefined ? initialValue : _state;
    const setState = (newValue) =>{
        _state = newValue
        render()
    }
    return [_state, setState]
}

const render = () =>{
    ReactDOM.render(<App />, document.getElementById('root'))
}

function App(){
    const [n, setN] = myUseState(0);
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={()=>setN(n+1)}>+1</button>
            </p>
        </div>
    )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
