import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { validate as uuidValidate } from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import WidgetWithTitle from "../components/WidgetWithTitle"
import Input from "../components/Input"
import Button from "../components/Button"

import {getStoredStateOrDefault, updateStateByKey} from '../localstore'

import colors from '../colors'
import typo from '../typo'

const FormWrapper = styled.div`
  margin: 16px;
`

export default function Keystore() {
  const [token, setToken] = useState(getStoredStateOrDefault().token)
  return (
    <WidgetWithTitle
      header="Keystore"
      text="Randomly generated key is stored in the localstorage and used as authentication token while api requests."
      maxWidth="520px"
    >
      <FormWrapper>
        <Input
          label="Random key"
          placeholder="e.g. 6cdc8747-f6e1-40c9-bda8-1e23ebfaf52b"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          validate={(value) => {return uuidValidate(value)}}
          errorMessage="Must be a valid UUID"
        />
        <Button onClick={() => { setToken(uuidv4()) }}>Generate new random key</Button>
        <Button onClick={() => updateStateByKey('token', token)}>Save</Button>
      </FormWrapper>
    </WidgetWithTitle>
  )
}
