import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Users, Lightbulb, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const carouselImages = [
  "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=2000",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-foreground">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent z-10" />
        
        <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-background font-heading"
            data-testid="text-hero-title"
          >
            The <span className="text-primary">Golden Aura</span> Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-background/90 max-w-2xl mx-auto"
            data-testid="text-hero-description"
          >
            A dedicated force in the promotion and development of chess across Karnataka and India
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading" data-testid="text-overview-title">
              Overview of The Golden Aura Trust
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            <p className="text-foreground/70 leading-relaxed">
              The Golden Aura Trust is a dedicated force in the promotion and development of chess across Karnataka and India. 
              Committed to fostering a culture of excellence in the sport, the Trust works to provide the necessary support, 
              infrastructure, and opportunities for players of all backgrounds to thrive.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Affiliated with the Karnataka State Chess Association (KSCA) and the Bengaluru Urban District Chess Association (BUDCA), 
              the Trust operates under the guidance of International Chess Federation (FIDE) and the All India Chess Federation (AICF). 
              Through well-structured initiatives, training programs, and tournaments, it aims to create a robust platform for aspiring 
              and professional chess players to sharpen their skills and gain meaningful exposure.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Beyond competitive play, The Golden Aura Trust envisions chess as a tool for intellectual growth and social empowerment. 
              By organizing events, facilitating access to resources, and fostering a strong community, the Trust is committed to making 
              chess more accessible and impactful, ensuring that talent and passion find the right avenues to flourish.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">News</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow" data-testid={`card-news-${item}`}>
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">News Image</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">News Update Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    Stay tuned for the latest news and updates from The Golden Aura Trust.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Our Mission</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-background/90">
            <p className="leading-relaxed">
              The Golden Aura Trust is committed to nurturing and expanding the chess landscape by making it more inclusive, 
              engaging, and impactful. We strive to make chess more accessible through well-structured tournaments, coaching camps, 
              and interactive learning formats that engage both aspiring and seasoned players.
            </p>
            <p className="leading-relaxed">
              In parallel, we work towards strengthening the sport by collaborating with sports organizations to enhance infrastructure, 
              identify and support emerging talents, and elevate competitive standards at every level.
            </p>
            <p className="leading-relaxed">
              Beyond conventional boundaries, the Trust envisions chess as more than just a sport—it is a powerful tool for intellectual 
              and social enrichment. By forging meaningful connections between chess and diverse fields such as education, commerce, 
              and technology, we aim to unlock new opportunities and broaden the game's reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-background/10 backdrop-blur-sm space-y-4 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading">Accessibility</h3>
              <p className="text-sm text-background/80 leading-relaxed">
                Making chess accessible to players of all ages and backgrounds through structured programs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background/10 backdrop-blur-sm space-y-4 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading">Community</h3>
              <p className="text-sm text-background/80 leading-relaxed">
                Building a strong chess community through collaboration and shared passion for the game.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background/10 backdrop-blur-sm space-y-4 text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading">Innovation</h3>
              <p className="text-sm text-background/80 leading-relaxed">
                Connecting chess with education, commerce, and technology for broader impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">Be a Part of the Movement</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-foreground/70 leading-relaxed">
              We welcome everyone passionate about chess and its transformative potential. Whether you are a player looking for 
              opportunities, a coach or academy eager to contribute, or an educational institution seeking to integrate chess 
              into learning, we are here to collaborate and grow together.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              At the same time, we invite organizations, companies, and philanthropists who believe in the power of chess to 
              drive change. By joining hands, we can build a lasting impact and drive a transformative movement in chess.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-background">
                <Link href="/contact" data-testid="button-get-involved">
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Upcoming Events</h2>
            <div className="h-1.5 w-24 bg-background mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background/10 backdrop-blur-sm border-0 text-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Calendar className="h-5 w-5" />
                  Event Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 bg-background/20 rounded-lg flex items-center justify-center">
                  <span className="text-background/60 text-sm">QR Code for Registration</span>
                </div>
                <p className="text-sm text-background/80">
                  Scan the QR code to register for upcoming tournaments and events.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/10 backdrop-blur-sm border-0 text-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <ExternalLink className="h-5 w-5" />
                  Event Brochure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 bg-background/20 rounded-lg flex items-center justify-center">
                  <span className="text-background/60 text-sm">Brochure Preview</span>
                </div>
                <p className="text-sm text-background/80">
                  Download our event brochure for complete details and schedules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">Gallery</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <div key={index} className="min-w-full">
                    <img 
                      src={img} 
                      alt={`Chess event ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button 
              size="icon" 
              variant="secondary"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  data-testid={`button-carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">Our Partners</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="h-24 bg-white rounded-xl shadow-sm border flex items-center justify-center"
                data-testid={`partner-logo-${item}`}
              >
                <span className="text-muted-foreground text-sm">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
