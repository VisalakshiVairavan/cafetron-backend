export const seedData = {
  cafe: [
    {
      id: "946279cb-2423-431d-8915-da51506e64f5",
      name: "Starbucks",
      description: "The new starbucks cafe",

      location: "singapore",
    },
    {
      id: "30f255d7-3d74-4c6f-91f9-4c0ba46186bd",
      name: "Hot and cold",
      description: "All drinks in one place",

      location: "london",
    },
  ],
  employee: [
    {
      id: "UIIK9G6D2",
      name: "Lim Sim",
      email_address: "lim.sim@yahoo.com",
      phone_number: "98763452",
      gender: "Female",
    },
    {
      id: "UIQ06G6DJ",
      name: "Muhammund Azim",
      email_address: "Muhammund.azim@hotmail.com",
      phone_number: "88263480",
      gender: "Male",
    },
    {
      id: "UILR3G6DK",
      name: "Nickle Sam",
      email_address: "Nickle.Sam@gmail.com",
      phone_number: "92763437",
      gender: "Male",
    },
    {
      id: "UILK5G6DW",
      name: "Priya Sankar",
      email_address: "priya.sankar@ibs2.com",
      phone_number: "82753410",
      gender: "Female",
    },
    {
      id: "UIZK526KB",
      name: "Vincent Praveen",
      email_address: "Vincent.praveen@ibibo.com",
      phone_number: "91733410",
      gender: "Male",
    },
  ],
  employeeCafe: [
    {
      employee_id: "UIIK9G6D2",
      cafe_id: "946279cb-2423-431d-8915-da51506e64f5",
      start_date: "2021-09-19",
    },
    {
      employee_id: "UIQ06G6DJ",
      cafe_id: "30f255d7-3d74-4c6f-91f9-4c0ba46186bd",
      start_date: "2022-08-29",
    },
    {
      employee_id: "UILR3G6DK",
      cafe_id: "946279cb-2423-431d-8915-da51506e64f5",
      start_date: "2023-02-15",
    },
    {
      employee_id: "UILK5G6DW",
      cafe_id: "946279cb-2423-431d-8915-da51506e64f5",
      start_date: "2023-05-14",
    },
  ],
};
