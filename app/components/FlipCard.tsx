"use client";
import "./FlipCard.css";

interface FlipCardProps {
  imageSrc: string;
  name: string;
}

const FlipCard = ({ imageSrc, name }: FlipCardProps) => {
  return (
    <>
      <div className="flip-card justify-self-center">
        <div className="flip-card-inner">
          <div className="flip-card-front flex justify-center items-center">
            <img src={imageSrc} alt="Avatar" style={{ height: "50%" }} />
          </div>
          <div
            className="flip-card-back"
            style={{
              background: `linear-gradient(rgba(255, 0, 0, 0.900), rgba(0, 0, 0)),
    url(${imageSrc})`,
            }}
          >
            <h1 className="text-4xl">{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
