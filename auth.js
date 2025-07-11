// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔥 Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiWN76pTmswQetee7CGdNc6Q845Hrdg8A",
  authDomain: "happi12-sites.firebaseapp.com",
  projectId: "happi12-sites",
  storageBucket: "happi12-sites.firebasestorage.app",
  messagingSenderId: "269132427609",
  appId: "1:269132427609:web:049c9b03f8b4224a37dc48"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔄 Sprawdź stan zalogowania
onAuthStateChanged(auth, (user) => {
  const kontoLink = document.getElementById("kontoLink");

  if (user) {
    kontoLink.textContent = user.displayName || "Konto";
    kontoLink.href = "/konto/";
  } else {
    kontoLink.textContent = "Zaloguj się";
    kontoLink.href = "/login/";

    // ⛔ Przekierowanie TYLKO na stronach chronionych
    const sciezka = window.location.pathname;
    if (
      sciezka.includes("/konto.html") ||
      sciezka.includes("/konto/") ||
      sciezka.includes("/post.html")
    ) {
      window.location.href = "/login/";
    }
  }
});
