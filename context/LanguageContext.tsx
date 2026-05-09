import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";

type LanguageType =
  "English" |
  "Kannada" |
  "Hindi";

interface LanguageContextType {

  language: LanguageType;

  setLanguage:
    (lang: LanguageType) => void;
}

const LanguageContext =
  createContext<LanguageContextType>({
    language: "English",
    setLanguage: () => {},
  });

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [language, setLanguage] =
    useState<LanguageType>("English");

  return (

    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>

  );
};

export const useLanguage = () =>
  useContext(LanguageContext);