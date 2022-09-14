import styled from "styled-components"
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import { useState } from "react";


const Container = styled.div`
    padding: 30px 20px;
    
`;

const QuestionTitleInput = styled.input`
    background:none;
    border: 1px solid #777;
    border-radius: 3px;
    display:block;
    width:100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 20px;
    color: black;
`;


const QuestionBodyTextarea = styled.textarea`
    background:none;
    border: 1px solid #777;
    border-radius: 3px;
    display:block;
    width:100%;
    box-sizing: border-box;
    padding: 10px;
    min-height: 200px;
    color: black;
    font-family: inherit;
`;

const AskTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 60px;
`;

const BlueButtonAsk = styled.button`
background-color:#0a95ff;
color:  white;
border: 0;
border-radius: 5px;
padding: 10px;
text-decoration: none;

`;

const PreviewArea = styled.div`
    padding: 20px;
    background-color: #ddd;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    
`;




const AskPage = () => {
    


    const [questionTitle,setQuestionTilte] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    
    const onSubmithandler = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        fetch('http://localhost:3001/questions', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            title,
            content,
        }),
    });
    };
              
    
    
    return ( 
        <>
        <Container>
            <AskTitle>Ask a public question</AskTitle>
           <form onSubmit={onSubmithandler}>
           <QuestionTitleInput 
                                name="title"
                                type="text" 
                                value={questionTitle} 
                                onChange={e => setQuestionTilte(e.target.value)}
                                placeholder="e.g. is there an R function for finding the index of an element in a vector?"
             /> 
            <QuestionBodyTextarea   
                                    name="content"
                                    onChange={e=> setQuestionBody(e.target.value)}
                                    placeholder="More info about your question. You can use markdown here" value={questionBody}/>
            
            <PreviewArea>
            <ReactMarkdown plugins={[gfm]} children={questionBody} />
            </PreviewArea>
            <BlueButtonAsk type={'submit'}>Post your question</BlueButtonAsk>
           </form>
        </Container>
        </>
    )
}

export default AskPage


