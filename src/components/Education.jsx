import { motion } from 'framer-motion';
import btechImg from '../assets/btech.jpg';
import diplomaImg from '../assets/diploma.jpg';
import schoolImg from '../assets/school.webp';
import { PinContainer } from './ui/3d-pin';

const Education = () => {
    const educationData = [
        {
            level: "Graduation",
            degree: "B.Tech in Computer Science",
            institution: "MVGR College of Engineering",
            period: "2023 - 2026",
            score: "8.36 CGPA",
            description: "Specialized in AI and Machine Learning. Completed projects on neural networks.",
            image: btechImg,
            href: "https://www.mvgrce.com/" // Example link, user can update
        },
        {
            level: "Diploma",
            degree: "Diploma in Computer Engineering",
            institution: "Govt Polytechnic Anakapalli",
            period: "2020 - 2023",
            score: "83%",
            description: "Focused on practical software development and hardware fundamentals.",
            image: diplomaImg,
            href: "http://gptanakapalli.org.in/" // Example link
        },
        {
            level: "School",
            degree: "Higher Secondary Education",
            institution: "Jubilee English Medium School",
            period: "2019 - 2020",
            score: "98%",
            description: "Foundation in science and mathematics.", // Added description for consistency
            image: schoolImg,
            href: "#"
        },
    ];

    return (
        <section id="education" className="py-20 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white overflow-hidden bg-gray-50 dark:bg-black/20">
            <div className="max-w-screen-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                >
                    Education
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg"
                >
                    My academic journey and qualifications that have shaped my knowledge and skills.
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24">
                    {educationData.map((edu, index) => (
                        <div key={index} className="h-[25rem] flex items-center justify-center sm:w-96 w-full">
                            <PinContainer
                                title={edu.institution}
                                href={edu.href}
                            >
                                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <div className="relative flex flex-1 w-full rounded-lg mt-4 overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                                        <img
                                            src={edu.image}
                                            alt={edu.institution}
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors duration-500"></div>
                                        <div className="absolute bottom-4 left-4 right-4 z-10">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm text-sm border border-white/20">
                                                    {edu.score}
                                                </span>
                                                <span className="text-white/80 text-xs font-medium bg-blue-600/80 px-2 py-1 rounded-md">
                                                    {edu.level}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes wave {
                  0%, 100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-10px);
                  }
                }
            `}</style>
        </section>
    );
};

export default Education;
