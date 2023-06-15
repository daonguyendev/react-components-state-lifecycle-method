import React from 'react';
import './App.css';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year: 1964,
            isChangeColor: false
        }
    }
    // changeColorBlue = (e) => { 
    //     e.preventDefault();
    //     this.setState( {color: "blue", isBlue: true} ); 
    //     alert("Change to color: " + this.state.color);
    // };
    // changeColorRed = (e) => { 
    //     e.preventDefault();
    //     this.setState( {color: "red", isBlue:false } ); 
    //     alert("Change to color: " + this.state.color);
    // };
    changeColor = (currentColor) => {
        this.setState({color: currentColor, 
            isChangeColor: !this.state.isChangeColor });
    }

    componentWillUpdate = () => {
        alert("Truoc khi render ne");
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{backgroundColor: this.state.color, color: 'white'}}>It is a {this.state.color} &nbsp; - &nbsp; {this.state.model} from {this.state.year} year</p>
                <button onClick={e => {
                    e.preventDefault();
                    this.state.isChangeColor 
                        ? this.changeColor("red") 
                        : this.changeColor("blue")}}> 
                    Change color  
                </button>
            </div>
        )
    }

    componentDidUpdate = () => { 
        if (this.state.color === 'blue') {
            this.setState({color: "green", isChangeColor: !this.state.isChangeColor });
        }
        alert("Sau khi render ne");
    }
}
export default Car;