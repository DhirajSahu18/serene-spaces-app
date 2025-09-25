import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Heart, AlertTriangle, Clock, MapPin } from "lucide-react";

const CRISIS_HELPLINES = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    country: "USA",
    available: "24/7",
    description: "Free and confidential support for people in distress",
    urgent: true
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    country: "USA",
    available: "24/7",
    description: "Free crisis support via text message",
    urgent: true
  },
  {
    name: "Samaritans",
    number: "116 123",
    country: "UK",
    available: "24/7",
    description: "Free emotional support for anyone struggling to cope",
    urgent: true
  },
  {
    name: "Lifeline Australia",
    number: "13 11 14",
    country: "Australia",
    available: "24/7",
    description: "Crisis support and suicide prevention",
    urgent: true
  },
  {
    name: "Crisis Services Canada",
    number: "1-833-456-4566",
    country: "Canada",
    available: "24/7",
    description: "Support for anyone experiencing thoughts of suicide",
    urgent: true
  }
];

const MENTAL_HEALTH_RESOURCES = [
  {
    name: "NAMI (National Alliance on Mental Illness)",
    type: "Organization",
    url: "https://www.nami.org",
    description: "Mental health education, support groups, and advocacy"
  },
  {
    name: "Mental Health America",
    type: "Organization",
    url: "https://www.mhanational.org",
    description: "Mental health screening tools and resources"
  },
  {
    name: "BetterHelp",
    type: "Counseling Service",
    url: "https://www.betterhelp.com",
    description: "Online therapy and counseling services"
  },
  {
    name: "Headspace",
    type: "App",
    url: "https://www.headspace.com",
    description: "Meditation and mindfulness exercises"
  },
  {
    name: "Calm",
    type: "App",
    url: "https://www.calm.com",
    description: "Sleep stories, meditation, and relaxation"
  },
  {
    name: "Psychology Today",
    type: "Directory",
    url: "https://www.psychologytoday.com",
    description: "Find therapists and mental health professionals near you"
  }
];

const SupportResources = () => {
  const handleCall = (number: string) => {
    // Remove any non-numeric characters except + for international numbers
    const cleanNumber = number.replace(/[^\d+]/g, '');
    window.location.href = `tel:${cleanNumber}`;
  };

  const handleWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Crisis Support Section */}
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-wellness-calm flex items-center justify-center gap-2">
            <Heart className="w-6 h-6" />
            Support Resources
          </h1>
          <p className="text-muted-foreground">
            You're not alone. Help is available 24/7.
          </p>
        </div>

        <Card className="wellness-card border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Crisis Support - Available 24/7
            </CardTitle>
            <CardDescription>
              If you're experiencing a mental health emergency or having thoughts of self-harm, 
              please reach out immediately.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {CRISIS_HELPLINES.map((helpline, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/50">
                <div className="flex-1">
                  <h3 className="font-medium">{helpline.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {helpline.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {helpline.available}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {helpline.description}
                  </p>
                </div>
                <Button
                  onClick={() => handleCall(helpline.number)}
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground ml-4"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {helpline.number}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Mental Health Resources */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-wellness-calm mb-2">
            Mental Health Resources
          </h2>
          <p className="text-muted-foreground">
            Tools, organizations, and services to support your mental wellness journey.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {MENTAL_HEALTH_RESOURCES.map((resource, index) => (
            <Card key={index} className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-wellness-calm" />
                  {resource.name}
                </CardTitle>
                <CardDescription>
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                    {resource.type}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {resource.description}
                </p>
                <Button
                  onClick={() => handleWebsite(resource.url)}
                  variant="outline"
                  className="w-full"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <Card className="wellness-card wellness-supportive">
        <CardHeader>
          <CardTitle className="text-wellness-growth">Remember</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <p>• Seeking help is a sign of strength, not weakness</p>
            <p>• Mental health is just as important as physical health</p>
            <p>• Recovery is possible, and you deserve support</p>
            <p>• Small steps towards wellness make a big difference</p>
            <p>• You are valued and your life has meaning</p>
          </div>
          
          <div className="mt-6 p-4 bg-card rounded-xl border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This app is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of qualified health professionals 
              regarding mental health concerns.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportResources;