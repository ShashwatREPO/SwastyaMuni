export default function getGoogleUrl() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URL,
    client_id: import.meta.env.VITE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" ")
  };

  const qs = new URLSearchParams(options);

  console.log(`${rootUrl}?${qs.toString()}`);

  return `${rootUrl}?${qs.toString()}`;
}
