export const headers = {
  Authorization:
    "Basic " +
    btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_API_KEY}`),
  "X-Instance-Name": import.meta.env.VITE_INSTANCENAME,
};
