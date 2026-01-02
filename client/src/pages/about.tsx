import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Target, Eye, Users, Trophy, TrendingUp, Landmark, ShieldCheck, Download, ChevronRight } from "lucide-react";

const teamMembers = [
  { name: "Ms. Sowmya M U", role: "Trustee", img: "https://i.pravatar.cc/150?u=sowmya" },
  { name: "Mr. Arvind Shastry", role: "Trustee", img: "https://i.pravatar.cc/150?u=arvind" },
  { name: "Mr. Gautham Upadhyaya", role: "Trustee", img: "https://i.pravatar.cc/150?u=gautham" },
];

const committeeMembers = [
  { name: "Shri D. K. Shivakumar", role: "Hon'ble DCM, Govt Of Karnataka", designation: "Hon. President" },
  { name: "Ms. Sowmya M U", role: "Administration, Planning, & Operations", designation: "Member" },
  { name: "Mr. Arvind Shastry", role: "Tournament Strategy, Co-ordination & Hospitality", designation: "Member" },
  { name: "Mr. D P Anantha", role: "Vice President, AICF", designation: "Member" },
  { name: "Grandmaster Thejkumar M S", role: "Outreach & Promotions", designation: "Member" },
  { name: "Mr. Salim Beig", role: "IA and Tournament Execution & Networking", designation: "Member" },
  { name: "Mr. Gautham Upadhyaya", role: "Member", designation: "Member" },
];

const advisoryMembers = [
  { name: "Mrs. Ratna Prabha", role: "IAS Former Chief Sec GoK", designation: "Chairman Advisory Board" },
  { name: "Mr. Vilas V Shinde", role: "IRS, Commissioner of Income Tax, Bangalore", designation: "Member" },
  { name: "Dr. Girisha LP", role: "Senior Ast. Director", designation: "Member" },
  { name: "Mr. Nataraj M N", role: "Former Regional Director, NYKS", designation: "Member" },
  { name: "Mr. Raju M.", role: "Income Tax Officer", designation: "Member" },
  { name: "Mr. Dilip Kumar I S", role: "Advocate", designation: "Legal Advisor" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-16 md:py-20 text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading" data-testid="text-page-title">
            About Our Trust
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fostering personal growth and social transformation through the timeless game of chess.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">Our Vision & Mission</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-xl shadow-sm border space-y-3" data-testid="card-vision">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-xl font-heading">Our Vision</h3>
                </div>
                <p className="text-foreground/70 italic leading-relaxed">
                  We see chess beyond the board—a pursuit that fosters personal growth and social transformation. 
                  Like life, chess is about the challenges, triumphs and continuous learning. 
                  Recognizing the vast and largely untapped potential of chess in Karnataka, 
                  we are committed to cultivating an environment where the sport can flourish and inspire 
                  the next generation of thinkers and champions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border space-y-3" data-testid="card-mission">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-xl font-heading">Our Mission</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  The Golden Aura Trust is committed to nurturing and expanding the chess landscape by 
                  making it more inclusive, engaging, and impactful. We strive to make chess more 
                  accessible through well-structured tournaments, coaching camps, and interactive 
                  learning formats that engage both aspiring and seasoned players.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000" 
              alt="Chess Board Vision"
              className="w-full h-full object-cover"
              data-testid="img-about-vision"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Our Plan of Action</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
            {[
              { 
                title: "Socio-chess activities", 
                icon: Users,
                color: "bg-primary",
                desc: "We perceive Chess as a tool for social connection. Through innovative formats and outreach, we aim to break barriers and bring chess to a wider audience."
              },
              { 
                title: "Bengaluru: A global chess hub", 
                icon: Trophy,
                color: "bg-secondary",
                desc: "Our vision is to transform Bengaluru into a world-class centre for chess by organizing elite tournaments and building strategic alliances."
              },
              { 
                title: "Women in Chess", 
                icon: TrendingUp,
                color: "bg-accent",
                desc: "Our initiatives are designed to inspire women to pursue chess professionally. We are dedicated to empowering female talent through mentorship."
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className={`h-16 w-16 rounded-full ${step.color} flex items-center justify-center text-background shadow-lg`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                <p className="text-sm text-foreground/70 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">Our Trustees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
                data-testid={`card-team-member-${i}`}
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-primary rounded-full scale-105 group-hover:scale-110 transition-transform" />
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="relative rounded-full h-48 w-48 object-cover border-4 border-white shadow-md" 
                  />
                </div>
                <h3 className="font-bold text-xl font-heading">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Bangalore International Grandmasters Tournament Organizing Committee</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            <p className="text-foreground/70 leading-relaxed">
              In line with the mission of the Golden Aura Trust to promote chess and the spirit of excellence, 
              this exclusive committee handles the planning and execution of the 2nd Namma Bengaluru 
              International Grandmasters Tournament, scheduled for April 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold font-heading">Organizing Committee</h3>
              </div>
              <div className="space-y-4">
                {committeeMembers.map((member, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{member.name}</h4>
                      <p className="text-sm text-foreground/60">{member.role}</p>
                      <p className="text-xs text-primary mt-1 font-medium uppercase tracking-wider">{member.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold font-heading">Advisory Committee</h3>
              </div>
              <div className="space-y-4">
                {advisoryMembers.map((member, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{member.name}</h4>
                      <p className="text-sm text-foreground/60">{member.role}</p>
                      <p className="text-xs text-secondary mt-1 font-medium uppercase tracking-wider">{member.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Want to learn more about our tournament?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-background text-secondary hover:bg-background/90">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-secondary">
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
