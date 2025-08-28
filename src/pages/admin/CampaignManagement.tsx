import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle,
  Flag,
  MoreHorizontal,
  Calendar,
  DollarSign,
  Users,
  MessageCircle
} from 'lucide-react';

const CampaignManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = [
    {
      id: 1,
      title: "Medical Treatment for Children",
      organizer: {
        name: "Hope Foundation",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      description: "Providing life-saving medical treatment for children with rare diseases.",
      goal: 25000,
      raised: 0,
      donors: 0,
      status: "pending",
      category: "Health",
      submitted: "2024-01-15",
      priority: "high",
      flags: 0,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Disaster Relief Fund",
      organizer: {
        name: "Emergency Response Team",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      description: "Emergency relief for families affected by recent natural disasters.",
      goal: 100000,
      raised: 0,
      donors: 0,
      status: "under_review",
      category: "Emergency",
      submitted: "2024-01-14",
      priority: "urgent",
      flags: 0,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Clean Water for Rural Communities",
      organizer: {
        name: "Water for Life Foundation",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      description: "Providing clean drinking water access to 10,000 people in remote villages.",
      goal: 100000,
      raised: 75420,
      donors: 1247,
      status: "active",
      category: "Health",
      submitted: "2023-12-01",
      priority: "medium",
      flags: 0,
      image: "/images/CleanWater.jpg"
    },
    {
      id: 4,
      title: "Suspicious Campaign Title",
      organizer: {
        name: "Unknown User",
        avatar: null,
        verified: false
      },
      description: "This campaign has been flagged for suspicious activity and content.",
      goal: 50000,
      raised: 1200,
      donors: 15,
      status: "flagged",
      category: "Other",
      submitted: "2024-01-10",
      priority: "urgent",
      flags: 3,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'under_review': return <Eye className="h-4 w-4" />;
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'flagged': return <Flag className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.organizer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || campaign.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleApprove = (campaignId: number) => {
    console.log('Approving campaign:', campaignId);
  };

  const handleReject = (campaignId: number) => {
    console.log('Rejecting campaign:', campaignId);
  };

  const handleFlag = (campaignId: number) => {
    console.log('Flagging campaign:', campaignId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
              <p className="text-gray-600">Review, approve, and manage campaigns on the platform.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search campaigns or organizers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Health">Health & Medical</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Emergency">Emergency Relief</SelectItem>
                  <SelectItem value="Environment">Environment</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="review" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="review">Pending Review</TabsTrigger>
            <TabsTrigger value="active">Active Campaigns</TabsTrigger>
            <TabsTrigger value="flagged">Flagged</TabsTrigger>
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="review" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredCampaigns.filter(c => c.status === 'pending' || c.status === 'under_review').map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <div className="flex">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-48 h-32 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                            <Badge className={getStatusColor(campaign.status)}>
                              {getStatusIcon(campaign.status)}
                              <span className="ml-1 capitalize">{campaign.status.replace('_', ' ')}</span>
                            </Badge>
                            <Badge className={getPriorityColor(campaign.priority)}>
                              {campaign.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{campaign.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={campaign.organizer.avatar} alt={campaign.organizer.name} />
                                <AvatarFallback>{campaign.organizer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span>{campaign.organizer.name}</span>
                              {campaign.organizer.verified && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>Goal: ${campaign.goal.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Submitted: {campaign.submitted}</span>
                            </div>
                            {campaign.flags > 0 && (
                              <div className="flex items-center space-x-1 text-red-600">
                                <Flag className="h-4 w-4" />
                                <span>{campaign.flags} flags</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>Campaign Review: {campaign.title}</DialogTitle>
                              <DialogDescription>
                                Review campaign details and make approval decision
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Campaign Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><span className="text-gray-600">Title:</span> {campaign.title}</div>
                                    <div><span className="text-gray-600">Goal:</span> ${campaign.goal.toLocaleString()}</div>
                                    <div><span className="text-gray-600">Category:</span> {campaign.category}</div>
                                    <div><span className="text-gray-600">Organizer:</span> {campaign.organizer.name}</div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Review Notes</h4>
                                  <Textarea placeholder="Add review notes..." rows={4} />
                                </div>
                              </div>
                              <div className="flex justify-end space-x-3">
                                <Button variant="outline" onClick={() => handleReject(campaign.id)}>
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Reject
                                </Button>
                                <Button onClick={() => handleApprove(campaign.id)}>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button 
                          size="sm" 
                          onClick={() => handleApprove(campaign.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleReject(campaign.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleFlag(campaign.id)}
                          className="text-orange-600 hover:text-orange-700"
                        >
                          <Flag className="h-4 w-4 mr-2" />
                          Flag
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCampaigns.filter(c => c.status === 'active').map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <Badge className={getStatusColor(campaign.status)}>
                        {getStatusIcon(campaign.status)}
                        <span className="ml-1">Active</span>
                      </Badge>
                    </div>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-semibold text-green-600">
                            ${campaign.raised.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Raised</div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-600">
                            {campaign.donors}
                          </div>
                          <div className="text-gray-600">Donors</div>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-600">
                            {Math.round((campaign.raised / campaign.goal) * 100)}%
                          </div>
                          <div className="text-gray-600">Funded</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flagged" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredCampaigns.filter(c => c.status === 'flagged').map((campaign) => (
                <Card key={campaign.id} className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-red-100">
                        <Flag className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                          <Badge className="bg-red-100 text-red-800">
                            {campaign.flags} flags
                          </Badge>
                          <Badge className={getPriorityColor(campaign.priority)}>
                            {campaign.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{campaign.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                          <span>Organizer: {campaign.organizer.name}</span>
                          <span>Goal: ${campaign.goal.toLocaleString()}</span>
                          <span>Raised: ${campaign.raised.toLocaleString()}</span>
                        </div>
                        <div className="flex space-x-3">
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Investigate
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Review Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Organizer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(campaign.status)}>
                          {getStatusIcon(campaign.status)}
                          <span className="ml-1 capitalize">{campaign.status.replace('_', ' ')}</span>
                        </Badge>
                        {campaign.flags > 0 && (
                          <Badge className="bg-red-100 text-red-800">
                            {campaign.flags} flags
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-semibold text-green-600">
                            ${campaign.raised.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Raised</div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-600">
                            {campaign.donors}
                          </div>
                          <div className="text-gray-600">Donors</div>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-600">
                            {campaign.goal > 0 ? Math.round((campaign.raised / campaign.goal) * 100) : 0}%
                          </div>
                          <div className="text-gray-600">Funded</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CampaignManagement;