"use client";
import "./FlipCard.css";

interface FlipCardProps {
  imageSrc: string;
  name: string;
}

const FlipCard = ({ imageSrc, name }: FlipCardProps) => {
  return (
    <div className="flip-card justify-self-center p-2">
      <div className="flip-card-inner">
        {/* Front of the Card */}
        <div className="flip-card-front flex justify-between items-center gap-2">
          <img
            src={imageSrc}
            alt={name}
            className={` ${
              name == "Mitsubishi" ||
              name == "Honda" ||
              name == "Nissan" ||
              name == "Mazda" ||
              name == "MG" ||
              name == "LUK"
                ? "h-[60%]"
                : "w-[50%]"
            }  object-cover rounded-md shadow-md`}
          />
          <p className="font-bold text-textPrimary uppercase text-left w-fit">
            {name}
          </p>
        </div>

        {/* Back of the Card */}
        <div
          className="flip-card-back flex flex-col justify-center items-center text-center p-4"
          style={{
            background: `linear-gradient(135deg, rgba(255, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
            {name}
          </h1>
          <p className="text-lg text-gray-300">Premium Quality Auto Parts</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
