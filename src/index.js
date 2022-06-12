import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

       state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            postion => {
                this.setState({lat: postion.coords.latitude})
            },
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('The component was updated - therefore rerendered')
    }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
    }

        if (this.state.lat && !this.state.errorMessage) {
            return <div>Lattitude: {this.state.lat}</div>
        }
    
        return <div>Loading...</div>
}
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)