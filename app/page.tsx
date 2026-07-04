"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Users, 
  CalendarCheck, 
  Wallet, 
  ShieldCheck, 
  Sparkles, 
  BarChart3,
  Zap
} from "lucide-react";

// Animation Variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="HRMind Logo" width={28} height={28} className="rounded-sm" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#002855] dark:text-blue-100">HR</span>
              <span className="text-[#0066FF]">Mind</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <Link href="#testimonials" className="hover:text-foreground transition-colors">Customers</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="font-semibold">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Subtle Background Gradients */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-background to-background dark:from-blue-900/20" />
          
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-100 dark:border-blue-800"
            >
              <Sparkles className="w-4 h-4" />
              <span>The Next Generation of HR Management</span>
            </motion.div>

            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight"
            >
              Intelligent HR for the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002855] to-[#0066FF] dark:from-blue-400 dark:to-blue-600">
                Modern Workforce.
              </span>
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Digitize your entire employee lifecycle. Streamline payroll, automate attendance, and empower your team with a beautiful, unified digital workspace.
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/login">
                <Button size="lg" className="h-12 px-8 text-base bg-[#0066FF] hover:bg-[#0052CC] text-white w-full sm:w-auto">
                  Start your free trial <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Everything you need to manage your team</h2>
              <p className="mt-4 text-muted-foreground">
                Replace fragmented spreadsheets with a centralized, intelligent platform designed for speed and scalability.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-80">
            <Image src="/logo.png" alt="HRMind Logo" width={24} height={24} />
            <span className="font-semibold text-lg">HRMind</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} HRMind Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Data
const features = [
  {
    icon: Users,
    title: "Employee Directory",
    description: "A centralized, searchable database for all employee records, documents, and organizational structures."
  },
  {
    icon: CalendarCheck,
    title: "Time & Attendance",
    description: "Automated check-ins, working hour calculations, and seamless leave request workflows."
  },
  {
    icon: Wallet,
    title: "Automated Payroll",
    description: "Generate accurate salary slips with automated deductions, allowances, and tax calculations."
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description: "Enterprise-grade security with granular permissions for Admins, HR Officers, and Employees."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Beautiful, interactive dashboards providing instant insights into workforce metrics and trends."
  },
  {
    icon: Zap,
    title: "Cloud Synchronized",
    description: "Built on a lightning-fast serverless architecture ensuring your data is accessible anywhere, anytime."
  }
];