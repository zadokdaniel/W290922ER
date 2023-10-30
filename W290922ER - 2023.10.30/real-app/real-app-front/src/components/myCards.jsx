import { Link } from "react-router-dom";

import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />

      <div className="row">
        <Link to="/create-card">Create a New Card</Link>
      </div>

      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => <Card card={card} key={card._id} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
