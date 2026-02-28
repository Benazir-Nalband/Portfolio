import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPinCheck,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Replace with your EmailJS credentials
      const result = await emailjs.send(
        "service_0kq1vun",
        "template_2e3meoq",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: "benazirnalband@gmail.com",
        },
        "2VYNC9E2G6C50NVDL"
      );

      if (result.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully! ✓" });
        setFormData({ from_name: "", from_email: "", message: "" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:benazirnalband@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    benazirnalband@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919373355810"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 93733 55810
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Karmala, Solapur, Maharashtra
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="font-medium mb-4">Connect With Me</div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Benazir-Nalband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://naukri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {status.message && (
              <div
                className={cn(
                  "p-3 rounded-md mb-6 text-sm",
                  status.type === "success"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                )}
              >
                {status.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                required
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <input
                required
                name="from_email"
                type="email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <textarea
                required
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;