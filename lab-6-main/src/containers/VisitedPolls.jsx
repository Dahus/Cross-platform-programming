import React from "react"
import styled from "styled-components"

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

const Container = styled.div`
    max-width: 560px;
    margin: 0 auto;
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

export default function VisitedPolls() {
    return (
        <>
            <Header>
                <H2>Visited Polls</H2>
            </Header>
            <Container>
                <Text>There is nothing there, but you hold on. There is no api, but you hold on.</Text>
            </Container>
        </>
    )
}