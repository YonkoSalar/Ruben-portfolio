import React from "react";

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
  subcategories?: string[];
};

const companyEvents: CompanyEvent[] = [
    {
        "companyName": "Skråblikk AS 2022-2023",
        "years": [
          {
            "year": "2023",
            "customers": [
              { "customer": "Evelon", "title": "Employer Branding Film", "description": "" },
              { "customer": "CGI", "title": "SoMe films with Meteorological Institute, CGI's Talent Program, the new web filter solution for Osloskolen and senior Interviews for CGI", "description": "" },
              { "customer": "Daikin", "title": "Testimonial films and heat pump advertisements", "description": "" },
              { "customer": "Fornybar Norge", "title": "Films for the PTK 2023 conference", "description": "" },
              { "customer": "Experis", "title": "Film for booth at a conference", "description": "" },
              { "customer": "Metos", "title": "Recruitment films", "description": "" },
              { "customer": "Nortura", "title": "Recruitment films", "description": "" },
              { "customer": "Norisma", "title": "Various TV advertisements, SoMe advertisements for their products: Betakaroten Premium, Coffee Zero, Tea Zero, and Premium White", "description": "" },
              { "customer": "Workshop Bemanning", "title": "Recruitment films", "description": "" }
            ]
          }
        ]
      },
      {
        "companyName": "ITV Studios 2021-2022",
        "years": [
          {
            "year": "",
            "customers": [
              { "customer": "The Voice", "title": "Season 7", "description": "" }
            ]
          }
        ]
      },
      {
        "companyName": "Feelgood TV 2021",
        "years": [
          {
            "year": "",
            "customers": [
              { "customer": "Gjett hvem", "title": "Season 1", "description": "" }
            ]
          }
        ]
      },
      {
        "companyName": "Freelance and Various Assignments 2018-2021",
        "years": [
          {
            "year": "",
            "customers": [
              { "customer": "Hjem til jul", "title": "Production Assistant", "description": "" },
              { "customer": "Férdi Film", "title": "Internship", "description": "" },
              { "customer": "Student assistant på Høyskolen Kristiania - Institutt for film og TV", "title": "Promo Films, Technical Assistant, Editing Assistant", "description": "" },
              { "customer": "Gullruten 2021", "title": "Jury Member", "description": "" },
              { "customer": "NSKI", "title": "Short Film", "description": "" },
              { "customer": "Vevet", "title": "Music Video", "description": "" },
              { "customer": "Høyskolen Kristiania 2018", "title": "Fittefaen - Short Film (Bachelor), Glemt - Short Film, Sølvrygg - Short Film, Valkyrien - TV Series (School Assignment)", "description": "" },
              { "customer": "Folkehøyskole 2016-2017", "title": "Wayho - Music Video, Various Humor Sketches, Various Fiction Projects", "description": "" }
            ]
          }
        ]
      }
    ];

function Timeline() {
  return (
    <div>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="w-full max-w-3xl mx-auto">
            {/* <h1 className="text-3xl font-bold text-center text-slate-900 mb-8">
                Timeline
              </h1> */}
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
                          <time className="text-center block text-emerald-600 bg-emerald-100 rounded-full mb-6 w-20 mx-auto h-6 m-4">
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
                                <span className="block transform -skew-x-12">
                                  <span className="font-bold">
                                    {event.customer}
                                  </span>{" "}
                                  -{" "}
                                  <span className="italic">{event.title}</span>
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
