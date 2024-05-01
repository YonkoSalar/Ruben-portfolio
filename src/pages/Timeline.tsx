import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CompanyEvent = {
  companyName: string;
  years: {
    year: string;
    customers: TimelineEvent[];
  }[];
};

type TimelineEvent = {
  customer: string;
  title: string;
  description: string;
  url: string;
  subcategories?: string[];
};

const companyEvents: CompanyEvent[] = [
  {
    companyName: "Warner Music Norway",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "Yasir Moa", title: "Kron", description: "Promotional content for EP release. Worked as editor, director and photography.", url: "https://www.instagram.com/reel/C2LQ7cMqvOY/?igsh=MWZubDVqMGY2Mm9teg==" },
        ],
      },
    ],
  },
  {
    companyName: "ITV Studios Norge",
    years: [
      {
        year: "2024",
        customers: [
          { customer: "The Voice", title: "Season 9", description: "Editor for Blind auditions, Duel and Knockouts. ",  url: "https://www.youtube.com/watch?v=rZp_xhay120" },
        ],
      },
    ],
  },
  {
    companyName: "Odeon Kino",
    years: [
      {
        year: "2023",
        customers: [
          { customer: "Odeon Kino", title: "Mission Impossible 7 Premiere Promotion", description: "Editor for a social media promotion.",  url: "https://www.instagram.com/reel/CupD1y1g6GQ/?igsh=cHVmY2U5N2MxMm9o" },
        ],
      },
    ],
  },
  {
    companyName: "Skråblikk AS",
    years: [
      {
        year: "2023",
        customers: [
          {
            customer: "Evelon",
            title: "Employer Branding Film",
            description: "Editor as well as on-set work.",
            url: ""
          },
          {
            customer: "CGI",
            title:
              "Social Media Advertisements",
            description: "Edited videos including Meteorological Institute, CGI's Talent Program, Osloskolen and senior Interviews for CGI.",
            url: ""
          },
          {
            customer: "Daikin",
            title: "Testimonial Films and Heat Pump Advertisements",
            description: "Editor and on-set work.",
            url: "https://www.facebook.com/watch/?v=3039536746350029"
          },
          {
            customer: "Fornybar Norge",
            title: "Films for the PTK 2023 Conference",
            description: "Editor and on-set work.",
            url: ""
          },
          {
            customer: "Experis",
            title: "Advertisment for Stand at a Conferance",
            description: "Editor.",
            url: ""
          },
          { customer: "Metos", title: "Recruitment Films", description: "Editor.", url: "" },
          { customer: "Nortura", title: "Recruitment Films", description: "Editor.", url: "" },
          {
            customer: "Norisma",
            title:
              "TV Advertisements and Social Media Advertisements",
            description: "Editor and on-set work for their products: Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.",
            url: "https://premiumwhite.no/bruksanvisning"
          },
          {
            customer: "Workshop Bemanning",
            title: "Recruitment films",
            description: "Editor.",
            url: ""
          },
        ],
      },
      {
        year: "2022",
        customers: [
          {
            customer: "CGI",
            title: "Annual Tour 2023 Webinar and Seminar",
            description: "Edited talking head presentation with the company's Annual report for the year. As well as segments in between slides.",
            url: ""
          },
          {
            customer: "Daikin",
            title:
              "Heat Pump Advertisements",
            description: "Editor and on-set work for a studio shoot with Otto Robsahm and Mads Østberg, and several other Advertisements with Mads Østberg and Stig André Berge.",
            url: "https://www.facebook.com/DaikinNorway/videos/595452595497698"
          },
          {
            customer: "ManpowerGroup",
            title:
              "Social Media Advertisements and Event Films",
            description: "Editor for Manpower, Experis, Talent Solution, and Jefferson Wells.",
              url: "https://www.facebook.com/watch/?v=938925483937305"
          },
          {
            customer: "Elektroskandia Nordic Fiber",
            title: "Social Media Advertisements",
            description: "Editor.",
              url: ""
          },
          {
            customer: "Elkem Salten",
            title: "Advertisments",
            description: "Editor.",
              url: ""
          },
          {
            customer: "Møller Logistikk",
            title: "Recruitment films",
            description: "Editor and on-set work.",
              url: ""
          },
          {
            customer: "Norisma",
            title:
              "TV Advertisements and Social Media Advertisements",
            description: "Editor and on-set work for their products: Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.",
            url: ""
          },
          {
            customer: "Postnord Strålfors",
            title: "Multiple Films for a Conference",
            description: "Editor and on-set work.",
              url: ""
          },
          {
            customer: "Skynova",
            title: "Stock Footage Advertisement with Voice Over",
            description: "Editor",
            url: ""
          },
          {
            customer: "Svea",
            title: "Ad-campaign with Magnus Devold",
            description: "Editor and on-set work.",
              url: "https://www.youtube.com/watch?v=8HU6CRSDlnU&feature=youtu.be"
          },
        ],
      },
    ],
  },
  {
    companyName: "ITV Studios Norge",
    years: [
      {
        year: "2021-2022",
        customers: [
          { customer: "The Voice", title: "Season 7", description: "Editor for Blind auditions, Duel and Knockouts. ", url: "https://youtu.be/X3ruKFDmChY?si=b4eULSUZihkOyBEl" },
        ],
      },
    ],
  },
  {
    companyName: "Feelgood TV",
    years: [
      {
        year: "2021",
        customers: [
          { customer: "Gjett hvem", title: "Season 1", description: "Rough cut editor.", url: "https://www.youtube.com/watch?v=R3MyspIdVro&feature=youtu.be" },
        ],
      },
    ],
  },
  {
    companyName: "Freelance and Various Assignments",
    years: [
      {
        year: "2016-2021",
        customers: [
          {
            customer: "Hjem til jul",
            title: "Production Assistant",
            description: "",
            url: "https://www.youtube.com/watch?v=MB-onpdR56E&feature=youtu.be"
          },
          { customer: "Férdi Film", title: "Internship", description: "Editor and on-set work.", url: "" },
          {
            customer:
              "Høyskolen Kristiania",
            title: "Student assistant",
            description: "Promo Films, Technical Assistant, Editing Assistant.",
            url: ""
          },
          { customer: "Gullruten 2021", title: " Award for Best TV-Entertainment", description: "Jury Member.", url: "" },
          { customer: "NSKI", title: "Short Film", description: "Editor.", url: "" },
          { customer: "Vevet", title: "Music Video", description: "Producer, director and editor.", url: ""},
          {
            customer: "Høyskolen Kristiania 2018",
            title:
              "School Projects",
            description: "Fittefaen - Short Film (Bachelor), Glemt - Short Film, Sølvrygg - Short Film, Valkyrien - TV Series (School Assignment).",
            url: ""
          },
          {
            customer: "Folkehøyskole 2016-2017",
            title:
              "School Projects",
            description: "Wayho - Music Video, Various Humor Sketches, Various Fiction Projects",
            url: ""
          },
        ],
      },
    ],
  },
];

