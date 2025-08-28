import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Pause, 
  Play, 
  Trash2,
  MoreHorizontal,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  DollarSign
} from 'lucide-react';

const MyCampaigns: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const campaigns = [
    {
      id: 1,
      title: "Clean Water for Rural Communities",
      description: "Providing clean drinking water access to 10,000 people in remote villages.",
      status: "active",
      raised: 75420,
      goal: 100000,
      donors: 1247,
      daysLeft: 23,
      created: "2023-12-01",
      image: "/images/CleanWater.jpg",
      category: "Health",
      engagement: 94,
      lastUpdate: "2 days ago"
    },
    {
      id: 2,
      title: "Education for Every Child",
      description: "Building schools and providing educational resources for underprivileged children.",
      status: "active",
      raised: 42350,
      goal: 75000,
      donors: 892,
      daysLeft: 45,
      created: "2023-11-15",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
      category: "Education",
      engagement: 87,
      lastUpdate: "1 week ago"
    },
    {
      id: 3,
      title: "Emergency Food Relief",
      description: "Providing emergency food supplies to families affected by natural disasters.",
      status: "completed",
      raised: 50000,
      goal: 50000,
      donors: 567,
      daysLeft: 0,
      created: "2023-10-01",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop",
      category: "Emergency",
      engagement: 92,
      lastUpdate: "Completed"
    },
    {
      id: 4,
      title: "Animal Shelter Support",
      description: "Supporting local animal shelters with food, medical care, and facility improvements.",
      status: "paused",
      raised: 15680,
      goal: 30000,
      donors: 334,
      daysLeft: 89,
      created: "2023-09-20",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop",
      category: "Animals",
      engagement: 76,
      lastUpdate: "3 weeks ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'paused': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case 'raised':
        return b.raised - a.raised;
      case 'donors':
        return b.donors - a.donors;
      case 'ending':
        return a.daysLeft - b.daysLeft;
      default:
        return new Date(b.created).getTime() - new Date(a.created).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Campaigns</h1>
              <p className="text-gray-600">Manage and track all your campaigns in one place.</p>
            </div>
            <Button asChild>
              <Link to="/leader/create">
                <Plus className="h-4 w-4 mr-2" />
                Create New Campaign
              </Link>
            </Button>
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
                  placeholder="Search campaigns..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="raised">Most Raised</SelectItem>
                  <SelectItem value="donors">Most Donors</SelectItem>
                  <SelectItem value="ending">Ending Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedCampaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={getStatusColor(campaign.status)}>
                    {getStatusIcon(campaign.status)}
                    <span className="ml-1 capitalize">{campaign.status}</span>
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    {campaign.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{campaign.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{campaign.description}</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        ${campaign.raised.toLocaleString()} raised
                      </span>
                      <span className="text-sm text-gray-500">
                        ${campaign.goal.toLocaleString()} goal
                      </span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">{campaign.donors}</span>
                      </div>
                      <div className="text-gray-500">donors</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">
                          {campaign.status === 'completed' ? '✓' : campaign.daysLeft}
                        </span>
                      </div>
                      <div className="text-gray-500">
                        {campaign.status === 'completed' ? 'done' : 'days left'}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <span className="font-semibold">{campaign.engagement}%</span>
                      </div>
                      <div className="text-gray-500">engagement</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Last update: {campaign.lastUpdate}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={`/campaigns/${campaign.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    {campaign.status === 'active' ? (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4" />
                      </Button>
                    ) : campaign.status === 'paused' ? (
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedCampaigns.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || statusFilter !== 'all' 
                  ? "Try adjusting your search terms or filters."
                  : "You haven't created any campaigns yet."}
              </p>
              {!searchQuery && statusFilter === 'all' && (
                <Button asChild>
                  <Link to="/leader/create">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Campaign
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyCampaigns;