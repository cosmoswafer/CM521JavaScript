import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        count: 10,
    };

    updateCount(step) {
        this.setState({ count: this.state.count + step });
    }

    changeCount = (e) => {
        /*this.setState({
            count: !isNaN(Number(e.target.value))
                ? Number(e.target.value)
                : this.state.count,
        });*/
        this.setState({ count: Number(e.target.value) });
    };

    render() {
        return (
            <div className="counter">
                <input
                    onInput={this.changeCount}
                    type="number"
                    value={this.state.count}
                />
                <button
                    onClick={() => {
                        this.updateCount(-1);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        this.updateCount(+1);
                    }}
                >
                    +
                </button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default App;
