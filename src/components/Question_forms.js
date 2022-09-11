import { AddCircleOutline, CheckBox, CropOriginal, DragIndicator } from '@material-ui/icons'
import { VideoLibrary } from '@material-ui/icons'
import { MenuItem, Select } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import Checkbox from '@material-ui/core/Checkbox'
import { ShortText } from '@material-ui/icons'
import { Subject } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import { BsTrash } from 'react-icons/bs'
import { IconButton } from '@material-ui/core'
import { FilterNone } from '@material-ui/icons'
import { AddCardOutlined } from '@material-ui/icons/'
//import OnedemandVideo from '@material-ui/core/OndemandVideo'
import { TextFields } from '@material-ui/icons'
import { BsFileText } from 'react-icons/bs'
import { Accordion } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { FcRightUp } from 'react-icons/fc'
import Close from '@material-ui/icons/CloseOutlined'
import { Radio } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Question_form.css'
import Typography from '@material-ui/core/Typography'
import Formheader from './Formheader'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function Question_forms() {

    const [questions, setQuestions] = useState(
        [{
            questionsText: 'Which is capital of gujrat?',
            questionsType: 'radio',
            options: [
                { optionsText: 'Bengaluru' },
                { optionsText: 'Surat' },
                { optionsText: 'Ahmedabad' },
                { optionsText: 'Gandhinagar' }
            ],
            open: true,
            required: false
        }]
    )
    function changeQuestion(text, i) {
        var newQuestion = [...questions];
        newQuestion[i].questionsText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }
    function addQuestionType(i, type) {
        let qs = [...questions];
        console.log(type)
        console.log('question type changed ')
        qs[i].questionsType = type;
        setQuestions(qs);
    }
    /* need to add this   */
    function changeOptionValue(text, i, j) {
        var optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText = text;
        setQuestions(optionsQuestion);
        console.log(optionsQuestion);
    }
    /* need to add this  */
    function removeOption(i, j) {
        var RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1) {
            setQuestions(RemoveOptionQuestion)
            console.log(i + "__" + j);

        }
    }
    function copyQuestion(i) {
        /*     expandCloseAll() */
        let qs = [...questions]
        var newQuestion = qs[i]
        setQuestions([...questions, newQuestion])
        console.log("copy a question ");
    }
    function deleteQuestion(i) {
        let qs = [...questions];
        if (questions.length > 1) {
            qs.splice(i, 1);
        }
        setQuestions(qs)
        console.log('poped out ')
    }
    /* need to need this */
    function addOption(i) {
        var optionsofQuestion = [...questions];
        if (optionsofQuestion[i].options.length < 5) {
            optionsofQuestion[i].options.push({ optionText: 'Option' + ('Option' + (optionsofQuestion[i].options.length + 1)) })
        }
        else {
            console.log("Max 5 options");
        }
    }
    function requiredQuestion(i) {
        var reqQuestion = [...questions];
        reqQuestion[i].required = !reqQuestion[i].required
        console.log(reqQuestion[i].required + " " + i)
        setQuestions(reqQuestion)
    }



    {/*/ function for drop and drag*/ }
    /* 
        function onDragEnd(result) {
            if (!result.destination) {
                return;
            }
            var itemgg = [...questions];
            const item = reorder(
                itemgg,
                result.source.index,
                result.destination.index
            );
           // setQuestions(itemF);
        }
        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            return result;
            
        }; */
        /* const demo =() =>{
            return  <h2>rajvi</h2> 
        } */
    const questionsUI = () => {
        return questions.map((ques, i) => (
            <div>
                <Accordion expanded={questions[i].open} className={questions[i].open ? 'add border' : ""}>
                    <AccordionSummary aria-controls='panel1a-content' id='panel1a-header' elevation={1} style={{ width: "100%" }}>

                        {questions[i].open ? (
                            <div className='saved_question'>
                                <Typography />

                                {i + 1}.  {questions[i].questionsText}
                                {ques.options.map((op, j) => (
                                    <div key={j}>
                                        <FormControlLabel disable control={<input type={ques.questionsType} required={ques.type} />} />

                                        <Typography />
                                        {ques.options[j].optionsText}
                                    </div>
                                ))}
                            </div>

                        ) : ""
                        }



                    </AccordionSummary>
                    <div className='question_box'>
                        <AccordionDetails className='add_question'>
                            <div className='add_question_top'>
                                {/* add the on change event */}
                                <input type='text' className='question' placeholder='Question' value={ques.questionsText} onChange={(e) => { changeQuestion(e.target.value, i) }}></input>
                                <CropOriginal />
                                <Select className='question'>
                                    <MenuItem id='text' value='text' onClick={() => { addQuestionType(i, "text") }}>
                                        <Subject /> Paragraph
                                    </MenuItem>

                                    <MenuItem id='checkbox' value='Checkbox' onClick={() => { addQuestionType(i, "checkBox") }} ><CheckBox checked /> Checkbox
                                    </MenuItem>
                                    <MenuItem id='radio' value='Radio' onClick={() => { addQuestionType(i, "radio") }}><Radio checked />Multiple Choice
                                    </MenuItem>

                                </Select>
                                {ques.options.map((op, j) => (
                                    <div className='add_question_body' key={j}>
                                        {
                                            (ques.questionsType !== 'text') ?
                                                <input type={ques.questionType} /> :
                                                <ShortText />

                                        }
                                        <div>
                                            <input type='text' className='text_input' placeholder='option' value={ques.options[j].optionText}>
                                            </input>
                                            <CropOriginal>
                                                <IconButton >
                                                    <Close >
                                                    </Close>

                                                </IconButton>
                                            </CropOriginal>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* */}
                            <div className='add_footer'>
                                <div className='add_question_bottom_left'>
                                    <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                        <FcRightUp style={{ border: '2px soild #4285f4', padding: '2px', marginRight: '8px' }} />Amswer key</Button>
                                </div>
                                <div className='add_question_bottom'>
                                    <IconButton aria-label='Copy' onClick={(() => { copyQuestion(i) })}>
                                        <FilterNone />

                                    </IconButton>
                                    <IconButton aria-label='delete' onClick={() => { deleteQuestion(i) }} >
                                        <BsTrash />
                                    </IconButton>
                                    <span style={{ color: '#5f6368', fontSize: '13px' }}>Required</span><Switch onClick={() => { requiredQuestion(i) }} ></Switch>
                                </div>
                            </div>
                        </AccordionDetails>
                    </div>
                    {/* option to add and remove elements */}
                    <div className='question_edit'>
                        <AddCircleOutline className='edit' />
                        <CropOriginal className='edit' />
                        <VideoLibrary className='edit' />
                        <TextFields className='edit' />
                    </div>
                    </Accordion >
            </div>
                
        ))

     
        
    };
return (
    <>
        <Formheader />
        <div className='question_form'>
            <br />
            <div className='question_title_section'>
                <div className='question_form_top'>
                    <input type='text' className='question_from_top_name' style={{ color: "black" }} placeholder='Untitled Document' />
                    <input type='text' className='question_from_top_desc' placeholder='From description' />

                </div>
               {/*  {demo()}
                */} 
                {questionsUI()}
            </div>
        </div>
    </>

)
}


export default Question_forms