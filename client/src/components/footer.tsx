import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube, SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  const socialLinks = [
    { icon: SiFacebook, href: "#", label: "Facebook" },
    { icon: SiInstagram, href: "#", label: "Instagram" },
    { icon: SiX, href: "#", label: "X" },
    { icon: SiYoutube, href: "#", label: "YouTube" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary font-heading" data-testid="link-footer-logo">
            <Heart className="h-6 w-6" />
            <span>GOLDEN AURA</span>
          </Link>
          <p className="text-sm text-background/70">
            A dedicated force in the promotion and development of chess across Karnataka and India.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg font-heading">Quick Links</h3>
          <ul className="space-y-2 text-sm text-background/70">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">
                About Our Trust
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-primary transition-colors" data-testid="link-footer-events">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg font-heading">Contact Details</h3>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-3" data-testid="footer-address">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>Bengaluru, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3" data-testid="footer-phone">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>+91 (XXX) XXX-XXXX</span>
            </li>
            <li className="flex items-center gap-3" data-testid="footer-email">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>contact@goldenaura.org</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg font-heading">Follow Us</h3>
          <p className="text-sm text-background/70">Stay connected with us on social media</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-background transition-colors"
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} The Golden Aura Trust. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Affiliated with KSCA, BUDCA, FIDE & AICF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
