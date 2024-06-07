import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import SupabaseProvider from "@/components/providers/supabase-provider";
import UserProvider from "@/components/providers/user-provider";
import ModalProvider from "@/components/providers/modal-provider";
import ToasterProvider from "@/components/providers/toaster-provider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Spotify Clone"
};

export const revalidate = 0;

export default async function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 const userSongs = await getSongsByUserId();

 return (
  <html lang="en">
   <body className={`${font.className} h-full overflow-hidden`}>
    <ToasterProvider />
    <SupabaseProvider>
     <UserProvider>
      <ModalProvider />
      <div className="flex flex-col h-full">
       <div className="flex flex-1 overflow-hidden p-2 gap-2">
        <Sidebar songs={userSongs} />
        <main className="flex-1 overflow-y-auto">{children}</main>
       </div>
       <Player />
      </div>
     </UserProvider>
    </SupabaseProvider>
   </body>
  </html>
 );
}
