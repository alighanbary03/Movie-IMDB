import Image from "next/image";
import { useState } from "react";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const myLoader = ({ src }: { src: string }) => {
  if (src === "https://image.tmdb.org/t/p/w780null") {
    return "/no_image.jpg";
  } else {
    return `https://image.tmdb.org/${src}`;
  }
};

const Hero = ({ imgUrl, title, text }: Props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-128">
      <div className="relative flex flex-col-reverse h-full max-w-7xl m-auto z-10 pb-12 text-center md:text-left">
        <div className="text-white max-w-2xl px-4">
          <h2 className="text-2xl md:text-5xl font-bold pb-8">{title}</h2>
          <p className="text-lg md:tex-xl">{text}</p>
        </div>
      </div>
      <Image
        priority
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={imgUrl}
        alt="hero-image"
        loader={myLoader}
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default Hero;
