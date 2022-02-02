import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

import ShareButton from './ShareButton'
import DeleteButton from './DeleteButton'

import moment from 'moment'

const PollListItemContainer = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  }
`

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 26px 16px 16px;
`

const PollLetters = styled.div`
  ${typo.pollLetters};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
  background: ${colors.grayBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.brightPrimary};
`

const Text = styled.div`
  ${typo.body1};
  color: ${colors.mainText};
  flex-grow: 5;
  margin-right: 5px;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 37px;
  width: 60px;
`

const InfoBlockHeader = styled.div`
  ${typo.body1};
  color: ${colors.mainText};
`
const InfoBlockValue = styled.div`
  font-size: 10px;
  color: ${colors.secondaryText};
  margin-top: 4px;
`

const ButtonBlock = styled.div`
  margin-left: 21px;
`

const PollListItem = ({letters, question, votes, created, onShare, onDelete, onClick}) => (
  <PollListItemContainer>
    <Wrapper
      onClick={onClick}>
      <PollLetters>{letters}</PollLetters>
      <Text>{question}</Text>
      <InfoBlock>
        <InfoBlockHeader>{votes === 0 ? 'Created' : 'Started'}</InfoBlockHeader>
        <InfoBlockValue>{moment(created).fromNow()}</InfoBlockValue>
      </InfoBlock>
      <InfoBlock>
        <InfoBlockHeader>Votes</InfoBlockHeader>
        <InfoBlockValue>{votes}</InfoBlockValue>
      </InfoBlock>
      <ButtonBlock>
        <ShareButton onClick={onShare}></ShareButton>
      </ButtonBlock>
      <ButtonBlock>
        <DeleteButton onClick={onDelete}></DeleteButton>
      </ButtonBlock>
    </Wrapper>
  </PollListItemContainer>
)


export default PollListItem