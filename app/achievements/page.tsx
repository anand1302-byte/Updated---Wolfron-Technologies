'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaCertificate, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function AchievementsPage() {
  const achievements = [
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'SSIP 2.0 Government Grant Recipient',
      description: 'Recognized by the Government of Gujarat for innovation in technology',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Winner - AVPTI Science Exhibition',
      description: 'First place in UG/PG/PhD category for innovative mobility solutions',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: 'SIH & SSIP Hackathon Finalist',
      description: 'Reached finals in multiple prestigious hackathons',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: '100+ Projects Delivered',
      description: 'Successfully delivered taxi websites & digital systems across India',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: 'Google First Page Ranking',
      description: 'Ranked on Google\'s first page in major cities for "Taxi Website" & "Lead Packages"',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: '5000+ Network Growth',
      description: 'Connected over 5000 drivers and vendors through our platform',
      color: 'from-indigo-400 to-indigo-600',
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
              Our <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-xl text-gray-300">
              Milestones that define our commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative p-8 text-white min-h-[250px] flex flex-col">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Impact in Numbers
              </h2>
              <p className="text-gray-600">
                Real results from our commitment to innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Projects Delivered' },
                { number: '5000+', label: 'Users Connected' },
                { number: '#1', label: 'Google Ranking' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

