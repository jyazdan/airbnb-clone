import Image from "next/dist/client/image";
import AirbnbImage from "../images/airbnb.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
       {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        className="brightness-50"
        src={AirbnbImage}
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/3 w-full text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
          Let your curiosity do the booking
        </h1>
        
        <button className="text-purple-500 bg-white px-6 py-3 shadow-md rounded-full font-bold my-7 hover:shadow-xl active:scale-90 transition duration-150">
         {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
