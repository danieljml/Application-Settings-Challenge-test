import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language =
  JSON.parse(localStorage.getItem("user"))?.language_code || "en";

i18n.use(initReactI18next).init({
  lng: language,
  resources: {
    sp: {
      translation: {
        subscriptionTitle: "Tipo de suscripción",
        subscriptionType: "Basica",
        creationDateTitle: "Fecha de creación",
        lastPaymentDateTitle: "Última fecha de pago",
        title: "Configuraciones de la aplicación",
        subtitle: "Detalles sobre la experiencia de usuario",
        labelEmailTitle: "Correo electrónico",
        labelTimezoneTitle: "Zona horaria",
        labelLanguageTitle: "Idioma",
        labelThemeTitle: "Tema",
        labelFeaturesTitle: "Características",
        btnUpdate: "Actualizar",
        viewUserProfile: "Ver perfil público",
        headerHomeTitle: "Inicio",
        headerServicesTitle: "Servicios",
        headerContactTitle: "Contacto",
        headerSettingsTitle: "Ajustes",
        rigthReserved: "Derechos reservados",
        certificatesInstructorGeneration:
          "CERTIFICADOS_GENERACIÓN_DE_INSTRUCTORES",
        instructorBackgroundTasks: "TAREAS_DE_ANTECEDENTES_DEL_INSTRUCTOR",
        enableCoursewareSearch: "HABILITAR_BÚSQUEDA_DE_CURSOS",
        enableCourseDiscovery: "HABILITAR_DESCUBRIMIENTO_DE_CURSOS",
        enableDashboardSearch: "HABILITAR_BÚSQUEDA_EN_EL_TABLERO",
        enableEdxnotes: "HABILITAR_EDXNOTES",
        welcomeMessage: "<p><span>Bienvenido</span> a la pagina Mr X</p>",
        updateSuccessMessage: "Actualización exitosa",
        invalidEmailMessage: "Email inválido",
        invalidTimezoneMessage: "Zona horaria no válida"
      }
    },
    en: {
      translation: {
        subscriptionTitle: "Subscription type",
        subscriptionType: "Basic",
        creationDateTitle: "Creation date",
        lastPaymentDateTitle: "Last payment date",
        title: "Application Settings",
        subtitle: "Details about the user experience",
        labelEmailTitle: "Email",
        labelTimezoneTitle: "Timezone",
        labelLanguageTitle: "Language",
        labelThemeTitle: "Theme",
        labelFeaturesTitle: "Features",
        btnUpdate: "Update",
        viewUserProfile: "View public profile",
        headerHomeTitle: "Home",
        headerServicesTitle: "Services",
        headerContactTitle: "Contact",
        headerSettingsTitle: "Settings",
        rigthReserved: "Rights reserved",
        certificatesInstructorGeneration: "CERTIFICATES_INSTRUCTOR_GENERATION",
        instructorBackgroundTasks: "INSTRUCTOR_BACKGROUND_TASKS",
        enableCoursewareSearch: "ENABLE_COURSEWARE_SEARCH",
        enableCourseDiscovery: "ENABLE_COURSE_DISCOVERY",
        enableDashboardSearch: "ENABLE_DASHBOARD_SEARCH",
        enableEdxnotes: "ENABLE_EDXNOTES",
        welcomeMessage: "<p><span>Welcome</span> to Mr X's website</p>",
        updateSuccessMessage: "Update success",
        invalidEmailMessage: "Invalid email",
        invalidTimezoneMessage: "Invalid timezone"
      }
    },
    fr: {
      translation: {
        subscriptionTitle: "Type d'abonnement",
        subscriptionType: "Basique",
        creationDateTitle: "Date de création",
        lastPaymentDateTitle: "Date du dernier paiement",
        title: "Paramètres de l'application",
        subtitle: "Détails sur l'expérience utilisateur",
        labelEmailTitle: "Email",
        labelTimezoneTitle: "Fuseau horaire",
        labelLanguageTitle: "Langue",
        labelThemeTitle: "Thème",
        labelFeaturesTitle: "Caractéristiques",
        btnUpdate: "Mise à jour",
        viewUserProfile: "voir le profil public",
        headerHomeTitle: "Accueil",
        headerServicesTitle: "Services",
        headerContactTitle: "Contact",
        headerSettingsTitle: "Paramètres",
        rigthReserved: "Droits réservés",
        certificatesInstructorGeneration:
          "GÉNÉRATIOND_'INSTRUCTEURS_CERTIFICATS",
        instructorBackgroundTasks: "TÂCHES_CONTEXTUELLES_DE_L'INSTRUCTEUR",
        enableCoursewareSearch: "ACTIVER_LA_RECHERCHE_DE_LOGICIELS_DE_COURS",
        enableCourseDiscovery: "ACTIVER_LA_DÉCOUVERTE_DE_COURS",
        enableDashboardSearch: "ACTIVER LA RECHERCHE DANS LE TABLEAU DE BORD",
        enableEdxnotes: "ACTIVER_LES_EDXNOTES",
        welcomeMessage: "<p><span>Bienvenue</span> sur le site de Mr X</p>",
        updateSuccessMessage: "Mise à jour réussie",
        invalidEmailMessage: "Email invalide",
        invalidTimezoneMessage: "Fuseau horaire invalide"
      }
    },
    ge: {
      translation: {
        subscriptionTitle: "Abonnementtyp",
        subscriptionType: "Basic",
        creationDateTitle: "Erstellungsdatum",
        lastPaymentDateTitle: "Letztes Zahlungsdatum",
        title: "Anwendungseinstellungen",
        subtitle: "Details zur Benutzererfahrung",
        labelEmailTitle: "Email",
        labelTimezoneTitle: "Zeitzone",
        labelLanguageTitle: "Sprache",
        labelThemeTitle: "Thema",
        labelFeaturesTitle: "Merkmale",
        btnUpdate: "Aktualisieren",
        viewUserProfile: "öffentliches Profil ansehen",
        headerHomeTitle: "Heim",
        headerServicesTitle: "Dienstleistungen",
        headerContactTitle: "Kontakt",
        headerSettingsTitle: "Einstellungen",
        rigthReserved: "Rechte vorbehalten",
        certificatesInstructorGeneration: "ZERTIFIKATE_LEHRERGENERATION",
        instructorBackgroundTasks: "HINTERGRUNDAUFGABEN_DES_LEHRERS",
        enableCoursewareSearch: "EKURSUNTERLAGENSUCHE_AKTIVIEREN",
        enableCourseDiscovery: "KURSENTDECKUNG_AKTIVIEREN",
        enableDashboardSearch: "DASHBOARD-SUCHE_AKTIVIEREN",
        enableEdxnotes: "EDXNOTES_AKTIVIEREN",
        welcomeMessage:
          "<p><span>Willkommen</span> auf der Website von Herrn X</p>",
        updateSuccessMessage: "Erfolg aktualisieren",
        invalidEmailMessage: "Ungültige E-Mail",
        invalidTimezoneMessage: "Ungültige Zeitzone"
      }
    },
    it: {
      translation: {
        subscriptionTitle: "Tipo di abbonamento",
        subscriptionType: "Di base",
        creationDateTitle: "Data di creazione",
        lastPaymentDateTitle: "Data dell'ultimo pagamento",
        title: "Impostazioni dell'applicazione",
        subtitle: "Dettagli sull'esperienza dell'utente",
        labelEmailTitle: "Email",
        labelTimezoneTitle: "Fuso orario",
        labelLanguageTitle: "Lingua",
        labelThemeTitle: "Tema",
        labelFeaturesTitle: "Caratteristiche",
        btnUpdate: "Aggiornamento",
        viewUserProfile: "visualizza il profilo pubblico",
        headerHomeTitle: "Inizio",
        headerServicesTitle: "Servizi",
        headerContactTitle: "Contatto",
        headerSettingsTitle: "Impostazioni",
        rigthReserved: "Diritti riservati",
        certificatesInstructorGeneration:
          "CERTIFICATI_GENERAZIONE_DI_ISTRUTTORI",
        instructorBackgroundTasks: "COMPITI_PRECEDENTI_DELL'ISTRUTTORE",
        enableCoursewareSearch: "ABILITA_RICERCA_CORSEWARE",
        enableCourseDiscovery: "ABILITA_LA_SCOPERTA_DEL_CORSO",
        enableDashboardSearch: "ABILITA_LA_RICERCA_DASHBOARD",
        enableEdxnotes: "ABILITA_NOTE_EDX",
        welcomeMessage: "<p><span>Benvenuti</span> nel sito web di Mr X</p>",
        updateSuccessMessage: "Aggiornamento riuscito",
        invalidEmailMessage: "E-mail non valido",
        invalidTimezoneMessage: "Fuso orario non valido"
      }
    },
    ch: {
      translation: {
        subscriptionTitle: "订阅类型",
        subscriptionType: "基本的",
        creationDateTitle: "创建日期",
        lastPaymentDateTitle: "最后付款日期",
        title: "應用程序設置",
        subtitle: "有關用戶體驗的詳細信息",
        labelEmailTitle: "電子郵件",
        labelTimezoneTitle: "时区",
        labelLanguageTitle: "语言",
        labelThemeTitle: "主题",
        labelFeaturesTitle: "特征",
        btnUpdate: "更新",
        viewUserProfile: "查看公开资料",
        headerHomeTitle: "家",
        headerServicesTitle: "服务",
        headerContactTitle: "接触",
        headerSettingsTitle: "设置",
        rigthReserved: "保留权利",
        certificatesInstructorGeneration: "证书指导一代",
        instructorBackgroundTasks: "讲师背景任务",
        enableCoursewareSearch: "启用课件搜索",
        enableCourseDiscovery: "启用课程发现",
        enableDashboardSearch: "启用仪表板搜索",
        enableEdxnotes: "E启用_EDXNOTES",
        welcomeMessage: "<p><span>欢迎来到</span> X 先生的网站</p>",
        updateSuccessMessage: "更新成功",
        invalidEmailMessage: "不合规电邮",
        invalidTimezoneMessage: "时区无效"
      }
    }
  }
});

export default i18n;
