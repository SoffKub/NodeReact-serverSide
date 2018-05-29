import React from 'react';


export class Tv extends React.Component {

    static propTypes = {
        channels: React.PropTypes.string
    };
    static defaultProps = {
        minChannels: '1'
    };
    state = {
        numberOgChannels: [
            {name: ''},
            {startDate: ''}
        ],
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}



/*
<h4>
    Tack för dina beställningar, dina val skickas via mail som en bekräftelse.
</h4>
*/
