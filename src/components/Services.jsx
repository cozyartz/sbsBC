import { motion } from 'framer-motion';
import { Scissors, Sparkles, ShoppingBag, Users } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Hair Salon",
    description: "Complete hair care services for all textures and styles",
    features: [
      "Professional Cuts & Styling",
      "Hair Color & Highlights", 
      "Extensions & Weaves",
      "Braiding & Protective Styles",
      "Locs & Natural Hair Care",
      "Special Occasion Updos"
    ],
    gradient: "from-rose-500 to-pink-600"
  },
  {
    icon: Sparkles,
    title: "Barber Shop",
    description: "Expert grooming services for men and boys",
    features: [
      "Classic & Modern Cuts",
      "Beard Trims & Shaping",
      "Hot Towel Treatments",
      "Fade Specialists",
      "Boys' Cuts",
      "Men's Braid Styles"
    ],
    gradient: "from-primary-600 to-primary-700"
  },
  {
    icon: ShoppingBag,
    title: "Beauty Supply",
    description: "Premium products for all your beauty needs",
    features: [
      "Professional Hair Products",
      "Styling Tools & Equipment",
      "Wigs & Hair Pieces",
      "Skin Care Essentials",
      "Makeup & Cosmetics",
      "Men's Grooming Products"
    ],
    gradient: "from-accent-500 to-yellow-600"
  }
];

const specialOffers = [
  {
    icon: "🌟",
    title: "Sunday Special",
    description: "Braiding hair deals every Sunday!",
    bgColor: "bg-gradient-to-br from-accent-100 to-yellow-100"
  },
  {
    icon: "💁‍♀️",
    title: "Wig Wednesday",
    description: "BOGO deals on premium wigs",
    bgColor: "bg-gradient-to-br from-rose-100 to-pink-100"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description: "All ages welcome, toddlers to grandparents",
    bgColor: "bg-gradient-to-br from-primary-100 to-primary-50"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
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
            Our Services
          </h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Professional beauty and grooming services designed to make you look and feel your absolute best
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary-100 h-full transition-all duration-300 group-hover:shadow-2xl">
                  {/* Icon header */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading text-2xl font-bold mb-4 text-primary-800">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-500 mr-3 mt-1">•</span>
                        <span className="text-primary-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-100/50 to-rose-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl font-bold mb-8 text-primary-800">
            Special Offers & Why Choose Us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${offer.bgColor} rounded-2xl p-6 border border-white/50 shadow-lg`}
              >
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-primary-800">{offer.title}</h4>
                <p className="text-primary-700 text-sm">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="tel:269-719-2310"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-700 to-rose-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Users className="w-5 h-5 mr-2" />
            Book Your Appointment Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}