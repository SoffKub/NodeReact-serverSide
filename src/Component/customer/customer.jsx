import React from 'react';
import CustomerItem from './customerItems';

    const Customer = () => (
        <div>
        <div>
            <canvas className="container" id="container" role="main"></canvas>
            <div className="content">
                <h1 className="title">Boxis</h1>
                <p className="desc">Skräddarsy ditt tv tittande hos oss</p>
            </div>
            <div>
                <table className="customerTable">
                    <thead>
                    <tbody>
                        <tr>
                        <th>...</th>
                        </tr>
                    </tbody>
                    </thead>
                </table>
            </div>
        </div>
        <div className="blur blurTop"><canvas className="canvas" id="blurCanvasTop"> </canvas></div>
        <div className="blur blurBottom"><canvas width="1000px" height="1000px" className="canvas" id="blurCanvasBottom"></canvas></div>
            <CustomerItem />
        </div>
    );
export default Customer;

