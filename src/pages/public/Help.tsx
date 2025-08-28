import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Getting Started', count: 8, color: 'bg-blue-100 text-blue-800' },
    { name: 'Donations', count: 12, color: 'bg-green-100 text-green-800' },
    { name: 'Account', count: 6, color: 'bg-purple-100 text-purple-800' },
    { name: 'Campaigns', count: 9, color: 'bg-orange-100 text-orange-800' },
    { name: 'Safety & Security', count: 5, color: 'bg-red-100 text-red-800' }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the top right corner, choose your account type (Donor or Campaign Leader), fill in your details, and verify your email address.'
    },
    {
      category: 'Donations',
      question: 'How do I make a donation?',
      answer: 'Browse campaigns, click "Donate Now" on a campaign you want to support, enter your donation amount, and complete the secure payment process.'
    },
    {
      category: 'Donations',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and Apple Pay/Google Pay.'
    },
    {
      category: 'Donations',
      question: 'Can I get a tax receipt for my donation?',
      answer: 'Yes! Tax receipts are automatically generated and sent to your email after each donation. You can also download them from your donor dashboard.'
    },
    {
      category: 'Account',
      question: 'How do I update my profile information?',
      answer: 'Go to your dashboard, click on "Profile Settings", and update any information you need to change. Don\'t forget to save your changes.'
    },
    {
      category: 'Account',
      question: 'How do I change my password?',
      answer: 'In your Profile Settings, click on "Security", then "Change Password". Enter your current password and your new password twice.'
    },
    {
      category: 'Campaigns',
      question: 'How are campaigns verified?',
      answer: 'Our team reviews all campaigns for legitimacy, verifies campaign leaders\' identities, and ensures proper documentation before approval.'
    },
    {
      category: 'Campaigns',
      question: 'How do I track the impact of my donations?',
      answer: 'Visit your donor dashboard to see detailed impact reports, updates from campaign leaders, and photos/videos showing how your donation was used.'
    },
    {
      category: 'Safety & Security',
      question: 'Is my payment information secure?',
      answer: 'Yes, we use bank-level encryption and work with certified payment processors. We never store your full credit card information on our servers.'
    },
    {
      category: 'Safety & Security',
      question: 'What if a campaign seems suspicious?',
      answer: 'Please report any suspicious campaigns immediately using the "Report" button on the campaign page or contact our support team directly.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions or get in touch with our support team.
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Help Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <Badge className={category.color}>{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition-colors">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">Live Chat</div>
                    <div className="text-sm text-blue-700">Available 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer transition-colors">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-green-900">Email Support</div>
                    <div className="text-sm text-green-700">support@charityconnect.org</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 cursor-pointer transition-colors">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium text-purple-900">Phone Support</div>
                    <div className="text-sm text-purple-700">+1 (555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} 
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <Badge variant="outline" className="mt-1 text-xs">
                            {faq.category}
                          </Badge>
                          <span className="font-medium text-gray-900">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-16">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {filteredFAQs.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any help articles matching your search. Try different keywords or browse our categories.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;