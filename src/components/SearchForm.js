//@flow

import React, { Component } from 'react';

type Props = {
  onSend: (string) => void,
  inputMessage: string,
  buttonTitle: string
};

type State = {
  inputValue: string
}

class SearchForm extends Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      inputValue: ""
    };
  }

  search(query: string) {
    this.props.onSend(query);
  }

  render() {
    return (
    <form onSubmit={ (event) => {
      event.preventDefault(); /* To don't reload view */
      this.search(this.state.inputValue);
    }}>
      <input
        onChange={(event) => this.setState({inputValue: event.target.value})}
        value={this.state.inputValue}
        placeholder={this.props.inputMessage}/>
      <button>{this.props.buttonTitle}</button>
    </form>
    )
  }
}

export default SearchForm;
