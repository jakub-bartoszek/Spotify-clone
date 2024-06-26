"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "../media-item";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface LibraryProps {
 songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
 const authModal = useAuthModal();
 const uploadModal = useUploadModal();
 const subscribeModal = useSubscribeModal();

 const { user, subscription } = useUser();

 const onPlay = useOnPlay(songs);

 const onClick = () => {
  if (!user) {
   return authModal.onOpen();
  }

  if (!subscription) {
   return subscribeModal.onOpen();
  }

  return uploadModal.onOpen();
 };

 return (
  <div className="flex flex-col h-full overflow-hidden">
   <div className="flex items-center justify-between px-5 pt-4">
    <div className="inline-flex items-center gap-x-2">
     <TbPlaylist
      className="text-neutral-400"
      size={26}
     />
     <p className="text-neutral-400 font-medium">Your Library</p>
    </div>
    <AiOutlinePlus
     onClick={onClick}
     size={20}
     className="text-neutral-400 cursor-pointer hover:text-white transition"
    />
   </div>
   <div className="flex flex-col gap-y-2 mt-4 px-3 h-full overflow-hidden overflow-y-auto">
    {songs.map((item) => (
     <MediaItem
      onClick={(id: string) => {
       onPlay(id);
      }}
      key={item.id}
      data={item}
     />
    ))}
   </div>
  </div>
 );
};

export default Library;
