import React, { Component, useEffect } from "react";
import '../styles/App.css';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: 0 }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall: true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
            console.log(this.state.ballPosition.left);
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {

            document.addEventListener('keydown', (e)=>{
                if(e.key == 'ArrowRight'){
                    console.log(e.key);
                    
                    // this.setState((preState)=>({
                    //     posi : preState.posi +5
                    // }))
                    console.log(this.state.posi);
                    this.setState({ballPosition: {left: (this.state.ballPosition.left + 5)}})
                }
          
            });
    }
   

    render() {
        
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
