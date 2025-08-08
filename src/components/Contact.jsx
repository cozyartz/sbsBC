import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star, ExternalLink, Calendar } from 'lucide-react';

const hours = [
  { day: "Monday", time: "11:00 AM - 7:00 PM", isToday: false },
  { day: "Tuesday - Friday", time: "9:00 AM - 7:00 PM", isToday: false },
  { day: "Saturday", time: "Closed", isToday: false, isClosed: true },
  { day: "Sunday", time: "11:00 AM - 5:00 PM", isToday: false, isSpecial: true }
];

const testimonials = [
  {
    text: "Super friendly here and prices are good. We'll definitely be back here to shop next time we need supplies!",
    author: "Recent Customer"
  },
  {
    text: "Greeted with peace and love right through the door by the owner. The store is very clean, no weird smells, and has a variety of beauty & hair products.",
    author: "Verified Customer"
  },
  {
    text: "So friendly and welcoming. The staff is caring, very knowledgeable and the scheduling process is easy with immediate response.",
    author: "5-Star Review"
  }
];

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-800 to-rose-700 bg-clip-text text-transparent">
            Visit Us Today
          </h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Located in the heart of Battle Creek, we're here to serve you with exceptional care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact info and hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary-100">
              {/* Business hours */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-accent-600 mr-3" />
                  <h3 className="font-heading text-2xl font-bold text-primary-800">Business Hours</h3>
                </div>
                
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-xl transition-colors ${
                        schedule.isClosed 
                          ? 'bg-red-50 border border-red-100' 
                          : schedule.isSpecial 
                          ? 'bg-accent-50 border border-accent-200' 
                          : 'bg-primary-50 border border-primary-100'
                      }`}
                    >
                      <span className={`font-semibold ${
                        schedule.isClosed ? 'text-red-700' : schedule.isSpecial ? 'text-accent-800' : 'text-primary-800'
                      }`}>
                        {schedule.day}
                      </span>
                      <span className={`font-medium ${
                        schedule.isClosed ? 'text-red-600' : schedule.isSpecial ? 'text-accent-700' : 'text-primary-700'
                      }`}>
                        {schedule.time}
                        {schedule.isSpecial && ' 🌟'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact information */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-rose-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-800 mb-1">Address</p>
                    <p className="text-primary-700">
                      1020 E Columbia Ave<br />
                      Battle Creek, MI 49014
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-rose-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-800 mb-1">Phone</p>
                    <a 
                      href="tel:269-719-2310" 
                      className="text-primary-700 hover:text-rose-600 font-medium transition-colors"
                    >
                      (269) 719-2310
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Star className="w-6 h-6 text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-800 mb-1">Rating</p>
                    <div className="flex items-center">
                      <div className="flex text-accent-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-primary-700 font-medium">5.0 • 133+ Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.a
                  href="tel:269-719-2310"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </motion.a>
                
                <motion.a
                  href="https://www.google.com/maps/dir//Superior+Beauty+Supply+and+Barber+Salon,+1020+E+Columbia+Ave,+Battle+Creek,+MI+49014"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-4 py-3 bg-white border-2 border-primary-300 text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Directions
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map and reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary-100">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.7845687432886!2d-85.16990852346098!3d42.30008887118947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8817f1d35188367d%3A0x6b408a10d0400b5b!2sSuperior%20Beauty%20Supply%20and%20Barber%20Salon!5e0!3m2!1sen!2sus!4v1723147200000!5m2!1sen!2sus"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-3xl"
                ></iframe>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary-800 mb-2">Find Us on Google</h4>
                    <p className="text-primary-600 text-sm">See our location, reviews, and photos</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Superior+Beauty+Supply+and+Barber+Salon/@42.3000888,-85.167905,17z/data=!3m1!4b1!4m6!3m5!1s0x8817f1d35188367d:0x6b408a10d0400b5b!8m2!3d42.3000888!4d-85.167905!16s%2Fg%2F11y1gqkk5w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    View <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Customer testimonials */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-primary-100">
              <h4 className="font-heading text-xl font-bold mb-4 text-primary-800">What Our Customers Say</h4>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary-50 rounded-xl p-4 border border-primary-100"
                  >
                    <p className="text-primary-700 text-sm italic mb-2">"{testimonial.text}"</p>
                    <p className="text-primary-600 text-xs font-medium">- {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-800 to-rose-700 rounded-3xl p-12 text-white"
        >
          <h3 className="font-heading text-3xl font-bold mb-4">Ready to Look and Feel Amazing?</h3>
          <p className="text-xl mb-8 opacity-90">
            Experience the Superior difference today. Call us or stop by - walk-ins welcome!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:269-719-2310"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-800 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (269) 719-2310
            </motion.a>
            
            <motion.a
              href="https://www.facebook.com/p/Superior-Beauty-Supply-Barber-Salon-100090738437557/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Follow Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}