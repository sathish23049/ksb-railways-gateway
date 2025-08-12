import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin, Train } from 'lucide-react';
import ksbLogo from '@/assets/ksb-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Success Stories', href: '#success' },
    { name: 'Contact', href: '#contact' }
  ];

  const examLinks = [
    { name: 'RRB NTPC', href: '#ntpc' },
    { name: 'RRB ALP', href: '#alp' },
    { name: 'RRB Group D', href: '#groupd' },
    { name: 'RRB JE', href: '#je' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Mock Tests', href: '#mock-tests' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={ksbLogo} alt="KSB Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">KingMakers</h3>
                <p className="text-sm opacity-90">School of Banking</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading institute for railway exam preparation with expert guidance and comprehensive training programs. 
              Your success is our mission.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Exam Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Train className="h-4 w-4" />
              Exam Categories
            </h4>
            <nav className="space-y-2">
              {examLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 opacity-80" />
                <div className="opacity-80">
                  <div>123 Education Street</div>
                  <div>Chennai, Tamil Nadu 600001</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">admission@ksb.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-80">
            © {currentYear} KingMakers School of Banking (KSB). All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#terms" className="opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <a href="#sitemap" className="opacity-80 hover:opacity-100 transition-opacity">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;