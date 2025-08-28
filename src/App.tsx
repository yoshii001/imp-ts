import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Help from './pages/public/Help';
import Policies from './pages/public/Policies';
import Contact from './pages/public/Contact';
import CampaignList from './pages/public/CampaignList';
import CampaignDetails from './pages/public/CampaignDetails';
import Donate from './pages/public/Donate';
import DonationConfirmation from './pages/public/DonationConfirmation';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Donor Pages
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorProfile from './pages/donor/DonorProfile';
import DonorNotifications from './pages/donor/DonorNotifications';
import DonorLeaderboard from './pages/donor/DonorLeaderboard';

// Campaign Leader Pages
import LeaderDashboard from './pages/leader/LeaderDashboard';
import MyCampaigns from './pages/leader/MyCampaigns';
import CreateCampaign from './pages/leader/CreateCampaign';
import LeaderAnalytics from './pages/leader/LeaderAnalytics';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import CampaignManagement from './pages/admin/CampaignManagement';
import UserManagement from './pages/admin/UserManagement';
import PlatformReports from './pages/admin/PlatformReports';

import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Coming Soon Component for placeholder pages
const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
      <p className="text-gray-500">This feature is currently under development.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/campaigns" element={<CampaignList />} />
                <Route path="/campaigns/:id" element={<CampaignDetails />} />
                <Route path="/donate/:id" element={<Donate />} />
                <Route path="/donation-confirmation/:id" element={<DonationConfirmation />} />
                <Route path="/impact" element={<ComingSoon title="Impact Report" />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Donor Routes */}
                <Route path="/donor/dashboard" element={<DonorDashboard />} />
                <Route path="/donor/profile" element={<DonorProfile />} />
                <Route path="/donor/notifications" element={<DonorNotifications />} />
                <Route path="/donor/leaderboard" element={<DonorLeaderboard />} />
                
                {/* Campaign Leader Routes */}
                <Route path="/leader/dashboard" element={<LeaderDashboard />} />
                <Route path="/leader/campaigns" element={<MyCampaigns />} />
                <Route path="/leader/create" element={<CreateCampaign />} />
                <Route path="/leader/analytics" element={<LeaderAnalytics />} />
                
                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/campaigns" element={<CampaignManagement />} />
                <Route path="/admin/users" element={<UserManagement />} />
                <Route path="/admin/reports" element={<PlatformReports />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;