import React from 'react';
import '../../css/home.css';

const HomeItem = () => (
    <div className="card">
            <form className="home-form">
                <div className="home-input-field">
                    <h3>Fyll i dina uppgifter</h3>
                    <input className="home-input" type="text" id="name" required />
                    <label htmlFor="name"> Your name </label>
                </div>
                <div className="home-input-field">
                    <input className="home-input" type="text" id="name" required />
                    <label htmlFor="name"> Your age </label>
                </div>
                <p><button>Save</button></p>
        </form>
    </div>

);
export default HomeItem;
