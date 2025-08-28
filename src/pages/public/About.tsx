import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Target, Award, ArrowRight, Globe, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/images/CEO.jpg",
      bio: "Former UN humanitarian with 15+ years in international aid and development."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Tech entrepreneur passionate about using technology for social good."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Impact",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Social impact specialist with expertise in measuring and maximizing charitable outcomes."
    },
    {
      name: "David Kim",
      role: "Head of Community",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder focused on connecting donors with causes they care about."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Every donation is tracked and donors receive regular updates on impact."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of human kindness to change the world."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections between donors, beneficiaries, and changemakers."
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Focused on creating measurable, sustainable change in communities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">CharityConnect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to make charitable giving more transparent, impactful, and accessible to everyone. 
              Since 2019, we've been connecting generous hearts with meaningful causes worldwide.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">$2.4M+</div>
                <div className="text-sm text-gray-600">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">15K+</div>
                <div className="text-sm text-gray-600">Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">324</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">42</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we build relationships with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4 mx-auto">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making charitable giving more effective and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-indigo-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of donors who are already making an impact through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link to="/register" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <Link to="/campaigns">Browse Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;