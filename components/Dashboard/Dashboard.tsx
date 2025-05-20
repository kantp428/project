'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import OverviewPage from '@/components/Dashboard/OverviewPage';

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <DashboardLayout
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      header={<DashboardHeader handleDrawerToggle={handleDrawerToggle} />}
    >
      <OverviewPage />
    </DashboardLayout>
  );
}