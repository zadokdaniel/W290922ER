import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";

const MyCards = () => {
  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />

      <div className="row">
        <Link to="create-card">Create a New Card</Link>
      </div>

      <div className="row">
        <p>no cards...</p>
        some cards
      </div>
    </>
  );
};

export default MyCards;
