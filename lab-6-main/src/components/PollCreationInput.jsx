import React from "react"
import styled from "styled-components"

import Input from "../components/Input"
import DeleteButton from "../components/DeleteButton";

import colors from '../colors'
import typo from '../typo'
import api from '../api'

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

export default function PollCreationInput({ label, placeholder, showDelete, value, onChange, onDelete}) {
    return (
        <InputContainer>
            <InputMainContent>
                <Input label={label}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    validate={(value) => {return value}}
                    errorMessage="The field is required"></Input>
            </InputMainContent>
            <InputAppend>
                {showDelete && <DeleteButton onClick={onDelete}></DeleteButton>}
            </InputAppend>
        </InputContainer>
    )
}