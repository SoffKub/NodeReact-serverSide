import React from 'react';
import '../css/tv.css';
import axios from 'axios';



// spara ner till databasen varje användare och varje resultat.

export class Avtal extends React.Component {

    state = {
        text: '',
        loadingError: false,
        status: '',
        customerOptions: {
            type: ['ja', 'nej'],
        },
    };
    // hämta upp en text från backend
    componentDidMount = () => {
        this.loadText();
    }
    loadText = () => {
        this.setState({ text: 'Välkommen till oss, här kan du välja ditt egna tv paket och direkt få se vad din månadskostnad skulle bli.' });
        /*
        axios.get('/api/consent')
          .then((/response) => {
            this.setState({ text: response.data.text });
          })
          .catch(() => this.setState({ loadingError: true }));
         */
    };
// Skapa tabell för olika alternativ som väljaren kan välja
// skapa och Hantera checkbox i tabellen, två alternativ.  ja ,nej .

    saveCustomerChoice = (e) => {
        e.preventDefault();
        const postCustomerOption = { status: this.state.status };
        console.log(postCustomerOption);

        axios.post('/api/consent', postCustomerOption)
            .then((response) => {
                if (response) {
                    console.log('Ditt val av tv kanaler har nu sparats');
                } else {
                    console.log('Ditt val av tv kanaler kunde inte sparas!');
                }
            })
            .catch(() => {
                console.log('Ditt val av tv kanaler kunde inte sparas!');
            });
    };
    render() {
        return (
            <div>
                <table className="tvTable">
                    <thead>
                    <tr>
                        <th>C-more </th>
                        <th>Tv 4 play</th>
                        <th>World wide web</th>
                        <th>Threats in the world</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 1 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 1 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 1 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 1 månad</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 6 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 6 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 6 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 6 månad</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 12 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 12 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 12 månad</td>
                        <td><input type="checkbox" name="myTextEditBox" value="checked" /> 12 månad</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}
export default Avtal;
