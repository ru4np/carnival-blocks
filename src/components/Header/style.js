import styled from "styled-components";


export const HeroBg = styled.div`
    background-image: url('https://cdn.discordapp.com/attachments/1029991889933447199/1075780805311344680/hero.png');
    background-repeat: no-repeat;
    width: 1920px;
    height: 532px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Slogan = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #E45858;
`

export const Title = styled.h5`
    font-weight: 700;
    font-size: 48px;
    width: 657px;
    text-align: center;
    /* or 60px */

    line-height: 125%;

    color: #121214;
    span {
        color: #6246EA;
    }
`

export const ContentSearch = styled.div`
    display: flex;
    padding: 40px;
    gap: 24px;

    width: 993px;
    height: 128px;

    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 10px;

    margin-top: 40px;
`

export const SearchField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 8px 12px 14px;
    gap: 12px;

    width: 348px;
    height: 48px;

    background: #F4F4FF;
    border-radius: 5px;
`

export const SearchInput = styled.input`
    background: transparent;
    outline: none;
    border: none;

    width: 290px;
    height: 16px;
`

export const SearchOptionField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 8px 12px 14px;
    gap: 12px;

    width: 348px;
    height: 48px;

    background: #F4F4FF;
    border-radius: 5px;
`

export const SelectField = styled.select`
    width: 348px;
    height: 48px;
    background: transparent;
    border: none;
    outline: none;
`