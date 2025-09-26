import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Heart, AlertTriangle, Clock, MapPin } from "lucide-react";

const CRISIS_HELPLINES = [
  {
    name: "National Mental Health Programme",
    number: "1800-91-0099",
    country: "India",
    available: "24/7",
    description: "Government mental health support and counseling",
    urgent: true
  },
  {
    name: "Vandrevala Foundation Helpline",
    number: "1860-266-2345",
    country: "India",
    available: "24/7",
    description: "Free, confidential crisis support and counseling",
    urgent: true
  },
  {
    name: "iCall Psychosocial Helpline",
    number: "022-2556-3291",
    country: "India",
    available: "Mon-Sat, 8AM-10PM",
    description: "Counseling and support for psychological distress",
    urgent: true
  },
  {
    name: "Sneha India",
    number: "044-2464-0050",
    country: "India",
    available: "24/7",
    description: "Suicide prevention and emotional support",
    urgent: true
  },
  {
    name: "NIMHANS Helpline",
    number: "080-4611-0007",
    country: "India",
    available: "Mon-Sat, 9AM-5PM",
    description: "Mental health support from premier institute",
    urgent: true
  }
];

const MENTAL_HEALTH_RESOURCES = [
  {
    name: "National Institute of Mental Health (NIMHANS)",
    type: "Institute",
    url: "https://nimhans.ac.in",
    description: "Premier mental health research and treatment institute"
  },
  {
    name: "The Live Love Laugh Foundation",
    type: "Organization",
    url: "https://www.thelivelovelaughfoundation.org",
    description: "Mental health awareness and support initiatives"
  },
  {
    name: "Mann Talks",
    type: "Platform",
    url: "https://manntalks.org",
    description: "Mental health awareness and support platform"
  },
  {
    name: "Mpower - The Centre",
    type: "Treatment Center",
    url: "https://mpowerminds.com",
    description: "Mental health treatment and awareness center"
  },
  {
    name: "White Swan Foundation",
    type: "Organization",
    url: "https://www.whiteswan.org.in",
    description: "Mental health information and support resources"
  },
  {
    name: "Mind.fit",
    type: "App",
    url: "https://mind.fit",
    description: "Mental fitness and wellbeing platform"
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