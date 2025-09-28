import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import App1 from "../../../assesment2/project/src/App1";


// Reusable iframe component
const IframePage = ({ url, title }) => (
  <div className="w-full h-screen">
    <iframe
      src={url}
      title={title}
      className="w-full h-full border-none"
    />
  </div>
);

// Your pages with iframe links
const Jobs = () => (
  <IframePage url="https://jobs-gules-six.vercel.app/" title="Jobs" />
);

const Candidates = () => (
  <IframePage url="https://candidates-ivory.vercel.app/" title="Candidates" />
);

const Assessments = () => (
  <IframePage url="https://assessments-cyan.vercel.app/" title="Assessments" />
);

const Chatbot = () => (
  <IframePage url="https://chatbot-sandy-two.vercel.app/" title="Chatbot" />
);

const Analytics = () => (
  <IframePage url="https://dive-hr-charts.vercel.app/" title="Analytics" />
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
