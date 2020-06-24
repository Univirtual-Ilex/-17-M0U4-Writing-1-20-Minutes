import React, {useState} from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import Modal from '../Generales/Modal'
import InputWords from '../InputWords'
import ButtonUi from '../ButtonControlUI'
import ButtonEval from '../ButtonEval'
import Data from './Actividad_data'
// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'


const Actividad_base = ({staticContext, ...props}) => {

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)

    const checkAnswer = (id, text) => {
        var data = Data[id]
        if(text.toLowerCase() === data.answer.toLowerCase()){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const check = (id) => {
        var data = Data[id]
        if(data.right == 1){
            data.status = 1
            eval('setInput' + id)(true)
            eval('setErrInput' + id)(false)
        }else{
            data.status = 1
            eval('setErrInput' + id)(true)
            eval('setInput' + id)(false)
        }

            checkActivity()
    }
    const checkActivity = () => {
        var count = 0
        var status = 0
        Data.map((data, i) => {
            if(data.right == 1){
                count ++
            }else{
                setErr(true)
                setOk(false)
                setModal(false)
            }
            if(data.status == 1){
                status ++
            }
            if(count == 4 && status == 4){
                setErr(false)
                setOk(true)
                setModal(true)
            }
            if(status == 4){
                setModal(true)
            }
        })
    }

 
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' h={40}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Write the given words in the correct order to make sentences' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            <div className='container-content mt'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE CONVERSATION WITH THE CORRECT ORDER OF SENTENCES </MainTitle>
            </div>
            <div className='listado'>
                <div>
                    <div className="itemLine"> <span className="he">Andrés:</span> What time do you wake up? </div>
                    
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords changeCheck={checkAnswer} idArr={0} ok={okInput0} err={errInput0}   w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval onClick={() => check(0)} color={Ilex.morado} mx={0.2}>Check</ButtonEval> /at/I/eight o’clock/wake up /</div>
                    <div className="itemLine"> <span className="she">Daniela:</span> Do you go to the university early in the morning? </div>
                    <div className="itemLine"> <span className="he">Andrés:</span> <InputWords changeCheck={checkAnswer} idArr={1} ok={okInput1} err={errInput1}   w={10} p="0.16em 0.5em" m="0 0.3em"/> <ButtonEval onClick={() => check(1)} color={Ilex.morado} mx={0.2}>Check</ButtonEval> /go/I/eleven thirty/at/No,/ </div>
                    
                    <div className="itemLine"> <span className="he">Andrés:</span> What time do you get home?</div>                
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords changeCheck={checkAnswer} idArr={2} ok={okInput2} err={errInput2}   w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval onClick={() => check(2)} color={Ilex.morado} mx={0.2}>Check</ButtonEval> /home/eight o’clock/at/get/I/ </div>
                    <div className="itemLine"> <span className="she">Daniela:</span> <InputWords changeCheck={checkAnswer} idArr={3} ok={okInput3} err={errInput3}   w={10} p="0.16em 0.5em" m="0 0.3em" /> <ButtonEval onClick={() => check(3)} color={Ilex.morado} mx={0.2}>Check</ButtonEval> /time/have/What/do/dinner?/you/ </div>
                    <div className="itemLine"> <span className="he">Andrés:</span> I have dinner at around 7:00 PM</div>
                    </div>
            </div>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad1'} finished={ok} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad