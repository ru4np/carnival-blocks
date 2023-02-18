import styled from "styled-components";

export const GridCard = styled.div`
    display: flex;
    flex-direction: column;

    width: 384px;
    height: 323px;

    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 10px;

    gap: 16px 16px;
    padding: 0 16px;

    img {
        width: 100%;
        height: 153px;
    }

    h6 {
        font-weight: 700;
        font-size: 20px;

        color: #121214
    }

    p{
        font-weight: 400;
        font-size: 16px;
        
        color: rgba(0, 0, 0, 0.75);
    }

    small {
        font-weight: 400;
        font-size: 16px;

        display: flex;
        align-items: center;

        color: rgba(0, 0, 0, 0.75);
    }
`