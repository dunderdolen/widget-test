const oktaAuthConfig = {
  issuer: "https://livehallbergmichael.okta.com/",
  clientId: "0oakochj72ODRMgbk5d6",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  logo: "//logo.clearbit.com/okta.com",
  language: "en",
  i18n: {
    en: {
      "primaryauth.title": "Enter your credentials to login",
      "primaryauth.submit": "Let's go! :)",
      "primaryauth.username.placeholder": "Your lovely username",
      "primaryauth.password.placeholder": "Your ultra secure password",
    },
  },
  features: {
    //registration: true,
    rememberMe: true,
    //multiOptionalFactorEnroll: true,
    //selfServiceUnlock: true,
    //smsRecovery: true,
    //callRecovery: true,
    router: true,
  },
  baseUrl: "https://livehallbergmichael.okta.com",
  clientId: "0oakochj72ODRMgbk5d6",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
