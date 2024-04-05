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
          { customer: "The Voice", title: "Season 9", description: "Editor for Blind auditions, Duel and Knockouts.",  url: "https://www.youtube.com/watch?v=rZp_xhay120" },
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
          { customer: "Odeon Kino", title: "SoMe Premiere Promo", description: "",  url: "https://www.instagram.com/reel/CupD1y1g6GQ/?igsh=cHVmY2U5N2MxMm9o" },
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
            description: "",
            url: ""
          },
          {
            customer: "CGI",
            title:
              "Social Media Advertisements",
            description: "Working with Meteorological Institute, CGI's Talent Program, the new web filter solution for Osloskolen and senior Interviews for CGI.",
            url: ""
          },
          {
            customer: "Daikin",
            title: "Testimonial Films and Heat Pump Advertisements",
            description: "",
            url: ""
          },
          {
            customer: "Fornybar Norge",
            title: "Films for the PTK 2023 Conference",
            description: "",
            url: ""
          },
          {
            customer: "Experis",
            title: "Advertisment for Stand at a Conferance",
            description: "",
            url: ""
          },
          { customer: "Metos", title: "Recruitment Films", description: "", url: "" },
          { customer: "Nortura", title: "Recruitment Films", description: "", url: "" },
          {
            customer: "Norisma",
            title:
              "TV Advertisements and Social Media Advertisements",
            description: "For their products: Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.",
            url: ""
          },
          {
            customer: "Workshop Bemanning",
            title: "Recruitment films",
            description: "",
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
            description: "Including a studio shoot with Otto Robsahm and Mads Østberg, and several other Advertisements with Mads Østberg and Stig André Berge.",
            url: ""
          },
          {
            customer: "ManpowerGroup",
            title:
              "Social Media Advertisements and Event Films",
            description: "Including Manpower, Experis, Talent Solution, and Jefferson Wells.",
              url: ""
          },
          {
            customer: "Elektroskandia Nordic Fiber",
            title: "Social Media Advertisements",
            description: "",
              url: ""
          },
          {
            customer: "Elkem Salten",
            title: "Advertisment",
            description: "",
              url: ""
          },
          {
            customer: "Møller Logistikk",
            title: "Recruitment films",
            description: "",
              url: ""
          },
          {
            customer: "Norisma",
            title:
              "TV Advertisements and Social Media Advertisements",
            description: "For their products: Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White.",
            url: ""
          },
          {
            customer: "Postnord Strålfors",
            title: "Multiple Films for a Conference",
            description: "",
              url: ""
          },
          {
            customer: "Skynova",
            title: " Advertisments ",
            description: "Stock footage with Voice Over.",
            url: ""
          },
          {
            customer: "Svea",
            title: "Ad-campaign",
            description: "Documentary style video with Magnus Devold.",
              url: ""
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
          { customer: "Gjett hvem", title: "Season 1", description: "", url: "" },
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
            url: ""
          },
          { customer: "Férdi Film", title: "Internship", description: "", url: "" },
          {
            customer:
              "Student assistant på Høyskolen Kristiania - Institutt for film og TV",
            title: "Promo Films, Technical Assistant, Editing Assistant",
            description: "",
            url: ""
          },
          { customer: "Gullruten 2021", title: "Jury Member", description: "", url: "" },
          { customer: "NSKI", title: "Short Film", description: "", url: "" },
          { customer: "Vevet", title: "Music Video", description: "", url: ""},
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
