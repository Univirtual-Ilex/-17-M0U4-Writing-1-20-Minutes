
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonEval_styles'
/*
    mx: String/Number - Margin X 
*/
// Componente base
const ButtonEval_base = ({mx, color ,...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
                { props.children }
            </button>

        </div>
    )
}
const ButtonEval = styled(ButtonEval_base)`${ styles }`
export default ButtonEval
