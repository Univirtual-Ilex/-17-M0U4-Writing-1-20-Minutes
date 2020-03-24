import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'
import { ICol } from '../Grid'



const Home_base = function ({ staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo entrada-top-Y-2'>
                        <div className='bloque-izquierdo-container'>
                            <ICol mt={2}>
                                <h1> 20 Minutes </h1>
                                <p> Complete the conversation with the correct order of sentences. </p>
                                <ButtonLink to='/actividad1'>Start</ButtonLink>
                            </ICol>

                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-3'>
                        <ICol mt={2}>
                            <figure>
                                <img src='./src/cover.png' alt='Logo' />    
                            </figure>
                        </ICol>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home