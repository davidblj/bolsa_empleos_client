
const PROXY_CONFIG = [
  {
    "context": [
      "/company/listar",
      "/company/registrar",
      "/company/login",
      "/company/nuevaOferta",
      "/company/listarOfertas",
      "/company/getJobDetails",
      "/guest/getCompanyDetails",
      "/guest/getAvailableOffers",
      "/guest/getJobDetails",
      "/applicant/applicantRegistration",
      "/applicant/apply"
    ],
    "target": "http://localhost:3000",
    "secure": false

    // todo: set a general route
  }
];

module.exports = PROXY_CONFIG;
