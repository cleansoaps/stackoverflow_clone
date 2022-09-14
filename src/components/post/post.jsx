import { useState , useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const QuestionRow = styled.div`
  background-color: rgba(255,255,255, .1);
  padding-left: 0px;
  padding-right: 10px;
  padding-top: 15px
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 80px 105px 95px 1fr;
  align-items: center;
  white-space: nowrap;
  
`;

const QuestionStat = styled.div`
  text-align: left;
  
  span{
    font-size:1.2rem;
  }
  font-size: 1.2rem;
 
`;

const QuestionLink = styled.a`
  &:hover {
      color: #0a95ff
  }
  color: #0074cc;
  display: block;
  padding-bottom: 15px;
  padding-top: 10px;

  
`;

const QuestionText = styled.div`
  font-size: 1.2rem;
  padding-bottom: 10px;
`;


const QuestionTitleArea = styled.div`
  word-break:break-all;
  padding-left: 25px;
  font-weight: 0;
  font-size: 25px;
  vertical-align: baseline;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
  
  
`;
const Tag  = styled.span`
  display: inline-block;
  margin-right: 10px;
  background-color: #e1ecf4;
  color: #39739d;
  
  text-align: center;
  align-items: center;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: gray;
  font-size: 1.2rem;
  float: right;
  padding-right: 20px;
`;

const UserLink = styled.a`
&:hover {
      color: #0a95ff
  }
  color: #0074cc;
`;

const Post = () => {

  const que = useParams();
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/questions')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setQuestions(data);
    });
}, []);

const Delete = () => {
  if (window.confirm("삭제 하시겠습니까?")){
    fetch(`http://localhost:3001/questions/`, {
      method: 'DELETE',
      headers:{
          'Content-Type': 'application/json',
      },
    
});

}
}



return <>
        
        {questions?.map((question) => (
            <QuestionTitleArea>
          <QuestionRow>
          <QuestionStat>0<span> votes</span></QuestionStat>
          <QuestionStat>0<span> answers</span></QuestionStat>
          <QuestionStat>5<span> views</span></QuestionStat>
          </QuestionRow>
          <Link to={`/postpage/${question.id}`}><QuestionLink key={question.id}>{question.title}</QuestionLink></Link>
              <QuestionText>{question.content}</QuestionText>
        <Tag>python</Tag>
        <Tag> mysql</Tag>
        <Tag>tkinter</Tag>
        <WhoAndWhen>
        <UserLink>{question.id}</UserLink> 11 asked 2 mins ago
        <button onClick={Delete}>X</button>
        </WhoAndWhen>
            </QuestionTitleArea>
          ))} 
        
        
        </>
        
};

export default Post