'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaTrophy, FaCode, FaGraduationCap, FaBuilding, FaMobileAlt } from 'react-icons/fa';

export default function JourneyPage() {
  const milestones = [
    {
      date: 'Aug 2023',
      title: 'Hackathon Participation',
      description: 'Participated in SIH & SSIP Hackathons',
      icon: <FaCode className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      date: 'Sep 2023',
      title: 'SSIP Finalist & Grant',
      description: 'SSIP Finalist and Grant Approval',
      icon: <FaTrophy className="w-6 h-6" />,
      color: 'bg-yellow-500',
    },
    {
      date: 'Jan 2024',
      title: 'First IoT Delivery',
      description: 'Delivered first IoT-based dashboard & mobile app',
      icon: <FaMobileAlt className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      date: 'Apr 2024',
      title: 'Orions Tech Elite Founded',
      description: 'Founded Orions Tech Elite',
      icon: <FaBuilding className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      date: 'May 2025',
      title: 'College Completion',
      description: 'Completed college final viva',
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: 'bg-indigo-500',
    },
    {
      date: 'Sep 2025',
      title: 'Wolfron Technologies LLP',
      description: 'Incorporated Wolfron Technologies LLP',
      icon: <FaBuilding className="w-6 h-6" />,
      color: 'bg-primary',
    },
    {
      date: 'Oct 2025',
      title: 'TaxiWale Partners Prototype',
      description: 'Began TaxiWale Partners prototype',
      icon: <FaRocket className="w-6 h-6" />,
      color: 'bg-red-600',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Journey</span>
            </h1>
            <p className="text-xl text-gray-300">
              From hackathons to building India's mobility ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary-dark transform md:-translate-x-1/2"></div>

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className={`w-16 h-16 ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform`}>
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      } ml-20 md:ml-0`}
                    >
                      <div className="bg-gradient-to-br from-accent to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                        <div className="text-primary font-bold text-sm mb-2">
                          {milestone.date}
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <FaRocket className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the Future of Mobility
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our journey continues as we work towards organizing India's entire mobility ecosystem, 
              one connection at a time. Join us as we shape the future of transportation technology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

