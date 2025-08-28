import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Eye, 
  Ban, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  MoreHorizontal,
  UserCheck,
  Shield,
  Users,
  Crown,
  Calendar,
  DollarSign
} from 'lucide-react';

const UserManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      role: "donor",
      status: "active",
      verified: true,
      joinDate: "2023-12-15",
      lastActive: "2 hours ago",
      totalDonated: 2450,
      campaignsSupported: 12,
      flags: 0
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      role: "campaign-leader",
      status: "active",
      verified: true,
      joinDate: "2023-11-20",
      lastActive: "1 day ago",
      totalRaised: 167000,
      activeCampaigns: 3,
      flags: 0
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      role: "donor",
      status: "active",
      verified: false,
      joinDate: "2024-01-10",
      lastActive: "5 minutes ago",
      totalDonated: 890,
      campaignsSupported: 8,
      flags: 0
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      role: "admin",
      status: "active",
      verified: true,
      joinDate: "2023-01-15",
      lastActive: "30 minutes ago",
      totalDonated: 0,
      campaignsSupported: 0,
      flags: 0
    },
    {
      id: 5,
      name: "Suspicious User",
      email: "suspicious@fake.com",
      avatar: null,
      role: "donor",
      status: "suspended",
      verified: false,
      joinDate: "2024-01-14",
      lastActive: "3 days ago",
      totalDonated: 50,
      campaignsSupported: 1,
      flags: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'banned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'campaign-leader': return 'bg-blue-100 text-blue-800';
      case 'donor': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Crown className="h-4 w-4" />;
      case 'campaign-leader': return <Shield className="h-4 w-4" />;
      case 'donor': return <Users className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleSuspendUser = (userId: number) => {
    console.log('Suspending user:', userId);
  };

  const handleActivateUser = (userId: number) => {
    console.log('Activating user:', userId);
  };

  const handleVerifyUser = (userId: number) => {
    console.log('Verifying user:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
              <p className="text-gray-600">Manage users, roles, and account statuses.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-blue-100 text-blue-800">
                {users.length} total users
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.filter(u => u.status === 'active').length}
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
                  <p className="text-sm font-medium text-gray-600">Campaign Leaders</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.filter(u => u.role === 'campaign-leader').length}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Flagged Users</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.filter(u => u.flags > 0).length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="donor">Donors</SelectItem>
                  <SelectItem value="campaign-leader">Campaign Leaders</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="banned">Banned</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="leaders">Campaign Leaders</TabsTrigger>
            <TabsTrigger value="flagged">Flagged Users</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>
                  Complete list of all platform users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Stats</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{user.name}</span>
                                {user.verified && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                                {user.flags > 0 && (
                                  <Badge className="bg-red-100 text-red-800">
                                    {user.flags} flags
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleColor(user.role)}>
                            {getRoleIcon(user.role)}
                            <span className="ml-1 capitalize">{user.role.replace('-', ' ')}</span>
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>Joined: {user.joinDate}</div>
                            <div className="text-gray-500">Last active: {user.lastActive}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {user.role === 'donor' && (
                              <>
                                <div>Donated: ${user.totalDonated}</div>
                                <div className="text-gray-500">{user.campaignsSupported} campaigns</div>
                              </>
                            )}
                            {user.role === 'campaign-leader' && (
                              <>
                                <div>Raised: ${user.totalRaised?.toLocaleString()}</div>
                                <div className="text-gray-500">{user.activeCampaigns} active</div>
                              </>
                            )}
                            {user.role === 'admin' && (
                              <div className="text-gray-500">Admin user</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>User Details: {user.name}</DialogTitle>
                                  <DialogDescription>
                                    Complete user information and activity
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-semibold mb-2">Basic Information</h4>
                                      <div className="space-y-2 text-sm">
                                        <div><span className="text-gray-600">Name:</span> {user.name}</div>
                                        <div><span className="text-gray-600">Email:</span> {user.email}</div>
                                        <div><span className="text-gray-600">Role:</span> {user.role}</div>
                                        <div><span className="text-gray-600">Status:</span> {user.status}</div>
                                        <div><span className="text-gray-600">Verified:</span> {user.verified ? 'Yes' : 'No'}</div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold mb-2">Activity</h4>
                                      <div className="space-y-2 text-sm">
                                        <div><span className="text-gray-600">Joined:</span> {user.joinDate}</div>
                                        <div><span className="text-gray-600">Last Active:</span> {user.lastActive}</div>
                                        <div><span className="text-gray-600">Flags:</span> {user.flags}</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            {user.status === 'active' ? (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleSuspendUser(user.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Ban className="h-4 w-4" />
                              </Button>
                            ) : (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleActivateUser(user.id)}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            {!user.verified && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleVerifyUser(user.id)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                <UserCheck className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donors" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredUsers.filter(u => u.role === 'donor').map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{user.name}</h3>
                          {user.verified && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{user.email}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-green-600">
                              ${user.totalDonated}
                            </div>
                            <div className="text-gray-600">Total Donated</div>
                          </div>
                          <div>
                            <div className="font-semibold text-blue-600">
                              {user.campaignsSupported}
                            </div>
                            <div className="text-gray-600">Campaigns</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaders" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredUsers.filter(u => u.role === 'campaign-leader').map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{user.name}</h3>
                          {user.verified && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{user.email}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-green-600">
                              ${user.totalRaised?.toLocaleString()}
                            </div>
                            <div className="text-gray-600">Total Raised</div>
                          </div>
                          <div>
                            <div className="font-semibold text-blue-600">
                              {user.activeCampaigns}
                            </div>
                            <div className="text-gray-600">Active Campaigns</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flagged" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredUsers.filter(u => u.flags > 0).map((user) => (
                <Card key={user.id} className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-red-100">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{user.name}</h3>
                          <Badge className="bg-red-100 text-red-800">
                            {user.flags} flags
                          </Badge>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{user.email}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                          <span>Role: {user.role}</span>
                          <span>Joined: {user.joinDate}</span>
                          <span>Last active: {user.lastActive}</span>
                        </div>
                        <div className="flex space-x-3">
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            <Ban className="h-4 w-4 mr-2" />
                            Suspend User
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Investigate
                          </Button>
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4 mr-2" />
                            Contact User
                          </Button>
                        </div>
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

export default UserManagement;