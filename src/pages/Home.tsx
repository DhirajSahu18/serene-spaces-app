import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BarChart3, FileText, Phone, Sparkles, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden wellness-gradient py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center">
              <Heart className="w-16 h-16 text-white/90" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Your Mental Wellness
              <span className="block text-white/90">Journey Starts Here</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Take charge of your mental health with our supportive tools designed to help you 
              understand, track, and improve your emotional well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-warm"
              >
                <Link to="/questionnaire">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Start Check-In
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/journal">
                  <FileText className="w-5 h-5 mr-2" />
                  Begin Journaling
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-wellness-calm mb-4">
              Tools for Your Wellness Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to support your mental health in one place
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mental Health Check-In */}
            <Card className="wellness-card group hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 wellness-peaceful rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-wellness-calm" />
                </div>
                <CardTitle className="text-wellness-calm">Mental Health Check-In</CardTitle>
                <CardDescription>
                  Take a brief assessment to understand your current mental state
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 10 carefully selected questions</li>
                  <li>• Personalized insights and feedback</li>
                  <li>• Track your progress over time</li>
                  <li>• Evidence-based assessments</li>
                </ul>
                <Button asChild className="w-full bg-primary">
                  <Link to="/questionnaire">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Personal Journal */}
            <Card className="wellness-card group hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 wellness-supportive rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-wellness-growth" />
                </div>
                <CardTitle className="text-wellness-growth">Personal Journal</CardTitle>
                <CardDescription>
                  Express your thoughts and track your emotional journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Daily mood tracking</li>
                  <li>• Private and secure entries</li>
                  <li>• Reflection prompts</li>
                  <li>• Track patterns over time</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/journal">Start Writing</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Support Resources */}
            <Card className="wellness-card group hover:shadow-soft transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 bg-wellness-hope/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-wellness-hope" />
                </div>
                <CardTitle className="text-wellness-hope">Support Resources</CardTitle>
                <CardDescription>
                  Access professional help and crisis support when you need it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 24/7 crisis helplines</li>
                  <li>• Mental health organizations</li>
                  <li>• Online therapy platforms</li>
                  <li>• Local support groups</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/support">View Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-wellness-calm mb-4">
                Your Privacy & Safety Matter
              </h2>
              <p className="text-xl text-muted-foreground">
                We're committed to providing a safe, private space for your mental health journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="wellness-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Private & Secure</CardTitle>
                      <CardDescription>Your data stays on your device</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All your journal entries and assessment results are stored locally on your device. 
                    We never collect or share your personal information.
                  </p>
                </CardContent>
              </Card>

              <Card className="wellness-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wellness-growth/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-wellness-growth" />
                    </div>
                    <div>
                      <CardTitle>Evidence-Based</CardTitle>
                      <CardDescription>Built on proven research</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our assessments and recommendations are based on established psychological 
                    research and validated mental health frameworks.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="wellness-card mt-8 border-destructive/20 bg-destructive/5">
              <CardContent className="pt-6">
                <p className="text-center text-sm text-muted-foreground">
                  <strong className="text-destructive">Important:</strong> This app is not a substitute 
                  for professional medical advice. If you're experiencing a mental health emergency, 
                  please contact emergency services or a crisis helpline immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;