import React from 'react';
import fetchQuote from './Fetch'

import styled from 'styled-components'

/* component for the quote */
export default class Quote extends React.Component {
    /* placeholder */
    constructor(props) {
        super(props);
        this.state = {quoteAuthor: "Rick Osborne", quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."}
    }
    /* actually render things */
    render() {
        return (
            <div className="wrapper">
                <h1>{this.state.quoteAuthor}</h1>
                <p>{this.state.quote}</p>
            </div>
        );
    }
    /* start a timer */
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          20000
        );
    }
    /* idk what this does but facebook told me to do it */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    /* async fetch the quotes and reassign the variables to them once processed */
    async tick() {
        let response = await fetchQuote();
        console.log(response);
        this.setState({
            quoteAuthor: response.author,
            quote: response.quote
        });
    }   
}