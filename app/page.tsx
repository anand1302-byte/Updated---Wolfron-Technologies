'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { 
  FaNetworkWired, 
  FaUsers, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaWallet, 
  FaMapMarkerAlt, 
  FaStar,
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaAward,
  FaLightbulb,
  FaQuoteLeft
} from 'react-icons/fa';

export default function Home() {
  const highlights = [
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      number: '100+',
      title: 'Projects Delivered Across India',
      description: 'Scalable solutions for taxi and mobility businesses',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      number: '5000+',
      title: 'Drivers and Vendors Engaged',
      description: 'Connecting India\'s mobility ecosystem',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      number: 'Pan-India',
      title: 'Organizing India\'s Taxi Network',
      description: 'Through innovative technology solutions',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center space-x-3 bg-primary/20 px-6 py-3 rounded-full border border-primary/30">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
                <span className="text-white font-semibold text-lg">Wolfron Technologies LLP</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Building the Digital Backbone of{' '}
              <span className="text-primary">India's Mobility Ecosystem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Empowering drivers, vendors, and fleet owners through connected mobility solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://taxiwalepartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Explore TaxiWale Partners</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-accent to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-primary mb-4">{highlight.icon}</div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {highlight.number}
                </h3>
                <h4 className="text-xl font-semibold text-secondary mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To organize India's fragmented taxi and travel ecosystem into a transparent, 
              tech-driven, and growth-oriented platform that empowers every stakeholder 
              in the mobility value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
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
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Technology-driven company building scalable SaaS and mobility platforms for India's transport sector
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  From Orions Tech Elite to Wolfron Technologies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wolfron Technologies LLP evolved from <a href="https://orionstechelite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold underline">Orions Tech Elite</a> — a digital service 
                  brand that helped hundreds of taxi vendors go online and grow sustainably. With years of 
                  experience in the mobility sector, we understand the challenges and opportunities in India's 
                  transportation ecosystem.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Today, we're taking the next step by building <a href="https://taxiwalepartners.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold underline">TaxiWale Partners</a> — India's 
                  first pan-India taxi lead-sharing and networking platform that connects drivers, vendors, 
                  agents, and fleet owners through transparent, tech-driven solutions.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold group"
                >
                  <span>Learn More About Us</span>
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: <FaRocket className="w-8 h-8" />, label: 'Innovation', color: 'bg-blue-500' },
                  { icon: <FaHandshake className="w-8 h-8" />, label: 'Trust', color: 'bg-green-500' },
                  { icon: <FaChartLine className="w-8 h-8" />, label: 'Growth', color: 'bg-purple-500' },
                  { icon: <FaGlobe className="w-8 h-8" />, label: 'Pan-India', color: 'bg-primary' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-3`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-secondary">{item.label}</h4>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TaxiWale Partners Features */}
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
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-bold text-sm">🚕 OUR FLAGSHIP PRODUCT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                <a href="https://taxiwalepartners.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TaxiWale Partners</a>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                India's first pan-India taxi lead-sharing and networking platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <FaShieldAlt className="w-6 h-6" />,
                  title: 'Verified Network',
                  description: 'Trusted network of verified drivers and vendors for secure lead exchanges',
                },
                {
                  icon: <FaWallet className="w-6 h-6" />,
                  title: 'Secure Payments',
                  description: 'Wallet-based escrow system ensures safe and transparent transactions',
                },
                {
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  title: 'Location Matchmaking',
                  description: 'Real-time location-based matching connects opportunities instantly',
                },
                {
                  icon: <FaStar className="w-6 h-6" />,
                  title: 'Reputation System',
                  description: 'Build trust through verified ratings and performance tracking',
                },
                {
                  icon: <FaRocket className="w-6 h-6" />,
                  title: 'Zero Commission',
                  description: 'Grow your business without hidden fees or commission charges',
                },
                {
                  icon: <FaGlobe className="w-6 h-6" />,
                  title: 'Pan-India Reach',
                  description: 'Connect with partners across India through a single platform',
                },
              ].map((feature, index) => (
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <a
                href="https://taxiwalepartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Explore All Features</span>
                <HiArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How TaxiWale Partners Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple steps to connect and grow your mobility business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Sign Up',
                  description: 'Register as a driver, vendor, agent, or fleet owner',
                },
                {
                  step: '02',
                  title: 'Get Verified',
                  description: 'Complete profile verification for trusted networking',
                },
                {
                  step: '03',
                  title: 'Connect & Share',
                  description: 'Access leads, share opportunities, and build partnerships',
                },
                {
                  step: '04',
                  title: 'Grow Together',
                  description: 'Scale your business with zero commission model',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Why Choose Wolfron Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise and commitment to India's mobility sector
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaAward className="w-8 h-8" />,
                  title: 'Award-Winning',
                  description: 'SSIP 2.0 Grant recipient, AVPTI Science Exhibition winner, and hackathon finalist',
                },
                {
                  icon: <FaLightbulb className="w-8 h-8" />,
                  title: 'Innovation First',
                  description: 'Cutting-edge technology solutions designed for scalability and growth',
                },
                {
                  icon: <FaHandshake className="w-8 h-8" />,
                  title: 'Trusted Partner',
                  description: '100+ successful projects and 5000+ drivers and vendors in our network',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-white/90">
                Real results from our commitment to organizing India's mobility ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Projects Delivered' },
                { number: '5000+', label: 'Network Members' },
                { number: '#1', label: 'Google Ranking' },
                { number: 'Pan-India', label: 'Geographic Reach' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
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
                What Our Partners Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by drivers, vendors, and fleet owners across India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'Wolfron Technologies helped us go digital and grow our business exponentially. Their platform connects us with verified leads across India.',
                  author: 'Rajesh Kumar',
                  role: 'Taxi Vendor, Mumbai',
                },
                {
                  quote: 'The zero-commission model and secure payment system make TaxiWale Partners a game-changer for independent drivers like me.',
                  author: 'Priya Sharma',
                  role: 'Taxi Driver, Delhi',
                },
                {
                  quote: 'Outstanding service and innovative solutions. The team understands the mobility sector better than anyone.',
                  author: 'Amit Patel',
                  role: 'Fleet Owner, Gujarat',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <FaQuoteLeft className="w-8 h-8 text-primary mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-secondary">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Mobility Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of drivers, vendors, and fleet owners who trust Wolfron Technologies 
              to grow their business. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

