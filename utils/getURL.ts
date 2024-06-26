export const getURL = () => {
 let url =
  process.env.NODE_ENV === "development"
   ? "http://localhost:3000"
   : process.env.NEXT_PRODUCTION_URL ??
     process.env.NEXT_PUBLIC_SITE_URL ??
     process.env.NEXT_PUBLIC_VERCEL_URL;

 url = url?.includes("http") ? url : `https://${url}`;
 url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

 return url;
};
