'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
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
      {children}
    </DashboardLayout>
  );
}
