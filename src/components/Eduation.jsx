import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      level: "Graduation",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Maharaj Vijayaram Gajapathi Raj College of Engineering",
      period: "2020 - 2024",
      score: "8.36 CGPA",
      description: "Specialized in AI and Machine Learning. Completed projects on neural networks and computer vision.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      side: "left"
    },
    {
      level: "Diploma",
      degree: "Diploma in Computer Engineering",
      institution: "Governement Polytechnic Anakapalli",
      period: "2020 - 2023",
      score: "83%",
      description: "Focused on practical software development and hardware fundamentals. Built several web applications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      side: "right"
    },
    
    {
      level: "School",
      degree: "Higher Secondary Education",
      institution: "Jubilee English Medium School",
      period: "2019 - 2020",
      score: "98%",
      description: "Science stream with Computer Science as specialization. Participated in various coding competitions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      side: "left"
    },
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          My academic journey and qualifications that have shaped my knowledge and skills.
        </motion.p>

        {/* Timeline for desktop */}
        <div className="hidden lg:block relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>
          
          {/* Education items */}
          <div className="space-y-24 py-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: edu.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${edu.side === "left" ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 ${edu.side === "left" ? "right-0 transform translate-x-1/2" : "left-0 transform -translate-x-1/2"} w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10`}></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${edu.side === "left" ? "pr-10" : "pl-10"}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Level Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-full mb-4">
                        {edu.level}
                      </span>
                      
                      {/* Degree */}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      {/* Institution */}
                      <p className="text-purple-300 font-medium mb-3">
                        {edu.institution}
                      </p>
                      
                      {/* Period and Score */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-400 bg-gray-700/30 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                        <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                          {edu.score}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm">
                        {edu.description}
                      </p>
                      
                      {/* Icon */}
                      <div className="text-purple-400 mt-4">
                        {edu.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Central timeline line for mobile */}
            <div className="absolute left-6 transform h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            {/* Education items for mobile */}
            <div className="space-y-8 py-5 pl-16">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot for mobile */}
                  <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10"></div>
                  
                  {/* Content card for mobile */}
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 p-6 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Level Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-full mb-4">
                        {edu.level}
                      </span>
                      
                      {/* Degree */}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      {/* Institution */}
                      <p className="text-purple-300 font-medium mb-3">
                        {edu.institution}
                      </p>
                      
                      {/* Period and Score */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-400 bg-gray-700/30 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                        <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                          {edu.score}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm">
                        {edu.description}
                      </p>
                      
                      {/* Icon */}
                      <div className="text-purple-400 mt-4">
                        {edu.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;