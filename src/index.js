import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

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

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
    
            if (this.state.lat && !this.state.errorMessage) {
                return <SeasonDisplay lat={this.state.lat}/>
            }
        
            return <Spinner message="Please allow location services."/>
    }


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
}
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)