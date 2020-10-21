import React, {Component} from 'react';

class Test extends Component{

  componentDidMount(){
    console.log("blabla");
  }

  componentWillMount(){
    console.log("will");
  }

  render(){
    return (
      <div>
        <h1>TEST SHIT</h1>
      </div>
    )
  }
}

export default Test;