import React from 'react';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      n:1
    }
  }
  onClick=()=>{
    this.setState((state)=>({
      n:state.n+1
    }))
    this.setState((state)=>({
      n:state.n-1
    }))
  }


  render() {
    console.log('render 了一次')
    return (
        <div>
          App
          <div>
            {this.state.n}
            <button onClick={this.onClick}>+1</button>
          </div>

        </div>
    );
  }

}

class B extends React.Component{
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    console.log(`props变化了`)
  }



  render(){
    return (
        <div>{this.props.name}</div>
    )
  }
}

export default App;