function Timeline() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className=" pb-8 mb-4 text-3xl font-extrabold underline decoration-purple-800 leading-none tracking-tight md:text-3xl lg:text-6xl text-black">
            Portfolio
            </h1>
            <div className="relative">
              {/* <!-- Timeline Line --> */}
              <div className="absolute left-2 sm:left-0 w-px h-full bg-slate-300 sm:ml-[6.5rem]"></div>
              <div className="flex flex-col justify-center">
                {companyEvents.map((companyEvent, companyIndex) => (
                  <div key={companyIndex} className="py-4">
                    <div className="text-center font-caveat pb-4 font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      {companyEvent.companyName}
                    </div>
                    {companyEvent.years.map((yearEvent, yearIndex) => (
                      <div key={yearIndex}>
                        {yearEvent.year && (
                          <time className="text-center block px-4 text-emerald-600 bg-emerald-100 rounded-full w-28 mx-auto my-4">
                            {yearEvent.year}
                          </time>
                        )}

                        <div className="-my-6">
                          {yearEvent.customers.map((event, index) => (
                            <div
                              key={index}
                              className="relative pl-8 sm:pl-32 py-6 group"
                            >
                              {/* <!-- Timeline Marker --> */}
                              <div className="absolute left-2 sm:left-0 w-2 h-2 bg-indigo-600 border-4 box-content border-slate-50 rounded-full sm:ml-[6.5rem] -translate-x-1/2 translate-y-1.5"></div>
                              {/* <!-- Timeline Content --> */}
                              <div className="text-xl text-left text-slate-900">
                                <span className="block transform">
                                  <span className="-skew-x-12 italic font-bold">
                                    {event.customer} - 
                                  </span>{" "}
                                  {event.url ? (
                                    <a href={event.url} className="link-with-icon">
                                      <span className="px-1">{event.title}</span>
                                      <FontAwesomeIcon icon={faLink} color="black" size="xs" />
                                    </a>
                                  ) : (
                                    <span className="">{event.title}</span>
                                  )}
                                </span>
                              </div>
                              <div className="text-slate-500 text-left">
                                {event.description}
                              </div>

                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Timeline;
