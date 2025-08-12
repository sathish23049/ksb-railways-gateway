import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Video, BookOpen, Star, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  const features = [
    'Expert Faculty with 15+ Years Experience',
    'Live Interactive Classes',
    'Comprehensive Study Materials',
    'Weekly Mock Tests & Analysis',
    'Doubt Clearing Sessions',
    'Previous Year Papers Collection'
  ];

  const stats = [
    { number: '50,000+', label: 'Students Trained' },
    { number: '98%', label: 'Success Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden shadow-strong border-0 bg-gradient-hero">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <Badge variant="secondary" className="mb-4">
                    <Star className="mr-2 h-4 w-4" />
                    Premium Coaching
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Join KSB Railway Coaching
                  </h2>
                  
                  <p className="text-lg text-primary-foreground/90 mb-6">
                    Transform your railway career dreams into reality with our comprehensive coaching programs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button variant="secondary" size="lg" className="flex-1">
                      <Video className="mr-2 h-5 w-5" />
                      Online Coaching
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                      <Users className="mr-2 h-5 w-5" />
                      Offline Coaching
                    </Button>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="text-sm text-primary-foreground/80 mb-2">
                      Starting from ₹999/month
                    </div>
                    <div className="text-xs text-primary-foreground/60">
                      Free trial available • No hidden charges
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    What You Get
                  </h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
          <Card className="text-center shadow-soft hover:shadow-strong transition-all duration-300">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call for Admission</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak with our counselors
              </p>
              <Button variant="outline" className="w-full">
                +91 9876543210
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-strong transition-all duration-300">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Inquiry</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get detailed information
              </p>
              <Button variant="outline" className="w-full">
                admission@ksb.edu.in
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;