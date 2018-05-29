import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import MenueHeader from '../Component/webPages/components/menuHeader'
import Home from '../Component/webPages/components/home';
import Avtal from '../Component/tv/accepteraAvtal'

export default () => (
    <BrowserRouter>
        <div>
            <Route path="/" component= {MenueHeader} />
            <Route path="/" exact component= {Home} />
            <Route path="/createBox" exact component= {Avtal} />
        </div>
    </BrowserRouter>
);
