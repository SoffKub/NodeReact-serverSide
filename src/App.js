import React, { Component } from 'react';
import './App.css';
import Customer from './Component/customer/customer';
import Avtal from './Component/tv/accepteraAvtal';
import MenuHeader from './Component/web/components/menuHeader';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MenuHeader />
                    <Customer />
                </header>
            </div>
        );
    }
}

export default App;
