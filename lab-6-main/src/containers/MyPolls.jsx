import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { connect } from 'react-redux';
import { useLocation } from "wouter";
import { bindActionCreators } from "redux";

import Spinner from "../components/Spinner"
import PollListItem from "../components/PollListItem"
import EmptyPollsState from "../components/EmptyPollsState"

import { actionAddPoll, actionClearPolls, actionRemovePoll } from "../store/actionCreators/pollsActionCreator"

import api from '../api'
import colors from '../colors'
import typo from '../typo'

const Header = styled.div`
  max-width: 560px;
  margin: 70px auto 24px;
  display: flex;
  flex-direction: row;
`

const H2 = styled.h2`
  ${typo.h2};
  color: ${colors.mainText};
  
  text-align: left;
  flex-grow: 2;
`

const PollList = styled.div`
  max-width: 560px;
  margin: 0 auto;
`

const NewPollButton = styled.button`
  ${typo.button};
  color: #8897AD;
  font-size: 14px;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

function MyPolls(props) {
  const [location, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      api.getPolls().then((data) => { 
        props.clearPolls();
        data.polls.map(poll => {
          console.log(poll);
          props.addPoll(poll);
        });
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <Spinner margin="70px auto"/>
  }

  function deletePoll(pollId) {
    api.deletePoll(pollId).then((data) => {
      props.deletePoll(pollId);
    })
  }

  function copyPollLink(pollId) {
    const textarea = document.createElement("textarea");
    textarea.value = `${window.location.origin}/poll/${pollId}`;

    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
  }

  function newPoll() {
    setLocation("/new");
  }

  function navigateToPoll(id) {
    setLocation(`/poll/${id}`);
  }

  return (
    <>
      <Header>
        <H2>Your Polls</H2>
        <NewPollButton onClick={() => newPoll()}>New poll</NewPollButton>
      </Header>
      {props.polls.length !== 0
        ? 
        <PollList>
          {props.polls.map(({id, letters, question, votes, createdAt}) => (
            <PollListItem
              key={id}
              letters={letters}
              question={question}
              votes={votes}
              created={createdAt}
              onDelete={() => deletePoll(id)}
              onShare={() => copyPollLink(id)}
              onClick={() => navigateToPoll(id)}
            />
          ))}
        </PollList>
        :
        <PollList>
          <EmptyPollsState
            onCreatePoll={() => newPoll()}>
          </EmptyPollsState>
        </PollList>
        }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
      polls: state.myPolls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addPoll: bindActionCreators(actionAddPoll, dispatch),
      clearPolls: bindActionCreators(actionClearPolls, dispatch),
      deletePoll: bindActionCreators(actionRemovePoll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPolls)