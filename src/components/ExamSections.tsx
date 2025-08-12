import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, BookOpen, Users, Clock, Target } from 'lucide-react';

const ExamSections = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const examData = [
    {
      id: 'ntpc',
      title: 'RRB NTPC',
      subtitle: 'Non-Technical Popular Categories',
      posts: '35,000+ Posts',
      difficulty: 'Intermediate',
      duration: '90 Minutes',
      sections: ['Mathematics', 'General Intelligence & Reasoning', 'General Awareness'],
      eligibility: {
        age: '18-33 years',
        qualification: '12th Pass / Graduate',
        attempts: 'No Limit'
      },
      syllabus: {
        'Mathematics': ['Number System', 'Percentage', 'Ratio & Proportion', 'Time & Work', 'Profit & Loss', 'Simple & Compound Interest'],
        'General Intelligence & Reasoning': ['Analogies', 'Classification', 'Series', 'Coding-Decoding', 'Blood Relations', 'Direction Sense'],
        'General Awareness': ['Current Affairs', 'Sports', 'Geography', 'History', 'Polity', 'Economics', 'Science & Technology']
      },
      tips: [
        'Focus on speed and accuracy for Mathematics section',
        'Practice previous year papers regularly',
        'Stay updated with current affairs from last 6 months',
        'Master shortcut techniques for quick calculations'
      ]
    },
    {
      id: 'alp',
      title: 'RRB ALP',
      subtitle: 'Assistant Loco Pilot',
      posts: '15,000+ Posts',
      difficulty: 'Intermediate',
      duration: '90 Minutes',
      sections: ['Mathematics', 'General Intelligence & Reasoning', 'Basic Science & Engineering', 'General Awareness'],
      eligibility: {
        age: '18-28 years',
        qualification: '10th + ITI / Diploma',
        attempts: 'No Limit'
      },
      syllabus: {
        'Mathematics': ['Number System', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics'],
        'General Intelligence & Reasoning': ['Analogies', 'Classification', 'Series', 'Coding-Decoding', 'Puzzles'],
        'Basic Science & Engineering': ['Physics', 'Chemistry', 'Basic Electrical', 'Basic Mechanical'],
        'General Awareness': ['Current Affairs', 'Indian Railways', 'Sports', 'Geography', 'History']
      },
      tips: [
        'Strong technical knowledge is essential',
        'Practice numerical problems daily',
        'Focus on basic engineering concepts',
        'Learn about Indian Railways operations'
      ]
    },
    {
      id: 'groupd',
      title: 'RRB Group D',
      subtitle: 'Level 1 Posts',
      posts: '10,000+ Posts',
      difficulty: 'Basic',
      duration: '90 Minutes',
      sections: ['Mathematics', 'General Intelligence & Reasoning', 'General Science', 'General Awareness'],
      eligibility: {
        age: '18-33 years',
        qualification: '10th Pass',
        attempts: 'No Limit'
      },
      syllabus: {
        'Mathematics': ['Number System', 'Percentage', 'Ratio & Proportion', 'Time & Distance', 'Simple Interest'],
        'General Intelligence & Reasoning': ['Analogies', 'Classification', 'Series', 'Coding-Decoding', 'Mathematical Operations'],
        'General Science': ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
        'General Awareness': ['Current Affairs', 'Sports', 'Geography', 'History', 'Polity']
      },
      tips: [
        'Focus on 10th level concepts',
        'Practice basic mathematics regularly',
        'Study NCERT books for General Science',
        'Stay updated with current events'
      ]
    },
    {
      id: 'je',
      title: 'RRB JE',
      subtitle: 'Junior Engineer',
      posts: '1,900+ Posts',
      difficulty: 'Advanced',
      duration: '90 Minutes',
      sections: ['General Intelligence & Reasoning', 'General Awareness', 'Technical Abilities'],
      eligibility: {
        age: '18-33 years',
        qualification: 'Engineering Diploma / Degree',
        attempts: 'No Limit'
      },
      syllabus: {
        'General Intelligence & Reasoning': ['Analogies', 'Classification', 'Series', 'Coding-Decoding', 'Mathematical Operations'],
        'General Awareness': ['Current Affairs', 'Indian Railways', 'Sports', 'Geography', 'History'],
        'Technical Abilities': ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics Engineering']
      },
      tips: [
        'Deep technical knowledge required',
        'Focus on engineering fundamentals',
        'Practice technical calculations',
        'Study railway engineering applications'
      ]
    }
  ];

  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="mr-2 h-4 w-4" />
            Exam Preparation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Railway Exam Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive preparation materials for all major railway examinations
          </p>
        </div>

        <div className="space-y-6">
          {examData.map((exam) => (
            <Card key={exam.id} className="shadow-soft hover:shadow-strong transition-all duration-300">
              <Collapsible
                open={openSections[exam.id]}
                onOpenChange={() => toggleSection(exam.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl md:text-2xl">{exam.title}</CardTitle>
                          <p className="text-muted-foreground">{exam.subtitle}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline">{exam.posts}</Badge>
                            <Badge variant={exam.difficulty === 'Advanced' ? 'destructive' : exam.difficulty === 'Intermediate' ? 'default' : 'secondary'}>
                              {exam.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {exam.duration}
                        </div>
                        {openSections[exam.id] ? 
                          <ChevronUp className="h-5 w-5" /> : 
                          <ChevronDown className="h-5 w-5" />
                        }
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Eligibility */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Eligibility
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-medium">Age:</span> {exam.eligibility.age}</div>
                          <div><span className="font-medium">Qualification:</span> {exam.eligibility.qualification}</div>
                          <div><span className="font-medium">Attempts:</span> {exam.eligibility.attempts}</div>
                        </div>
                      </div>

                      {/* Syllabus */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Syllabus
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(exam.syllabus).map(([subject, topics]) => (
                            <div key={subject} className="text-sm">
                              <div className="font-medium mb-1">{subject}</div>
                              <div className="text-muted-foreground text-xs">
                                {(topics as string[]).slice(0, 3).join(', ')}
                                {(topics as string[]).length > 3 && '...'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Preparation Tips */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Preparation Tips
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {exam.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3">
                      <Button variant="hero" className="flex-1">
                        Enroll for {exam.title}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Download Syllabus
                      </Button>
                      <Button variant="golden" className="flex-1">
                        Free Mock Test
                      </Button>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamSections;