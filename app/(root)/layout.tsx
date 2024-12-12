"use client";

import MobileNav from "@/components/shared/MobileNav";
import Overlay from "@/components/shared/Overlay";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true); // Manage visibility of the overlay

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      {showOverlay && (
        <Overlay
          preLinkText="This site is not currently in production mode. For more details and to test all of its features locally, please visit and refer to my "
          linkText="GitHub repository"
          linkUrl="https://github.com/cyy963/AI-SaaS-platform-Imaginify"
          onClose={toggleOverlay}
        />
      )}
      <Toaster />
    </main>
  );
};

export default Layout;
