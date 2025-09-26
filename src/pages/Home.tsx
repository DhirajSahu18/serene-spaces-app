import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BarChart3, FileText, Phone, Sparkles, Shield, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-soft/5">
      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-12 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-20 h-20 mx-auto mb-6 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-wellness-calm bg-clip-text text-transparent">
            MindfulSpace
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Your personal sanctuary for mental wellness. Track your mood, reflect through journaling, 
            and access support when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/questionnaire">
              <Button size="lg" className="btn-vibrant group">
                Start Your Journey 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/journal">
              <Button variant="outline" size="lg" className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                Open Journal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Everything you need for mental wellness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Mental Health Check-in",
                description: "Regular assessments to understand your current mental state with personalized insights.",
                color: "text-wellness-calm",
                bgColor: "bg-wellness-calm/10",
                link: "/questionnaire"
              },
              {
                icon: FileText,
                title: "Personal Journal",
                description: "Express your thoughts, track your mood, and reflect on your daily experiences.",
                color: "text-wellness-growth",
                bgColor: "bg-wellness-growth/10",
                link: "/journal"
              },
              {
                icon: Phone,
                title: "Support Resources",
                description: "Access to professional help, crisis hotlines, and trusted mental health resources.",
                color: "text-wellness-support",
                bgColor: "bg-wellness-support/10",
                link: "/support"
              }
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="wellness-card group cursor-pointer"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Trust Section */}
      <section className="px-4 py-12 lg:px-6 bg-primary-soft/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="wellness-card max-w-2xl mx-auto">
            <Shield className="w-12 h-12 mx-auto mb-6 text-wellness-support" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-wellness-support">
              Your Privacy Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All your data stays private and secure. We store everything locally on your device, 
              so your personal thoughts and feelings remain completely confidential.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-wellness-growth">
                <Sparkles className="w-4 h-4" />
                <span>Local storage only</span>
              </div>
              <div className="flex items-center gap-2 text-wellness-growth">
                <Sparkles className="w-4 h-4" />
                <span>No data sharing</span>
              </div>
              <div className="flex items-center gap-2 text-wellness-growth">
                <Sparkles className="w-4 h-4" />
                <span>Complete anonymity</span>
              </div>
              <div className="flex items-center gap-2 text-wellness-growth">
                <Sparkles className="w-4 h-4" />
                <span>Your device, your data</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;