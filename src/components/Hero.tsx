import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Train, Users, Award, Star } from 'lucide-react';
import heroImage from '@/assets/hero-train.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Railway preparation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm font-semibold">
            <Train className="mr-2 h-4 w-4" />
            Railways Exam Preparation
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Railways Exam Preparation
            <span className="block text-primary">KingMakers School</span>
            <span className="block text-secondary">of Banking</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Focused training for RRB exams with expert guidance. Master your railway career with comprehensive preparation.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">50,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Expert Faculty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Vacancy Highlight Box */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-card/90 backdrop-blur p-6 rounded-lg shadow-strong border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">61,900</div>
            <div className="text-sm text-muted-foreground">Railway Posts</div>
            <div className="text-xs text-accent font-medium mt-1">Available Now</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;