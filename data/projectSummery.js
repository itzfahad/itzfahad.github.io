const ProjectSummeryData = [
  
  {
    title: "Smart conference table",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Special conference table equiped with various kinds of interactive motor function along with batch controll system",
      "Manufractured 15pcs for a reputed education institute of bogra"
    ],
    time: new Date(2021, 2, 23), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "AVR",
        icon: "",
      },
      {
        field: "AutoCAD",
        icon: "",
      },
    ],
  },
  {
    title: "Biometric scequrity system",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Uses R307 fingerprint sensor",
      "Can store activity of almost 30 days",
      "Wifi connectivity enhances user access controll",
    ],
    time: new Date("2022-3-16"), // new Date(year,month,day)
    colaborator: [
    ],
    tags: [
      {
        field: "R307",
        icon: <i className="icofont-finger-print"></i>,
      },
    ],
  },
  {
    title: "Vehicle accident detector",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Module which uses SIM 800L to send GPRS data",
      "MPU6050 inside to detect every movement",
      "Gets GPS data from neo6 and alarms to nearest hospital",
    ],
    time: new Date("2022-7-16"), // new Date(year,month,day)
    colaborator: [
    ],
    tags: [
      {
        field: "Safety",
        icon: <i className="icofont-medical-sign"></i>,
      },
    ],
  },
  {
    title: "Grid line trip detection module",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Connects with PLC of controll room",
      "Tracks location of field agents",
      "Alarms nearest agent to solve the issue",
      "Prototyped for 'naugaon polli' biddut in BD"
    ],
    time: new Date("2022-3-16"), // new Date(year,month,day)
    colaborator: [
    ],
    tags: [
      {
        field: "PLC",
        icon: '',
      },
      {
        field: "Grid",
        icon: '',
      },
    ],
  },{
    title: "IOT weather station",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      " A self sustained modular weather station, logs weather information like temparature, humidity and air valocity.",
      "Stores data to google server",
      "gives user real time access to weather data"
    ],
    time: new Date("2022-1-16"), // new Date(year,month,day)
    colaborator: [
    ],
    tags: [
      {
        field: "3D Technology",
        icon: '',
      },
    ],
  },{
    title: "Energy Meter with SMS notification system",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Monitors Usages in realtime",
      "Shows data in Display",
      "Sends monthly usages records to Users Phone",
    ],
    time: new Date("2018-1-16"), // new Date(year,month,day)
    colaborator: [
      {
        name: "Takiuddin Ahmed",
        task: "Networking",
        profile: "https://avatars.githubusercontent.com/u/25157202?v=4",
      },
    ],
    tags: [
      {
        field: "GSM",
        icon: <i className="icofont-ui-message"></i>,
      },
      {
        field: "AVR",
        icon: <i className="icofont-micro-chip"></i>,
      },
    ],
  },
];

export default ProjectSummeryData;
