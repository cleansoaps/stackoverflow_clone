import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Posts from "../../components/Posts/Posts";
import "./QuestionsPage.css";

const QuestionsPage = () => {
  return (
    <div className="QuestionsPage">
      <Header />
      <div className="QuestionsPage__container">
        <Nav />
        <Posts />
      </div>
    </div>
  );
};

export default QuestionsPage;
