import Image from "next/image";
import { useState } from "react";

type Props = {
  imgUrl: string;
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
const Thumb = ({ imgUrl }: Props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      layout="fill"
      objectFit="cover"
      src={imgUrl}
      alt="thumb"
      loader={myLoader}
      className={cn(
        "duration-700 ease-in-out rounded-lg",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default Thumb;
