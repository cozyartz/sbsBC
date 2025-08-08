import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-primary-50 to-accent-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-rose-900/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent-200/30 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-rose-200/20 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Star rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex space-x-1 text-accent-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-primary-800">
              5.0 • 133+ Reviews
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-800 via-rose-700 to-primary-900 bg-clip-text text-transparent"
          >
            Superior Beauty Supply
            <br />
            <span className="text-4xl md:text-6xl">& Barber Salon</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-700 mb-8 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Where beauty meets excellence. Professional hair care, premium products, 
            and exceptional service for the whole family in Battle Creek.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="tel:269-719-2310"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (269) 719-2310
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-800 rounded-full font-semibold text-lg border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-100">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-accent-600 mr-2" />
                <span className="font-semibold text-primary-800">Open Sundays</span>
              </div>
              <p className="text-sm text-primary-600">11 AM - 5 PM</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-100">
              <div className="flex items-center justify-center mb-2">
                <span className="text-accent-600 mr-2">✂️</span>
                <span className="font-semibold text-primary-800">All Hair Types</span>
              </div>
              <p className="text-sm text-primary-600">Inclusive Care</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-100">
              <div className="flex items-center justify-center mb-2">
                <span className="text-accent-600 mr-2">🏆</span>
                <span className="font-semibold text-primary-800">BBB Accredited</span>
              </div>
              <p className="text-sm text-primary-600">Trusted Business</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}