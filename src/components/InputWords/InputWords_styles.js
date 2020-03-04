import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
margin: ${props => props.m || 0};
width:${props => props.w ? props.w+'em' : '100%'};
.input-words {
    padding: ${props => props.p || 0 + 'em'};
}
`

export const Input = styled.input`
border:2px dashed ${Ilex.color_gris_input};
/*padding: 0.1em 0.6em;*/
box-sizing:border-box;
display: block;
border-radius: 0.5em;
box-shadow:0 0.3em 0 0 ${Ilex.color_gris_input};
font-family:${Ilex.font};
font-size:1em;
color:${Ilex.color_grisMedio};
font-weight:lighter;
width:100%;
&::placeholder{
    color:${Ilex.color_gris_input};
}
&.ok{
    border:2px dashed ${Ilex.verde};
}
&.err{
    border:2px dashed ${Ilex.color_rojo};
}

&.okfull{
    border:2px dashed ${Ilex.verde};
    background-color:${Ilex.verde};
    color:#fff;
}

&.errfull{
    border:2px dashed ${Ilex.rosa};
    background-color:${Ilex.color_rojo};
    color:#fff;
}

`

export default styles
    