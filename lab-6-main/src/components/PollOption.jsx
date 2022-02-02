import React from "react"
import styled from "styled-components"

import colors from '../colors'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    & .hoverable-visibility {
        opacity: 0;
    }

    &:hover .hoverable-visibility {
        opacity: 1;
    }
`

const Option = styled.div`
    flex-grow: 2;
    border-color: ${props => props.isSelected ? props.color : '#FFFFFF'};
    border-width: 1px;
    border-radius: 8px;
    border-style: solid;
    padding: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${props => props.isSelected ? props.color : '#BFCCE0'};
    }
`

const NameRow = styled.div`
    display: flex;
    flex-direction: row;
    color: #000000;
    font-size: 14px;
    line-height: 17px;
`

const Name = styled.div`
    flex-grow: 2;
`

const Bar = styled.div`
    height: 16px;
    width: 100%;
    background-color: #F1F3F5;
    margin-top: 3px;
`

const BarFiller = styled.div`
    height: 100%;
    width: ${props => props.width}%;
    background-color: ${props => props.color};
`

const CheckmarkContainer = styled.div`
    display: flex;
    align-self: center;
`

const Checkmark = styled.div`
    width: 20px;
    height: 20px;
    padding: 3px;
    background-color: ${props => props.isSelected ? props.color : '#BFCCE0'};
    border-radius: 50px;
    text-align: center;
    color: white;
    font-weight: bold;
    margin-left: 10px;
    ${props => props.isSelected ? 'opacity: 1 !important;' : ''}
`

export default function PollOption({color, name, percent, selected, onSelected}) {
    return (
        <Container
            onClick={onSelected}>
            <Option
                isSelected={selected}
                color={color}>
                <NameRow>
                    <Name>{name}</Name>
                    <div>{percent} %</div>
                </NameRow>
                <Bar>
                    <BarFiller
                        width={percent}
                        color={color}>
                    </BarFiller>
                </Bar>
            </Option>
            <CheckmarkContainer>
                <Checkmark 
                    className="hoverable-visibility"
                    isSelected={selected}
                    color={color}>
                    ✔
                </Checkmark>
            </CheckmarkContainer>
        </Container>
    )
}