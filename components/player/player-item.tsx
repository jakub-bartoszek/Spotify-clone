"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";
import Image from "next/image";
import { IoMusicalNotes } from "react-icons/io5";

interface PlayerItemProps {
 data: Song;
 onClick?: (id: string) => void;
}

const PlayerItem = ({ data, onClick }: PlayerItemProps) => {
 const imagePath = useLoadImage(data);

 const handleClick = () => {
  if (onClick) {
   return onClick(data.id);
  }
 };

 return (
  <div
   onClick={handleClick}
   className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full rounded-md"
  >
   <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
    {imagePath ? (
     <Image
      className="object-cover"
      src={imagePath || "/images/note.png"}
      fill
      alt="Image"
     />
    ) : (
     <div className="bg-neutral-400/10 h-full flex items-center justify-center text-neutral-500">
      <IoMusicalNotes size={75} />
     </div>
    )}
   </div>
   <div className="hidden md:flex flex-col gap-y-1 overflow-hidden">
    <p className="text-white truncate">{data.title}</p>
    <p className="text-neutral-400 text-sm truncate">{data.author}</p>
   </div>
  </div>
 );
};

export default PlayerItem;
