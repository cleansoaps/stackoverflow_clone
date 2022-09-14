import styled from "styled-components";
import Post from "../post/post";
import { Link } from "react-router-dom";


const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const BlueButton = styled(Link)`
  background-color:#0a95ff;
  color:  white;
  border:0;
  border-radius: 5px;
  padding: 12px 10px;
  text-decoration: none;
`;



const QuestionHead = styled.div`
  display: grid;
`;

const Posts = () => {
  return <main>
              <HeaderRow>
            <StyledHeader>All Questions</StyledHeader>
            <BlueButton to={'/ask'}>Ask&nbsp;Question</BlueButton>
            <QuestionHead><span>22,924,549 questions</span></QuestionHead>
            </HeaderRow>
            <Post/>
        </main>
};

export default Posts;
