'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaUser, FaRocket, FaBullhorn } from 'react-icons/fa';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Aditya Rajput',
      role: 'Co-Founder & CSO',
      description: 'Product strategy, operations, and field network development',
      icon: <FaRocket className="w-8 h-8" />,
      linkedin: 'https://linkedin.com/in/aditya-rajput',
    },
    {
      name: 'Chaitanya Pandita',
      role: 'Co-Founder & CMO',
      description: 'Marketing, partnerships, and brand communication',
      icon: <FaBullhorn className="w-8 h-8" />,
      linkedin: 'https://linkedin.com/in/chaitanya-pandita',
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
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              The visionaries building India's mobility ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                >
                  {/* Profile Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <FaUser className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-primary mb-4 flex justify-center">
                      {member.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-center mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-center mb-6">
                      {member.description}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin className="w-6 h-6" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're building India's next big mobility platform. 
              Join our early team and help shape the future of transportation technology.
            </p>
            <a
              href="/careers"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

