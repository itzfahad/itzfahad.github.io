const ProjectSummeryData = [
  {
    title: "Pipe impact testing machine",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "ESP32 based pressure logger.",
      "Can record 9000 pressure values per second.",
      "Recors hammers falling velocity"
    ],
    time: new Date(2022, 8, 23), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "ESP32",
        icon: <i className="icofont-micro-chip"></i>,
      },
    ],
  },
  {
    title: "Road temperature analyzer",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Built for recoding temperature undernethe road",
      "Records temperature data with interal of 30 minutes",
      "Can run more then 20 days on a single charge",
    ],
    time: new Date("2022-9-16"), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "ESP8266",
        icon: <i className="icofont-micro-chip"></i>,
      },
    ],
  },
  {
    title: "Food preservation system analyzer",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Tests foods freshness and lastness by applying pressure gadient and temerature gradient.",
      "Records moisture and temperature data."
    ],
    time: new Date("2019-7-16"), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "Food Safety",
        icon: <i className="icofont-medical-sign"></i>,
      },
    ],
  },
  {
    title: "Boom barrier",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Used for realtime vehical tracking project under UGC.",
      "Uses Machine Learning (YOLOv5) to detect car number plate.",
      "Whole system is powered by ESP32."
    ],
    time: new Date("2021-3-16"), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "ML",
        icon: "",
      },
      {
        field: "ESP32",
        icon: <i className="icofont-micro-chip"></i>,
      },
    ],
  },
];

export default ProjectSummeryData;
