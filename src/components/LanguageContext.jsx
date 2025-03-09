import { createContext, useState, useEffect } from "react";
import translations from "./translations";

// إنشاء السياق
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  // تحديث localStorage واتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    localStorage.setItem("lang", language);
    document.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
