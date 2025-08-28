import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Download,
  Calendar,
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const PlatformReports: React.FC = () => {
  const [timeframe, setTimeframe] = useState('30d');

  const overviewStats = [
    { 
      icon: DollarSign, 
      label: "Total Platform Revenue", 
      value: "$47,250", 
      change: "+15.2%", 
      trend: "up",
      color: "text-green-600" 
    },
    { 
      icon: Users, 
      label: "Active Users", 
      value: "15,892", 
      change: "+8.7%", 
      trend: "up",
      color: "text-blue-600" 
    },
    { 
      icon: Target, 
      label: "Successful Campaigns", 
      value: "1,087", 
      change: "+12.3%", 
      trend: "up",
      color: "text-purple-600" 
    },
    { 
      icon: TrendingUp, 
      label: "Platform Growth", 
      value: "23.4%", 
      change: "+2.1%", 
      trend: "up",
      color: "text-orange-600" 
    }
  ];

  const campaignMetrics = {
    totalCampaigns: 1247,
    activeCampaigns: 234,
    completedCampaigns: 1087,
    averageGoal: 45000,
    averageRaised: 38500,
    successRate: 87.3,
    averageDuration: 45,
    topCategories: [
      { name: "Health & Medical", count: 342, percentage: 27.4 },
      { name: "Education", count: 298, percentage: 23.9 },
      { name: "Emergency Relief", count: 187, percentage: 15.0 },
      { name: "Environment", count: 156, percentage: 12.5 },
      { name: "Animals & Wildlife", count: 134, percentage: 10.7 },
      { name: "Other", count: 130, percentage: 10.4 }
    ]
  };

  const userMetrics = {
    totalUsers: 15892,
    donors: 14567,
    campaignLeaders: 892,
    admins: 12,
    newUsersThisMonth: 1247,
    activeUsersThisMonth: 8934,
    userRetentionRate: 78.5,
    averageSessionDuration: "12m 34s",
    topCountries: [
      { name: "United States", users: 7146, percentage: 45.0 },
      { name: "Canada", users: 2862, percentage: 18.0 },
      { name: "United Kingdom", users: 1906, percentage: 12.0 },
      { name: "Australia", users: 1271, percentage: 8.0 },
      { name: "Germany", users: 953, percentage: 6.0 },
      { name: "Others", users: 1754, percentage: 11.0 }
    ]
  };

  const financialMetrics = {
    totalRaised: 2450000,
    platformFees: 71050,
    processingFees: 48500,
    netRevenue: 119550,
    averageDonation: 53.67,
    totalDonations: 45678,
    refundRate: 1.2,
    chargebackRate: 0.3,
    monthlyGrowth: 15.2
  };

  const securityMetrics = {
    totalReports: 89,
    resolvedReports: 76,
    pendingReports: 13,
    fraudAttempts: 23,
    blockedTransactions: 156,
    suspendedAccounts: 12,
    verifiedCampaigns: 1198,
    flaggedCampaigns: 49
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Platform Reports</h1>
              <p className="text-gray-600">Comprehensive analytics and insights for the platform.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <p className={`text-xs mt-1 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last period
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg bg-gray-50`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Campaign Analytics */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Campaign Overview</CardTitle>
                  <CardDescription>
                    Key metrics for all campaigns on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {campaignMetrics.totalCampaigns}
                      </div>
                      <div className="text-sm text-gray-600">Total Campaigns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {campaignMetrics.activeCampaigns}
                      </div>
                      <div className="text-sm text-gray-600">Active</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {campaignMetrics.completedCampaigns}
                      </div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">
                        {campaignMetrics.successRate}%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {campaignMetrics.topCategories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${category.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{category.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Average Goal</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${campaignMetrics.averageGoal.toLocaleString()}
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Average Raised</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${campaignMetrics.averageRaised.toLocaleString()}
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Average Duration</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {campaignMetrics.averageDuration} days
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* User Analytics */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>User Overview</CardTitle>
                  <CardDescription>
                    User statistics and demographics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {userMetrics.totalUsers.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {userMetrics.donors.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Donors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {userMetrics.campaignLeaders}
                      </div>
                      <div className="text-sm text-gray-600">Leaders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">
                        {userMetrics.userRetentionRate}%
                      </div>
                      <div className="text-sm text-gray-600">Retention</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {userMetrics.topCountries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{country.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${country.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{country.users.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">New Users (30d)</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {userMetrics.newUsersThisMonth.toLocaleString()}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Users (30d)</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {userMetrics.activeUsersThisMonth.toLocaleString()}
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {userMetrics.averageSessionDuration}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Financial Analytics */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Raised</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${(financialMetrics.totalRaised / 1000000).toFixed(1)}M
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Platform Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${financialMetrics.netRevenue.toLocaleString()}
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Donation</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${financialMetrics.averageDonation}
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {financialMetrics.monthlyGrowth}%
                      </p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Platform Fees (2.9%)</span>
                      <span className="font-semibold">${financialMetrics.platformFees.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Processing Fees</span>
                      <span className="font-semibold">${financialMetrics.processingFees.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Net Revenue</span>
                        <span>${financialMetrics.netRevenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transaction Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Donations</span>
                      <span className="font-semibold">{financialMetrics.totalDonations.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Refund Rate</span>
                      <span className="font-semibold text-yellow-600">{financialMetrics.refundRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Chargeback Rate</span>
                      <span className="font-semibold text-green-600">{financialMetrics.chargebackRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Analytics */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Reports</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {securityMetrics.totalReports}
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Resolved Reports</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {securityMetrics.resolvedReports}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Fraud Attempts</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {securityMetrics.fraudAttempts}
                      </p>
                    </div>
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Blocked Transactions</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {securityMetrics.blockedTransactions}
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Report Resolution Rate</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={(securityMetrics.resolvedReports / securityMetrics.totalReports) * 100} className="w-20 h-2" />
                        <span className="font-semibold">
                          {Math.round((securityMetrics.resolvedReports / securityMetrics.totalReports) * 100)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Campaign Verification Rate</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={(securityMetrics.verifiedCampaigns / (securityMetrics.verifiedCampaigns + securityMetrics.flaggedCampaigns)) * 100} className="w-20 h-2" />
                        <span className="font-semibold">
                          {Math.round((securityMetrics.verifiedCampaigns / (securityMetrics.verifiedCampaigns + securityMetrics.flaggedCampaigns)) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Suspended Accounts</span>
                      <span className="font-semibold text-red-600">{securityMetrics.suspendedAccounts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Flagged Campaigns</span>
                      <span className="font-semibold text-yellow-600">{securityMetrics.flaggedCampaigns}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending Reports</span>
                      <span className="font-semibold text-orange-600">{securityMetrics.pendingReports}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Analytics */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">System Uptime</p>
                      <p className="text-2xl font-bold text-gray-900">99.8%</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Response Time</p>
                      <p className="text-2xl font-bold text-gray-900">245ms</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Error Rate</p>
                      <p className="text-2xl font-bold text-gray-900">0.02%</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  System performance and reliability metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                    <p>Performance charts would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlatformReports;