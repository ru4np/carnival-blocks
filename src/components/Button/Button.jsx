import { ButtonStyle } from './style'

export function Button (props) {
    return (
        <ButtonStyle width={props.width} height={props.height} >{props.text}</ButtonStyle>
    )
}