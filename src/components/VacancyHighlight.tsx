import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Train, TrendingUp, Calendar, MapPin } from 'lucide-react';

const VacancyHighlight = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="mr-2 h-4 w-4" />
            Latest Opportunities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Railways Recruitment 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Massive recruitment drive across Indian Railways with unprecedented opportunities
          </p>
        </div>

        {/* Main Vacancy Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden shadow-strong border-0 bg-gradient-primary">
            <CardContent className="p-8 md:p-12 text-center text-primary-foreground">
              <Train className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <div className="mb-4">
                <span className="text-6xl md:text-8xl font-bold block">61,900</span>
                <span className="text-2xl md:text-3xl font-semibold opacity-90">Total Posts</span>
              </div>
              <p className="text-xl opacity-90 mb-6">
                Railway Recruitment Board (RRB) Notification 2025
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Applications Open</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>All India Level</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Breakdown Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'RRB NTPC', posts: '35,000+', description: 'Non-Technical Popular Categories' },
            { title: 'RRB ALP', posts: '15,000+', description: 'Assistant Loco Pilot' },
            { title: 'RRB Group D', posts: '10,000+', description: 'Level 1 Posts' },
            { title: 'RRB JE', posts: '1,900+', description: 'Junior Engineer' },
          ].map((item, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-secondary mb-2">{item.posts}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacancyHighlight;