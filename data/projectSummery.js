const ProjectSummeryData = [
  
  {
    title: "Energy Usage Monitoring System",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Provides Short circuit Protection to devices",
      "Sends in Phone and PC over IOT",
      "Enables device power controll over IOT",
    ],
    time: new Date(2020, 5, 23), // new Date(year,month,day)
    colaborator: [],
    tags: [
      {
        field: "IOT",
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
      "A PNP device uses SIM module to send data",
      "MPU6050 inside to detect every movement",
      "With GPS gets location and alarms to nearest hospital",
    ],
    time: new Date("2022-7-16"), // new Date(year,month,day)
    colaborator: [
    ],
    tags: [
      {
        field: "Health",
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
    title: "3D scanner",
    images: [],
    projectID: "",
    projectLink: "",
    description: [
      "Uses servo motor to get presise rotation while capturing image",
      "Can scan large object like motorBike, Furnitures",
      "Dedicated bluetooth app for robust controll",
      "Made for a renowned advertising company in BD"
    ],
    time: new Date("2021-3-16"), // new Date(year,month,day)
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
