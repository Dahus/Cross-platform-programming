import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from "redux";
import { useLocation } from "wouter";
import { connect } from 'react-redux';

import WidgetWithTitle from "../components/WidgetWithTitle"
import Input from "../components/Input"
import Button from "../components/Button"
import Spinner from "../components/Spinner"
import DeleteButton from "../components/DeleteButton";
import PollCreationInput from "../components/PollCreationInput";

import { actionAddPoll } from "../store/actionCreators/pollsActionCreator"

import colors from '../colors'
import typo from '../typo'
import api from '../api'

const FormWrapper = styled.div`
  margin: 16px 0px 16px 16px;
`

const AnotherOptionLabel = styled.div`
    color: ${colors.mainText};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    cursor: pointer;
    margin-top: 16px;
`

const InputContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
`

const InputMainContent = styled.div`
    flex-grow: 2;
`

const InputAppend = styled.div`
    min-width: 30px;
    align-self: flex-end;
    padding-bottom: 22px;
    padding-left: 8px;
`

function NewPoll(props) {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState(false);
    const [location, setLocation] = useLocation();

    function changeOption(payload, id) {
        setOptions(arr => {
            const index = arr.findIndex(x => x.id === id);
            let newArr = [...arr];
            if (index !== -1){
                newArr[index] = {id: id, value: payload};
            }
            return newArr;
        })
    }

    function addNewOption() {
        setOptions(arr => [...arr, {id: uuidv4(), value: ''}]);
    }

    function deleteOption(id) {
        setOptions(arr => {
            var newArr = [...arr];
            const index = arr.findIndex(x => x.id === id);
            if (index !== -1) {
                newArr.splice(index, 1);
            }
            return newArr;
        })
    }

    function createPoll() {
        setLoading(true);
        api.createPoll({
            question: question,
            options: options.map(option => {
                return {title: option.value}
            })
        }).then(
        (data) => {
            props.addPoll(data);
            setLocation("/");
        },
        (error) => {
            setLoading(false);
            setHttpError(true);
        })
    }

    return (
      <WidgetWithTitle
        header="Create a new poll"
        text={ httpError
            ? "Creation of new poll failed. Something went wrong on server. Sorry for that."
            : "To start a poll just share a link on them with your friends. Once you have one vote it can't be edited anymore."}
        color={httpError ? colors.error : ''}
        maxWidth="520px"
      >
        <FormWrapper>
            <PollCreationInput 
                label="Poll question"
                placeholder="Eg. What is your favourite programming language?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                showDelete={false}></PollCreationInput>
            {options.map(({id, value}, index) => (
                <PollCreationInput
                    key={id}
                    label={`Question ${index + 1}`}
                    placeholder={`Eg. option ${index + 1}`}
                    value={value}
                    showDelete={true}
                    onChange={(e) => changeOption(e.target.value, id)}
                    onDelete={() => deleteOption(id)}></PollCreationInput>
            ))}
            <AnotherOptionLabel onClick={() => addNewOption()}>
                + Add another option 
            </AnotherOptionLabel>
        </FormWrapper>

        <Button onClick={() => createPoll()}>
            {loading ? (<Spinner scale={0.5} color="white"></Spinner>) : `Create poll`}
        </Button>
      </WidgetWithTitle>
    )
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        addPoll: bindActionCreators(actionAddPoll, dispatch)
    }
  }

  export default connect(null, mapDispatchToProps)(NewPoll)