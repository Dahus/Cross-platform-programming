import React from 'react'
import styled from "styled-components"

const HoveringSvg = styled.svg`
    .hovering-class {
        fill: #BFCCE0;
    }

    &:hover {
        .hovering-class {
            fill: #F04F2B;
        }
    }
`

export default function DeleteButton({onClick}) {
    return (
        <HoveringSvg width="16" height="16" onClick={onClick}>
            <path 
                className="hovering-class"
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 6C12.5523 6 13 6.44772 13 7V13C13 14.6569 11.6569 16 10 16H4C2.34315 16 1 14.6569 1 13V7C1 6.44772 1.44772 6 2 6H12ZM11 8H3V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V8ZM4 1C4 0.447715 4.44772 0 5 0H9C9.55229 0 10 0.447715 10 1V2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V1Z" />
        </HoveringSvg>
    )
}