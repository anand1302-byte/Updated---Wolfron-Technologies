'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaWallet, 
  FaMapMarkerAlt, 
  FaStar, 
  FaDollarSign,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaLaptopCode,
  FaSearch,
  FaCog,
  FaBullhorn
} from 'react-icons/fa';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';

export default function ProductsPage() {
  const taxiWaleFeatures = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: 'Verified Lead Sharing',
      description: 'Trusted network of verified drivers and vendors for secure lead exchanges',
    },
    {
      icon: <FaWallet className="w-6 h-6" />,
      title: 'Wallet-Based Escrow',
      description: 'Secure payment system with built-in escrow for seamless transactions',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Real-Time Matchmaking',
      description: 'Location-based matching connects the right driver with the right opportunity',
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: 'Reputation System',
      description: 'Build trust through verified ratings and performance tracking',
    },
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: 'Commission-Free Growth',
      description: 'Grow your business without hidden fees or commission charges',
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: 'Pan-India Network',
      description: 'Connect with partners across India through a single platform',
    },
  ];

  const otherServices = [
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: 'Custom Websites & Landing Pages',
      description: 'Professional, mobile-responsive websites tailored for taxi and travel businesses',
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: 'SEO & Digital Marketing',
      description: 'Get ranked on Google\'s first page in major cities for taxi-related searches',
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: 'CRM & API Automation',
      description: 'Streamline operations with custom CRM solutions and API integrations',
    },
    {
      icon: <FaBullhorn className="w-6 h-6" />,
      title: 'Lead Generation Packages',
      description: 'Proven packages to generate qualified leads for your taxi and travel business',
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
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Innovative solutions powering India's mobility ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* TaxiWale Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary font-bold text-2xl">🚕</span>
                <a href="https://taxiwalepartners.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-xl hover:text-primary-dark">TaxiWale Partners</a>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                India's First Pan-India Taxi Lead-Sharing Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connecting drivers, vendors, agents, and fleet owners through a transparent, 
                tech-driven network that facilitates verified lead sharing and business growth.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {taxiWaleFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Target Users */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaUsers className="w-6 h-6 mr-3" />
                Target Users
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['Taxi Drivers', 'Vendors', 'Agents', 'Fleet Owners'].map((user, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">{user}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/90">
                <strong>Future Expansion:</strong> Integration with corporate, logistics, and tourism networks 
                to create a comprehensive mobility ecosystem.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Request Demo</span>
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
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
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by <a href="https://orionstechelite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold underline">Orions Tech Elite</a> — helping taxi businesses go digital
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

