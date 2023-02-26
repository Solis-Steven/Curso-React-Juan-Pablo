import styled from "@emotion/styled";

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    text-align: center;
`

export function Error({ children }) {
    return(
        <Texto>
            { children }
        </Texto>
    );
}