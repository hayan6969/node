import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    title: "VIDEOS",
    img: "https://images.unsplash.com/photo-1738940251292-49709608c8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 1,
  },
  {
    title: "LIVECAM",
    img: "https://images.unsplash.com/photo-1739382121077-7a20fed13566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 2,
  },
  {
    title: "GAMES",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 3,
  },
  {
    title: "VIDEOS",
    img: "https://images.unsplash.com/photo-1738940251292-49709608c8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 1,
  },
  {
    title: "LIVECAM",
    img: "https://images.unsplash.com/photo-1739382121077-7a20fed13566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 2,
  },
  {
    title: "GAMES",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    id: 3,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

type ReviewCardProps = {
  img: string;
  title: string;
  name?: string;
  username?: string;
};

const ReviewCard = ({ img, title, name, username }: ReviewCardProps) => {
  return (
    <figure
  className={cn(
    "relative w-64 cursor-pointer  ",
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  )}
>
  <div className="w-full h-20 flex rounded-tl-[25px] rounded-br-[25px] justify-center items-center text-5xl unbordered-white text-opacity-70 relative overflow-hidden">
    <img
      src={img}
      alt="card_image"
      className="absolute w-full h-full top-0 left-0 object-cover rounded-tl-[5px] rounded-br-[5px]"
    />
    <span className="absolute inset-0 flex justify-center items-center text-center">
      {title}
    </span>
  </div>
</figure>

  );
};

export function Slider() {
  return (
    <div className="relative left-0 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#080808] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#080808] to-transparent"></div>
    </div>
  );
}
