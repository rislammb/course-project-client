import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    EN: {
      translation: {
        home: "Home",
        login: "Login",
        register: "Register",
        welcome: "Welcome",
        logout: "Logout",
        email: "Email address",
        password: "Password",
        questions: "Questions",
        response: "Response",
      },
    },
    BN: {
      translation: {
        home: "বাড়ি",
        login: "লগইন",
        register: "নিবন্ধন",
        welcome: "স্বাগতম",
        logout: "লগআউট",
        email: "ইমেইল ঠিকানা",
        password: "পাসওয়ার্ড",
        questions: "প্রশ্ন",
        response: "প্রতিক্রিয়া",
      },
    },
    ES: {
      translation: {
        home: "Hogar",
        login: "Acceso",
        register: "Registro",
        welcome: "Bienvenida",
        logout: "Cerrar sesión",
        email: "Dirección de correo electrónico",
        password: "Contraseña",
        questions: "Preguntas",
        response: "Respuesta",
      },
    },
  },
});
