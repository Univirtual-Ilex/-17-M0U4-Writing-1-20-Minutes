import React, {useRef} from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'


// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import dataItems from './Actividad_data'
import { useState } from 'react'

const Actividad_base = ({staticContext, ...props}) => {
    const [itemsCompletados, modItemsCompletados] = useState([])
    const insertarItems = (val) => {
        if (itemsCompletados.indexOf(val) === -1 ) {
            modItemsCompletados( itemsCompletados.concat(val) )
        } else {
            console.log('Cant Register because is already in area')
            console.log(itemsCompletados)
            console.log('La cantidad de items en el array es? ', dataItems.length)
        }

    }
// Comprobar y aprobar el examen
    const comprobarPrueba = () => {
        if(itemsCompletados.length === dataItems.length) {
            return true
        }
        return false
    }
// Refs de las areas
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()

 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={50}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Drag the words to the appropriate box, plural, female or male.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={0}/>
            </ProgressbarContainer>
            


            <MainTitle color={Ilex.violeta2}>
            LISTEN AND PRACTICE FAMILY MEMBERS. THEN, CLASSIFY EACH FAMILY MEMBER BY ITS GENDER.
            </MainTitle>
            
            <DraggablesContainer>
                
                { dataItems.map((dato)=>{
                    return(
                        <DraggableItem audio={dato.audio} name={dato.name} key={dato.id} elementId={dato.id} info={insertarItems} className='dragItem' areaDrag="#area" target={dato.areaTarget} ref={[area_1, area_2, area_3]}/>
                    )
                }) }

            </DraggablesContainer>
            <AreasContainer >
                <Area title='Plural' data-target="area_1" id="area_1" ref={area_1} />
                <Area title='Female' data-target="area_2" id="area_2" ref={area_2} />
                <Area title='Male' data-target="area_3" id="area_3" ref={area_3} />
            </AreasContainer>

            <Modal visible={comprobarPrueba()} ok w={25} nxtUrl='/actividad2' />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad