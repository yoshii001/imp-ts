import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  Target, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Settings,
  BarChart3,
  FileText,
  UserCheck,
  Flag
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { icon: Target, label: "Total Campaigns", value: "1,247", change: "+23 this week", color: "text-blue-600" },
    { icon: Users, label: "Active Users", value: "15,892", change: "+312 this week", color: "text-green-600" },
    { icon: DollarSign, label: "Platform Revenue", value: "$47,250", change: "+8.5% this month", color: "text-purple-600" },
    { icon: TrendingUp, label: "Success Rate", value: "87.3%", change: "+2.1% this month", color: "text-orange-600" }
  ];

  const pendingCampaigns = [
    {
      id: 1,
      title: "Medical Treatment for Children",
      organizer: "Hope Foundation",
      goal: 25000,
      submitted: "2 hours ago",
      status: "pending",
      priority: "high",
      category: "Health"
    },
    {
      id: 2,
      title: "Disaster Relief Fund",
      organizer: "Emergency Response Team",
      goal: 100000,
      submitted: "5 hours ago",
      status: "under_review",
      priority: "urgent",
      category: "Emergency"
    },
    {
      id: 3,
      title: "School Building Project",
      organizer: "Education First",
      goal: 75000,
      submitted: "1 day ago",
      status: "pending",
      priority: "medium",
      category: "Education"
    }
  ];

  const recentReports = [
    {
      id: 1,
      type: "campaign",
      title: "Suspicious donation patterns",
      reporter: "System Alert",
      campaign: "Clean Water Project",
      severity: "high",
      time: "30 minutes ago"
    },
    {
      id: 2,
      type: "user",
      title: "Inappropriate content in campaign",
      reporter: "User Report",
      campaign: "Animal Rescue Fund",
      severity: "medium",
      time: "2 hours ago"
    },
    {
      id: 3,
      type: "fraud",
      title: "Potential duplicate campaign",
      reporter: "AI Detection",
      campaign: "Emergency Relief",
      severity: "high",
      time: "4 hours ago"
    }
  ];

  const platformMetrics = {
    totalRaised: 2450000,
    totalDonations: 45678,
    averageDonation: 53.67,
    successfulCampaigns: 1087,
    activeCampaigns: 234,
    totalUsers: 15892,
    campaignLeaders: 892,
    donors: 14567
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-indigo-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Platform overview and management tools.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link to="/admin/reports">
                  <FileText className="h-4 w-4 mr-2" />
                  Reports
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/admin/users">
                  <Users className="h-4 w-4 mr-2" />
                  User Management
                </Link>
              </Button>
              <Button asChild>
                <Link to="/admin/campaigns">
                  <Target className="h-4 w-4 mr-2" />
                  Campaign Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-2 rounded-lg bg-gray-50`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Reviews */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span>Pending Campaign Reviews</span>
                  </CardTitle>
                  <Badge className="bg-orange-100 text-orange-800">
                    {pendingCampaigns.length} pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                          <Badge className={getPriorityColor(campaign.priority)}>
                            {campaign.priority}
                          </Badge>
                          <Badge variant="outline">{campaign.category}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>by {campaign.organizer}</span>
                          <span>Goal: ${campaign.goal.toLocaleString()}</span>
                          <span>Submitted {campaign.submitted}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <AlertTriangle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Flag className="h-5 w-5 text-red-600" />
                    <span>Recent Reports</span>
                  </CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/admin/reports">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="p-2 rounded-lg bg-red-50">
                        <Flag className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{report.title}</h4>
                          <Badge className={getSeverityColor(report.severity)}>
                            {report.severity}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Campaign: {report.campaign}</p>
                          <p>Reporter: {report.reporter} • {report.time}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Investigate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Platform Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98.7%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Campaign Approval Rate</span>
                    <span className="text-sm font-semibold">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Satisfaction</span>
                    <span className="text-sm font-semibold">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fraud Detection</span>
                    <span className="text-sm font-semibold">99.2%</span>
                  </div>
                  <Progress value={99} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${(platformMetrics.totalRaised / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-xs text-gray-600">Total Raised</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {(platformMetrics.totalDonations / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-600">Donations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {platformMetrics.successfulCampaigns}
                    </div>
                    <div className="text-xs text-gray-600">Successful</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      {platformMetrics.activeCampaigns}
                    </div>
                    <div className="text-xs text-gray-600">Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link to="/admin/campaigns">
                    <Target className="mr-2 h-4 w-4" />
                    Review Campaigns
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/admin/users">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Manage Users
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/admin/reports">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Reports
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Platform Settings
                </Button>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>System Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900 text-sm">High Traffic</h4>
                  <p className="text-xs text-yellow-700 mt-1">
                    Server load is at 85%. Consider scaling resources.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 text-sm">Maintenance Scheduled</h4>
                  <p className="text-xs text-blue-700 mt-1">
                    System maintenance planned for Sunday 2 AM UTC.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;