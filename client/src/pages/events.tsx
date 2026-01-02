import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Zap, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";

const pastEvents = [
  {
    title: "BBMP Mindmasters – 2025",
    date: "February 16, 2025",
    location: "BBMP Head Office Premises, Bengaluru",
    description: "Organized in association with the BBMP Employees Welfare Development Association at the iconic Glass House. The event featured a total prize fund of ₹60,000/- and offered a competitive platform for both open and age-category players.",
    highlights: [
      "Rapid format (20m + 5s increment)",
      "Special prizes for veterans and differently-abled",
      "Youngest participant awards",
      "Held at the iconic Glass House"
    ],
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
    status: "Completed"
  }
];

const upcomingEvents = [
  {
    title: "2nd Namma Bengaluru International Grandmasters Open Chess Tournament – 2025",
    date: "April 10 - 18, 2025",
    location: "Koramangala Indoor Stadium, Bengaluru",
    description: "One of India's premier chess events, bringing together over 2000 players globally. Featuring elite Grandmasters, International Masters, and rising talents with strong support from the Government of Karnataka.",
    highlights: [
      "Elite GM & IM participation",
      "Over 2000 players expected",
      "Global recognition & media coverage",
      "Government of Karnataka support"
    ],
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
    status: "Upcoming"
  },
  {
    title: "2nd Namma Bengaluru International Open FIDE Rated Blitz Chess Tournament - 2025",
    date: "April 14, 2025",
    location: "Koramangala Indoor Stadium, Bengaluru",
    description: "A fast-paced, high-intensity action event organized as part of the prestigious Grandmasters Tournament. Open to Indian and international players of all levels.",
    highlights: [
      "FIDE Rated Blitz Tournament",
      "Prize Fund: ₹4,00,000",
      "Free entry for GMs, IMs, WGMs, WIMs",
      "High-intensity rapid action"
    ],
    image: "https://images.unsplash.com/photo-1523398003113-5f74a1b17d1c?auto=format&fit=crop&q=80&w=800",
    status: "Upcoming"
  }
];

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="bg-primary py-16 md:py-20 text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading" data-testid="text-page-title">
            Chess Events & Tournaments
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join the most prestigious chess gatherings in Karnataka. From grassroots championships to international grandmaster opens.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Upcoming Tournaments</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col border-2 border-secondary/20 hover:border-secondary/50 transition-colors shadow-lg hover-elevate">
                  <div className="relative h-64 w-full">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-background hover:bg-secondary border-none px-3 py-1 text-sm font-bold">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-none">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">{event.date}</span>
                    </div>
                    <CardTitle className="text-2xl font-heading leading-tight">{event.title}</CardTitle>
                    <div className="flex items-center gap-2 text-foreground/60 mt-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-6">
                    <p className="text-foreground/70 leading-relaxed">{event.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-bold text-sm uppercase text-foreground/40 tracking-widest">Tournament Highlights</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((h, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Trophy className="h-3 w-3 text-secondary shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Button className="bg-secondary text-background hover:bg-secondary/90 flex-1 sm:flex-none min-w-[140px]">
                        Register Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 flex-1 sm:flex-none min-w-[140px]">
                        Download Brochure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background/50 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Past Successes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col border-none shadow-md hover-elevate">
                  <div className="relative h-48 w-full">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-primary/20" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-primary border-none">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground/70 line-clamp-3">{event.description}</p>
                    <Button variant="ghost" className="w-full justify-between text-primary font-bold hover:bg-primary/5">
                      View Gallery
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Organize an Event with Us</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            The Golden Aura Trust partners with corporate houses, schools, and local communities to host 
            top-tier chess tournaments. Whether it's a small community meet or a large-scale international 
            championship, we bring over 20 years of collective experience to ensure excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
              Become a Partner
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
