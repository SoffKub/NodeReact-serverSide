import React from 'react';
import './../css/customer.css';

const CustomerItem = () => (
    <div className="card">
            <form className="customer-form">
                <div className="customer-input-field">
                    <h3>Fyll i dina uppgifter</h3>
                    <input className="customer-input" type="text" id="name" required />
                    <label htmlFor="name"> Your name </label>
                </div>
                <div className="customer-input-field">
                    <input className="customer-input" type="text" id="name" required />
                    <label htmlFor="name"> Your age </label>
                </div>
                <p><button>Save</button></p>
        </form>
    </div>

);
export default CustomerItem;
