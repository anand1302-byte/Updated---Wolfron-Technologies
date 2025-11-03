'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeart, FaLightbulb, FaShieldAlt, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Building trust through transparent and ethical practices',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Making technology accessible to every stakeholder',
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Scalability',
      description: 'Designing solutions that grow with your business',
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Trust',
      description: 'Creating reliable partnerships and long-term relationships',
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
              About <span className="text-primary">Wolfron Technologies</span>
            </h1>
            <p className="text-xl text-gray-300">
              Technology-driven company focused on building scalable SaaS and mobility platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>Wolfron Technologies LLP</strong> is a technology-driven company focused on 
                  building scalable SaaS and mobility platforms for India's taxi and transport sector. 
                  The company evolved from <a href="https://orionstechelite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold underline">Orions Tech Elite</a> — a digital service brand 
                  that helped hundreds of taxi vendors go online and grow sustainably.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, we're committed to organizing India's fragmented mobility ecosystem through 
                  innovative technology solutions like <a href="https://taxiwalepartners.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold underline">TaxiWale Partners</a> that connect drivers, vendors, and fleet operators 
                  in a transparent, trust-based digital network.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <FaBullseye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower India's local mobility networks through digital trust, verified collaboration, 
                and transparent lead-sharing. We're building the infrastructure that connects every 
                driver, vendor, and fleet operator in a unified digital ecosystem.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <FaEye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted mobility-tech brand, connecting every driver, vendor, and 
                fleet operator through a single national digital ecosystem. We envision a future where 
                technology seamlessly integrates all stakeholders in India's mobility value chain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-accent to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-200"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

