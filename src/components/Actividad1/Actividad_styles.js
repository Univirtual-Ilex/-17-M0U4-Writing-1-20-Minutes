import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.listado{
    padding:2em;
    width:50em;
    margin:auto;
    color:${Ilex.textos};
    text-align:center;
    .contenedorButton{
        padding:2em 0;
        text-align:right;
    }
    .itemLine{
        padding: 0.7em 0;
    }
}

.he,.she{
    font-weight: bolder;
}
.he{
    color: ${Ilex.color_azul_vivo}
}
.she{
    color: ${Ilex.violeta2}
}
`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    right:0;
    position:absolute;
    right:1.6em;
    top:1em;

`

export const Olist = styled.ol`
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`


export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer, Olist, Item}