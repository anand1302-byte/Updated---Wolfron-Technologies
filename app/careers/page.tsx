'use client';

import { motion } from 'framer-motion';
import { FaCode, FaBullhorn, FaCog, FaRocket } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export default function CareersPage() {
  const positions = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Tech Intern',
      description: 'Work on cutting-edge mobility solutions, learn full-stack development, and contribute to TaxiWale Partners platform.',
      responsibilities: [
        'Frontend and backend development',
        'API integration and automation',
        'Mobile app development',
        'Code review and testing',
      ],
      requirements: [
        'Pursuing or completed degree in CS/IT',
        'Knowledge of JavaScript/TypeScript',
        'Familiarity with React or similar frameworks',
        'Passion for technology and innovation',
      ],
    },
    {
      icon: <FaBullhorn className="w-8 h-8" />,
      title: 'Marketing Intern',
      description: 'Help build our brand presence, manage digital marketing campaigns, and grow our partner network.',
      responsibilities: [
        'Social media management',
        'Content creation and SEO',
        'Partnership development',
        'Brand communication',
      ],
      requirements: [
        'Strong communication skills',
        'Understanding of digital marketing',
        'Creative thinking',
        'Experience with social media platforms',
      ],
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: 'Operations Intern',
      description: 'Support field operations, vendor relationships, and network expansion across India.',
      responsibilities: [
        'Vendor onboarding and support',
        'Field network development',
        'Process optimization',
        'Data analysis and reporting',
      ],
      requirements: [
        'Excellent organizational skills',
        'Strong interpersonal skills',
        'Problem-solving mindset',
        'Willingness to work in field operations',
      ],
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
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're building India's next big mobility platform. Join our early team!
            </p>
            <div className="flex items-center justify-center space-x-3">
              <FaRocket className="w-8 h-8 text-primary" />
              <span className="text-lg text-white">Shape the future of mobility technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
              Why Join Wolfron Technologies?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of a fast-growing startup that's revolutionizing India's mobility ecosystem. 
              Work on innovative projects, learn from experienced founders, and make a real impact 
              on how India travels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { title: 'Real Impact', desc: 'Work on products used by thousands' },
              { title: 'Growth Opportunity', desc: 'Learn and grow with early-stage startup' },
              { title: 'Innovation', desc: 'Cutting-edge tech stack and modern tools' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-accent to-white p-6 rounded-xl shadow-lg text-center border border-gray-200"
              >
                <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600">
              We're looking for passionate individuals to join our team
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="text-primary mb-4">{position.icon}</div>
                      <h3 className="text-2xl font-bold text-secondary mb-3">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {position.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {position.responsibilities.map((item, i) => (
                              <li key={i} className="text-gray-600 flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {position.requirements.map((item, i) => (
                              <li key={i} className="text-gray-600 flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="https://forms.gle/your-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Apply Now</span>
                      <HiArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't see a position that fits? We're always looking for talented individuals. 
              Reach out and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="mailto:wolfrontechnologies@gmail.com?subject=Career Inquiry"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

