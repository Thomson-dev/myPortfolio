import React from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Ozitech",
    period: "2023",
    description:
      "Contributed to the development of an interactive cryptocurrency investment calculator, delivering a seamless user experience.",
    highlights: [
      "Designed and implemented an intuitive user interface with React and Ant Design.",
      "Built real-time calculations for cryptocurrency returns using JavaScript.",
      "Ensured cross-platform responsiveness for mobile and desktop devices.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Fastgak",
    period: "2022 - 2023",
    description:
      "Developed a feature-rich mobile application leveraging modern JavaScript technologies.",
    highlights: [
      "Integrated Google Sign-In for authentication and enhanced security with bcrypt.js.",
      "Implemented Stripe for secure payment processing and real-time transactions.",
      "Managed application state using Redux Toolkit for scalability and performance.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "E-Blog (Personal Project)",
    period: "2022",
    description:
      "Created a blogging platform with robust backend API and modern frontend design.",
    highlights: [
      "Developed RESTful APIs for user authentication and post management.",
      "Implemented scalable authentication mechanisms using JSON Web Tokens.",
      "Built and deployed the application with Next.js and Vercel for optimal performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="mt-10 px-2 sm:px-4 md:px-8">
      <div className="border-l-4 border-[#8750F7] pl-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#8750F7]">
          Work Experiences
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black/10 rounded-2xl shadow-md p-5 md:p-8 transition-all hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-[#8750F7]">
                {experience.title}
              </h2>
              <h3 className="text-base font-medium text-gray-700 dark:text-gray-300">
                {experience.company} <span className="font-normal">({experience.period})</span>
              </h3>
            </div>
            <p className="mt-3 text-left text-base md:text-lg leading-relaxed text-[#717171]">
              {experience.description}
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              {experience.highlights.map((highlight, i) => (
                <li
                  className="text-sm md:text-base text-left leading-relaxed text-[#717171] pl-1"
                  key={i}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;