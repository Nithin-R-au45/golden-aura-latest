import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 md:py-20 text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading" data-testid="text-page-title">
            Contact Us
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions or want to volunteer? Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Get in Touch</h2>
                <p className="text-foreground/70">
                  Whether you're looking to partner with us, volunteer, or just 
                  want to learn more about our work, we're here to talk.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border" data-testid="contact-info-address">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">Our Office</h4>
                    <p className="text-sm text-foreground/60">No. 216, 9th Main, 3rd Cross, BCC Layout, Vijayanagara – II, Bengaluru – 560040</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border" data-testid="contact-info-phone">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">Call Us</h4>
                    <p className="text-sm text-foreground/60">9481860073 / 9448460072</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border" data-testid="contact-info-email">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">Email Us</h4>
                    <p className="text-sm text-foreground/60">auragolden4@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border" data-testid="contact-info-hours">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading">Office Hours</h4>
                    <p className="text-sm text-foreground/60">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg border-0 bg-white" data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((data) => {
                      toast({
                        title: "Message Sent",
                        description:
                          "Thank you for contacting Golden Aura Trust. We'll get back to you soon!",
                      });
                      form.reset();
                    })}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              data-testid="input-name"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              data-testid="input-email"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help?" 
                              className="min-h-[120px] resize-none"
                              data-testid="input-message"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-background"
                      size="lg"
                      data-testid="button-submit"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
