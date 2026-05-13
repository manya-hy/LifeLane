import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { translations } from "../translations";

type LanguageType =
  | "English"
  | "Kannada"
  | "Hindi";

type ContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: typeof translations.English;
};

const LanguageContext =
  createContext<ContextType>({
    language: "English",
    setLanguage: () => {},
    t: translations.English,
  });

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] =
    useState<LanguageType>("English");

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () =>
  useContext(LanguageContext);