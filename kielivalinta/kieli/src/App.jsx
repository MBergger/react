import React, { useReducer, useContext, createContext } from "react";

const translations = {
  fi: {
    title: "Tervetuloa",
    label: "Valitse kieli:",
    current: "Nykyinen kieli:"
  },
  en: {
    title: "Welcome",
    label: "Select language:",
    current: "Current language:"
  },
  sv: {
    title: "Välkommen",
    label: "Välj språk:",
    current: "Aktuellt språk:"
  }
};


function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { lang: action.payload };
    default:
      return state;
  }
}


const LanguageContext = createContext();


function LanguageSelector() {
  const { state, dispatch } = useContext(LanguageContext);
  return (
    <select
      value={state.lang}
      onChange={(e) =>
        dispatch({ type: "CHANGE_LANGUAGE", payload: e.target.value })
      }
    >
      <option value="fi">Suomi</option>
      <option value="sv">Svenska</option>
      <option value="en">English</option>
    </select>
  );
}


export default function App() {
  const [state, dispatch] = useReducer(reducer, { lang: "fi" });
  const t = translations[state.lang];

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>{t.title}</h1>
        <label style={{ fontSize: "2rem" }}>
          {t.label}
          <br />
          <LanguageSelector />
        </label>
        <p style={{ fontSize: "1.5rem" }}>
          {t.current} <b>{state.lang}</b>
        </p>
      </div>
    </LanguageContext.Provider>
  );
}

