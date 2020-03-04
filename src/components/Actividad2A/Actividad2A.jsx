
//Import
import React, {useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2A_styles'
import Container from '../Container'

// Variables
import Ilex from '../../App/variables'
// Components
import {ICol, IRow} from '../Grid'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonCheck from '../ButtonCheck'
import ButtonInfo from '../ButtonInfo'
import InputWords from '../InputWords'
import Tooltip from '../Tooltip'

// Componente base
// 530 517 video player

const Actividad2A_base = ({staticContext, ...props}) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    return (
        <Container  { ...props } bgImage='./src/arbol.png'>
            <IRow w={80} align="center">
                <ICol mt={2}>
                    <ProgressBar progress={50}/>
                </ICol>
            </IRow>
            <IRow>
                <ICol>
                <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ THE DESCRIPTION OF A TEACHER’S FAMILY AND COMPLETE THE FAMILY TREE.
                </MainTitle>  
                </ICol>
            </IRow>

            <IRow className="contenido" justify="center" pt={1} >

                    <ButtonInfo imgUrl="src/svg/camara.svg" onClick={ () => setTooltipVisible(!tooltipVisible) } > 
                        CLICK HERE TO READ AGAIN THE DESCRIPTION
                    </ButtonInfo>

            </IRow>

            {/* Fila */}
            <IRow justify="center" pt={2.5} gutters={0.8}>
                    <InputWords w={7.3} p="0.3em 0.5em"/>
                    <InputWords w={7.3} p="0.3em 0.5em"/>
            </IRow>
            {/* Fila */}

            {/* Fila */}
            <IRow justify="center" pt={1.5} gutters={0.8}>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
            </IRow>
            {/* Fila */}

            {/* Fila */}
            <IRow justify="center" pt={1.5} gutters={0.8}>
                    <InputWords w={7.3} p="0.3em 0.8em"/>
            </IRow>
            {/* Fila */}

            {/* botón footer */}
            <ICol mt={7.5}>
                <ButtonCheck>NEXT</ButtonCheck>
            </ICol>

                <Tooltip visible={tooltipVisible} closebtn = { () => setTooltipVisible(!tooltipVisible) } fz = {1} w={ 50 } pos="9em, 6em">
                    <IRow p={1}>
                        <ICol>
                            Hello, everyone! This is my family. As you can see in the photo, we’re eating together. We’re celebrating a Christmas dinner at home. I’m going to describe my family to you.  Well, let me start with my sister. Her name is Sofia. She’s the oldest in the family. She’s a nurse and she’s 45.  She is married too. Her husband’s name is Juan Pablo and he’s 48. He’s a doctor. They have a child and her name is Mariana. She’s only 5 years old. She’s a student in kindergarten. My mother’s name is Rosario and she is 72. She doesn’t work. She’s retired. I love her so much! My father isn’t in the picture because unfortunately, he died last year. His name was Mario. He was 76 years old and he was a Police officer.  I have two young brothers. Their names are Cristian and Paulo. Cristian is 23 and Paulo is 27.  Cristian studies Mechanical Engineering at UTP and Paulo works as a chef in a local restaurant. As for me, my name is Andrés. I’m 36 years old and I’m an English teacher at a public school. I love my job. What can you tell me about your family? 
                        </ICol>
                    </IRow>
                </Tooltip>

        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
