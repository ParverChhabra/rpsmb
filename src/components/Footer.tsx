import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#philosophy' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Notice Board', href: '#notices' },
  { label: 'Contact Us', href: '#footer' },
];

const facilities = [
  'Smart Classrooms',
  'Science Laboratories',
  'Computer Lab',
  'Library',
  'Sports Complex',
  'Auditorium',
];

export const Footer = () => {
  return (
    <footer id="footer" className="bg-card border-t border-gold/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream">Radiant Public School</h3>
                <p className="text-gold/60 text-xs">Excellence in Education</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Nurturing young minds with values, knowledge, and confidence since 1985. 
              Affiliated to CBSE, New Delhi.
            </p>
            <p className="text-cream/50 text-xs">
              Affiliation No: XXXXXX | School Code: XXXXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Our Facilities</h4>
            <ul className="space-y-3">
              {facilities.map((facility) => (
                <li key={facility} className="text-cream/70 text-sm">
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  {/* Customize with actual address */}
                  123 Education Lane, Sector 15,
                  <br />
                  New Delhi - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  +91 11 2345 6789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  info@radiantpublicschool.edu.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Mon - Sat: 8:00 AM - 3:00 PM
                  <br />
                  Office: 9:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm">
            <p>
              © {new Date().getFullYear()} Radiant Public School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
