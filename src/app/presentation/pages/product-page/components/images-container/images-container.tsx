import Image from "next/image";
import { useState } from "react";
import { inlineFn } from "@/app/presentation/helpers";
type Props = {
  images: string[];
  title: string;
};

export const ImagesContainer = ({ images, title }: Props) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex flex-col justify-center min-[850px]:w-1/2">
      <div className="bg-gray-100 h-72 flex items-center p-3 justify-center">
        <Image
          src={images[activeImg]}
          alt={title}
          width={450}
          height={256}
          className="object-contain h-64"
          onError={(e) => (e.currentTarget.src = "/assets/fall-back-image.png")}
        />
      </div>
      <div className="flex gap-1 min-[850px]:gap-x-2 min-[850px]:gap-y-4 mt-2">
        {images.slice(0, 4).map((img, index) => (
          <div
            key={img}
            className={`bg-gray-100 h-28 flex p-1 min-[850px]:p-2 items-center hover:outline hover:outline-2 hover:outline-primary-main cursor-pointer ${
              activeImg === index
                ? "outline outline-2 outline-primary-main"
                : ""
            }`}
            onClick={inlineFn(setActiveImg, index)}
          >
            <Image
              src={img}
              alt={title}
              width={112}
              height={96}
              className="object-contain h-full"
              onError={(e) =>
                (e.currentTarget.src = "/assets/fall-back-image.png")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
