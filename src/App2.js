import React from "react";
import { Science, Login } from "pages";
import { CookiesProvider, useCookies } from "react-cookie";

function App2() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }

  return (
    <CookiesProvider>
      <div>
        {cookies.user ? (
          <Science user={cookies.user} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </CookiesProvider>
  );
}

export default App2;