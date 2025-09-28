import { motion } from "framer-motion";
import { DashboardCards } from "./DashboardCards";
import { Sparkles } from "lucide-react";

export function DashboardHome() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative px-6 py-12 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Welcome Back
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Choose from your applications below to get started with your workflow
          </motion.p>

          {/* Floating particles effect */}
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div className="absolute top-20 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-10 left-1/3 w-1.5 h-1.5 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </motion.div>

      {/* Dashboard Cards */}
      <DashboardCards />
    </div>
  );
}