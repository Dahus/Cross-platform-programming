import React from 'react';
import styled from 'styled-components';

import colors from '../colors'

import Button from '../components/Button'

const Container = styled.div`
    width: 100%;
    border: 1px dashed ${colors.emptyStateBorder};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 115px 100px;
    text-align: center;
`
const Text = styled.div`
    color: ${colors.emptyStateText};
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 18px;
`

export default function EmptyPollsState(props) {
    return (
        <Container>
            <Text>There is no created polls yet. Create a poll and and share a link with anyone and gather votes in seconds.</Text>
            <Button 
                children="Create a new poll"
                onClick={props.onCreatePoll}></Button>
        </Container>
    )
}