import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, Eye, Clock } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy & Policies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your privacy and security are our top priorities. Learn how we protect your information and ensure safe, transparent charitable giving.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="cookie">Cookie Policy</TabsTrigger>
            <TabsTrigger value="community">Community Guidelines</TabsTrigger>
          </TabsList>

          {/* Privacy Policy */}
          <TabsContent value="privacy" className="mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>Privacy Policy</span>
                    </CardTitle>
                    <CardDescription>Last updated: December 15, 2024</CardDescription>
                  </div>
                  <Badge variant="outline">Version 2.1</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Personal Information:</strong> Name, email address, phone number, and billing address when you create an account or make a donation.</p>
                    <p><strong>Payment Information:</strong> Credit card details and billing information processed through secure, encrypted payment systems.</p>
                    <p><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited and actions taken.</p>
                    <p><strong>Device Information:</strong> Browser type, IP address, and device identifiers for security and analytics purposes.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Process donations and provide receipts</p>
                    <p>• Send updates about campaigns you've supported</p>
                    <p>• Improve our platform and user experience</p>
                    <p>• Detect and prevent fraud or suspicious activities</p>
                    <p>• Comply with legal and regulatory requirements</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                  <p className="text-gray-600">
                    We never sell your personal information. We only share information with campaign organizers (donation amounts and public messages if you choose to leave them), payment processors for transaction processing, and law enforcement when required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Access and download your personal data</p>
                    <p>• Correct inaccurate information</p>
                    <p>• Delete your account and associated data</p>
                    <p>• Opt out of marketing communications</p>
                    <p>• Object to certain data processing activities</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                  <p className="text-gray-600">
                    We use industry-standard encryption, secure servers, and regular security audits to protect your information. All payment processing is handled by PCI DSS compliant providers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Terms of Service */}
          <TabsContent value="terms" className="mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Terms of Service</span>
                    </CardTitle>
                    <CardDescription>Last updated: December 15, 2024</CardDescription>
                  </div>
                  <Badge variant="outline">Version 2.1</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                  <p className="text-gray-600">
                    By accessing and using CharityConnect, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">User Responsibilities</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Provide accurate and truthful information</p>
                    <p>• Use the platform only for lawful purposes</p>
                    <p>• Respect the rights and privacy of other users</p>
                    <p>• Report suspicious or fraudulent activities</p>
                    <p>• Maintain the security of your account credentials</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Donations and Refunds</h3>
                  <p className="text-gray-600">
                    All donations are final and non-refundable except in cases of technical errors or fraud. Campaign organizers are responsible for using donations as described in their campaigns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Platform Fees</h3>
                  <p className="text-gray-600">
                    CharityConnect charges a 2.9% + $0.30 processing fee on each donation to cover payment processing and platform maintenance costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cookie Policy */}
          <TabsContent value="cookie" className="mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>Cookie Policy</span>
                    </CardTitle>
                    <CardDescription>Last updated: December 15, 2024</CardDescription>
                  </div>
                  <Badge variant="outline">Version 1.3</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What Are Cookies</h3>
                  <p className="text-gray-600">
                    Cookies are small text files stored on your device when you visit our website. They help us provide you with a better user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">Required for the website to function properly.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand user interactions.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Guidelines */}
          <TabsContent value="community" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
                <CardDescription>Guidelines for respectful and safe community interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Be Respectful</h3>
                  <p className="text-gray-600">
                    Treat all community members with respect and kindness. Harassment, discrimination, or offensive behavior will not be tolerated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Be Honest</h3>
                  <p className="text-gray-600">
                    Always provide truthful information in campaigns and communications. Misleading or false information undermines trust in our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Policies;