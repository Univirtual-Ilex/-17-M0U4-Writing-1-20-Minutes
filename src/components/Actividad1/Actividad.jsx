import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import Modal from '../Generales/Modal'
import InputWords from '../InputWords'
import ButtonUi from '../ButtonControlUI'
import ButtonEval from '../ButtonEval'

// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'


const Actividad_base = ({staticContext, ...props}) => {

 
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' h={40}>
            <ProgressbarContainer>
                <ProgressBar progress={50} />
            </ProgressbarContainer>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Write the correct order of the sentence then press check to verify if it is correct or not' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE CONVERSATION WITH THE CORRECT ORDER OF SENTENCES </MainTitle>
            </div>
            <div className='listado'>
                <div>
                    <div className="itemLine"> <span className="he">Andrés:</span> What time do you wake up? </div>
                    
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords answer='I wake up at eight o’clock'  w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval> /at/I/eight o’clock/wake up /</div>
                    <div className="itemLine"> <span className="she">Daniela:</span> Do you go to the university early in the morning? </div>
                    <div className="itemLine"> <span className="he">Andrés:</span> <InputWords answer='No, I go at eleven thirty'  w={10} p="0.16em 0.5em" m="0 0.3em"/> <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval> /go/I/eleven thirty/at/No,/ </div>
                    
                    <div className="itemLine"> <span className="he">Andrés:</span> What time do you get home?</div>                
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords answer='I get home at eight o’clock'  w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval> /home/eight o’clock/at/get/I/ </div>
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords answer='What time do you have dinner?'  w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval> /time/have/What/do/dinner?/you/ </div>
                    <div className="itemLine"> <span className="he">Andrés:</span> I have dinner at around 7:00 PM</div>
                    </div>
                    <Modal visible={false} ok w={25} nxtUrl='/' repeatUrl='/actividad3'/> 
            </div>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad