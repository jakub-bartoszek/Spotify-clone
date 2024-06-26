"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";
import Image from "next/image";
import { IoMusicalNotes } from "react-icons/io5";
import PlayButton from "./play-button";

interface SongItemProps {
 data: Song;
 onClick: (id: string) => void;
}

const SongItem = ({ data, onClick }: SongItemProps) => {
 const imagePath = useLoadImage(data);

 return (
  <div
   onClick={() => onClick(data.id)}
   className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
  >
   <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
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
   <div className="flex flex-col items-start w-full pt-4 gap-y-1">
    <p className="font-semibold truncate w-full">{data.title}</p>
    <p className="text-neutral-400 text-sm pb-4 w-full truncate">
     {data.author}
    </p>
   </div>
   <div className="absolute bottom-24 right-5">
    <PlayButton />
   </div>
  </div>
 );
};

export default SongItem;
