// import React from "react";
// import { motion } from "framer-motion";
// const experiences = [
//   {
//     id: 1,
//     period: "2022 - 2023",
//     title: "Frontend developer",
//     company: "Ozitech ",
//   },
//   {
//     id: 2,
//     period: "2021 - 2022",
//     title: "Full Stack Web Developer",
//     company: "Parsons",
//   },
// ];

// const education = [
//   {
//     id: 1,
//     period: "2020 - 2023",
//     course: "BSc Computer Science",
//     institution: "University Of Lagos",
//   },
//   {
//     id: 2,
//     period: "2020 - 2023",
//     course: "BSc Computer Science",
//     institution: "University Of Lagos",
//   },
// ];
// //@ts-ignore
// const Experience = ({theme}) => {
//   return (
//     <div className="mt-[5rem]  grid sm:grid-cols-2 grid-cols-1 lg:max-w-[1350px] py-14 xl:gap-14 sm:gap-6 md:max-w-[1000px]  w-[95%] mx-auto">
//       <motion.div initial={{ x: -100, opacity: 0, scale: 0.8 }}
//         whileInView={{ x: 0, opacity: 1, scale: 1 }}
//         viewport={{once: true}}
//         transition={{ duration: 1.5 }} className="w-[100%]">
//         <h1 className="  text-grad font-bold py-1  xl:text-4xl lg:text-3xl px-3  text-grad text-[1.8rem] ">My Experenice</h1>
//         <div className="mt-3 sm:mt-8 ">
//         {experiences.map((experience) => {
//           return (
//             <div key={experience.id} className={`flex mt-3 rounded-xl figtree p-4  spa flex-col space-y-2 ${theme == 'dark' ? ' bg-[#140C1C] text-white' : 'bg-[#ffff] text-[rgb(42,20,84)] '} `}>
//               <h2 className="text-[#7850F7] text-base">{experience.period}</h2>
//               <h1 className="sm:text-xl text-lg ">{experience.title}</h1>
//               <p className="sm:text-lg textbase ">{experience.company}</p>
//             </div>
//           );
//         })}
//         </div>
       
//       </motion.div>

//       <motion.div initial={{ x: -100, opacity: 0, scale: 0.8 }}
//        viewport={{once: true}}
//         whileInView={{ x: 0, opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5 }} className="w-[100%]  mt-6">
//         <h1 className=" xl:text-4xl lg:text-3xl px-3  text-grad text-[1.8rem]  text-grad font-bold py-1  ">My Education</h1>
       
//         <div className="mt-3 sm:mt-8 " >
//         {education.map((edu) => {
//           return (
//             <div key={edu.id} className= {`flex mt-3 rounded-xl p-4  flex-col figtree space-y-2  ${theme == 'dark' ? ' bg-[#140C1C] text-white' : 'bg-[#ffff] text-[#2A1454] '} `}>
//             <h2 className="text-[#7850F7]   text-base">{edu.period}</h2>
//             <h1 className="sm:text-xl text-lg ">{edu.course}</h1>
//             <p className="sm:text-lg text-base ">{edu.institution}</p>
//           </div>
//           );
//         })}
//         </div>
       
//       </motion.div>
//     </div>
//   );
// };

// export default Experience;



import React from 'react'


const experiences = [
  
    {
      "title": "Software Engineer Intern",
      "company": "Ozitech",
      "period": "2023",
      "description": "Contributed to the development of an interactive cryptocurrency investment calculator, delivering a seamless user experience.",
      "highlights": [
        "Designed and implemented an intuitive user interface with React and Ant Design.",
        "Built real-time calculations for cryptocurrency returns using JavaScript.",
        "Ensured cross-platform responsiveness for mobile and desktop devices."
      ]
    },
    {
      "title": "Freelance Developer",
      "company": "Fastgak",
      "period": "2022 - 2023",
      "description": "Developed a feature-rich mobile application leveraging modern JavaScript technologies.",
      "highlights": [
        "Integrated Google Sign-In for authentication and enhanced security with bcrypt.js.",
        "Implemented Stripe for secure payment processing and real-time transactions.",
        "Managed application state using Redux Toolkit for scalability and performance."
      ]
    },
    {
      "title": "Full Stack Developer",
      "company": "E-Blog (Personal Project)",
      "period": "2022",
      "description": "Created a blogging platform with robust backend API and modern frontend design.",
      "highlights": [
        "Developed RESTful APIs for user authentication and post management.",
        "Implemented scalable authentication mechanisms using JSON Web Tokens.",
        "Built and deployed the application with Next.js and Vercel for optimal performance."
      ]
    }
  
  
 
];



const Experience = () => {
  return (
    <div>
      <div className="mt-10 px-1">
        <div className="border-l-4 border-[#8750F7] ">
        <h1 className="md:text-4xl text-2xl tracking-wide  text-[#8750F7] ml-2 text-left  font-bold">
        Work Experiences</h1> 
        </div>
  
        {experiences.map((experience, index) => (
          <div key={index} className="mt-[3rem] flex flex-col ">
            
            <div className="flex justify-between items-center">
            <h2 className="md:text-xl text-lg  font-semibold leading-relaxed  text-left">{experience.title}</h2>
            <h3 className="text-base text-left leading-relaxed ">{experience.company} ({experience.period})</h3>
            </div>
            
            <p className="mt-3 text-left md:text-lg text-base leading-relaxed text-[#717171]">{experience.description}</p>
            <ul className="list-disc  list-inside mt-2">
              {experience.highlights.map((highlight, index) => (
                <li className='text-lg text-left mt-3 leading-relaxed text-[#717171]' key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Experience