import { useState } from "react";
import { Search, Bell, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Top Navbar */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 h-16 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="flex h-full items-center justify-between px-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-muted/50"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search..."
                className="w-64 pl-10 bg-muted/30 border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative p-2 hover:bg-muted/50"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-muted/50">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover/95 backdrop-blur-xl border-border/50">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {sidebarOpen && (
            <DashboardSidebar />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <motion.main 
          className="flex-1 transition-all duration-300 ease-in-out"
          layout
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}