import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const LabelTag = styled.div`
  ${typo.label1};
  color: ${colors.mainText};
  margin-bottom: 12px;
`

const InputTag = styled.input`
  ${typo.input};
  width: 100%;
  display: inline-block;
  caret-color: ${colors.mainText};
  padding: 16px 13px;
  color: ${colors.mainText};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  outline: 0;
  text-align: left;
  margin-bottom: 4px;
  border: 1px solid ${props => props.isError ? colors.error : colors.gray};

  &::placeholder {
    color: ${colors.placeholderText};
    opacity: 1;
  }
  
  &:hover,
  &:focus {
    border-color: ${props => props.isError ? colors.error : colors.brightPrimary};
  }
`;

const ErrorMessage = styled.div`
  color: ${colors.error};
  font-size: 10px;
  margin-top: 4px;
`

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
      hasError: !props.validate("")
    };
    this.showError.bind(this);
  }

  onBlurred() {
    this.setState({ touched: true });
  }

  onValueChanged(event) {
    this.setState(
      {
        hasError: !this.props.validate(event.target.value)
      }
    );
  }

  showError() {
    return this.state.hasError && this.state.touched;
  }

  render() {
    const { label, placeholder, value, onChange, errorMessage  } = this.props

    return (
      <>
        <LabelTag>{label}</LabelTag>
        <InputTag
          placeholder={placeholder}
          onBlur={(e) => { this.onBlurred(); }}
          onChange={(e) => {this.onValueChanged(e); onChange(e); }}
          value={value}
          isError={this.showError()}
        />
        {this.showError() && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    )
  }
}
