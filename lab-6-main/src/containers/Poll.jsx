import React, {useState, useEffect} from "react"
import styled from "styled-components"

import api from '../api'
import colors from '../colors'
import typo from '../typo'

import Spinner from "../components/Spinner"
import WidgetWithTitle from "../components/WidgetWithTitle"
import PollOption from "../components/PollOption"
import Button from "../components/Button"

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

const FormWrapper = styled.div`
  margin: 16px 0px 16px 16px;
`

export default function Poll({params}) {
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState(false);
  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const possibleColors = [colors.pollColor1, colors.pollColor2, colors.pollColor3, colors.pollColor4];
  const optionColors = {}

  useEffect(() => {
    setLoading(true);
    api.getPoll(params.pollId).then((data) => {
      setPoll(data);
      setLoading(false);
    })
  }, [])

  if (!poll) {
    return <Spinner margin="70px auto"/>
  }

  for (let index = 0; index < poll.options.length; index++) {
    optionColors[poll.options[index].id] = possibleColors[index % 4];
  }

  function getPercents(optionId) {
    if (poll.results[optionId]) {
      return `${Math.round(1.0 * poll.results[optionId] / poll.votes * 100)}`
    }
    else {
      return '0';
    }
  }

  function selectOption(optionId) {
    if (poll.hasVoted) {
      return;
    }
    setSelectedOption(optionId);
  }

  function isSelected(optionId) {
    return optionId === selectedOption;
  }

  function submitPoll() {
    setLoading(true);
    api.vote(poll.id, {optionId: selectedOption}).then(
      (data) => {
        setLoading(false);
        window.location.reload();
      }, (error) => {
        setLoading(false);
        setHttpError(true);
      })
  }

  return (
    <WidgetWithTitle
      header={poll.question}
      text={httpError
        ? 'Submission failed. Something went wrong on server. Sorry for that.'
        : 'Please select one option'}
      color={httpError ? colors.error : ''}
      maxWidth="520px">
      <FormWrapper>
        {poll.options.map(({id, title}) => (
          <PollOption 
            key={id}
            name={title}
            color={optionColors[`${id}`]}
            percent={poll.votes === 0 ? '0' : getPercents(id)}
            selected={isSelected(id)}
            onSelected={() => selectOption(id)}>
          </PollOption>
        ))}
      </FormWrapper>

      {!poll.hasVoted 
        && 
        <Button onClick={() => submitPoll()}>
            {loading ? (<Spinner scale={0.5} color="white"></Spinner>) : `Submit vote`}
        </Button>
      }
    </WidgetWithTitle>
  )
}
