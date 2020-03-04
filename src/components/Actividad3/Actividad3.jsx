//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle, { Subtitle } from '../MainTitle'
import InputWords from '../InputWords'
import ButtonCheck from '../ButtonCheck'
import ButtonUi from '../ButtonControlUI'
// styles from styled
import { ProgressbarContainer, UiButtonsContainer } from '../Actividad1/Actividad_styles'
// import {Olist} from './Actividad3_styles'
// import {Item}from './Actividad3_styles'
// import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'


// Componente base
const Actividad3_base = ({staticContext, ...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={75} h={45.8}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='From the previous text complete the information below' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE CHART WITH THE CORRECT INFORMATION FROM THE TEXT. </MainTitle>
            </div>

            <IRow justify="center">
                <ICol py={1.5} px={1} w={18} >
                    <Subtitle color={Ilex.violeta2} p={0}>Name </Subtitle>
                    <div className="wordsContainer">
                        <div className="baseWord">Andrés</div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} ok/>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} err/>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord">Juan Pablo</div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>

                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}>Age </Subtitle>
                    <div className="wordsContainer">                        
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> 72 </div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> 45 </div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>
                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}>Ocupation</Subtitle>
                    <div className="wordsContainer">   
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Police Officer </div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Student </div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                    </div>
                </ICol>

                <ICol py={1.5} px={1}  w={18}>
                    <Subtitle color={Ilex.violeta2} p={0}> Relationship </Subtitle>
                    <div className="wordsContainer">   
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />                        
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Niece </div>
                        <InputWords m="0.5em 0" p="0.4em 0.6em" w={8} />
                        <div className="baseWord"> Brother </div>
                    </div>
                </ICol>
            </IRow>

            {/* botón footer */}
            <ICol mt={7.5}>
                <ButtonCheck>Check</ButtonCheck>
            </ICol>

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
