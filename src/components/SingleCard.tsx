import "./SingleCard.css";

interface Card {
  id: number;
  src: string;
  matched: boolean;
}

interface SingleCardProps {
  card: Card;
  handlechoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = ({
  card,
  handlechoice,
  flipped,
  disabled,
}: SingleCardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handlechoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="cover"
          src="/img/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
