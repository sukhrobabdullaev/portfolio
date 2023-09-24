import { useState } from "react";

export const ImageWithDescription = ({
  imageUrl,
  description,
  preview,
  title,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <h4 className="text-left fade-opacity md:my-6 mb-6 font-medium md:text-[25px] title fade-opacityLeft">
        {title}
      </h4>
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imageUrl}
          alt={imageUrl}
          loading="lazy"
          className="w-[600px] fade-opacityNext md:w-full rounded"
        />
        <div
          className={`${
            hovered
              ? "opacity-100 translate-y-0 h-1/2"
              : "opacity-0 translate-y-4"
          } transition-all duration-300 ease-in-out absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)]  p-2 rounded-t fade-opacityNext`}
        >
          <div>
            <p>{description}</p>
            <a href={preview}>Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};
