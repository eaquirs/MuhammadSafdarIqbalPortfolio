import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, UserCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl z-0" />
      {/* Header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-green-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out below.
        </p>
      </div>
      {/* Main Card */}
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-10 bg-white/70 dark:bg-slate-900/80 rounded-3xl shadow-2xl p-10 border border-slate-200 dark:border-slate-700 backdrop-blur-xl z-10 mt-32 md:mt-0">
        {/* Contact Info Card */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
          <div className="mb-6 flex flex-col items-center md:items-start">
            <UserCircle className="w-16 h-16 text-blue-400 dark:text-blue-500 mb-2" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">Muhammad Safdar Iqbal</h2>
            <span className="text-blue-500 dark:text-blue-400 font-medium">Full-Stack Developer</span>
          </div>
          <div className="space-y-4 w-full">
            <a href="tel:+923001234567" className="flex items-center text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium group">
              <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
              +92 332 2060667
            </a>
            <a href="mailto:safdar@email.com" className="flex items-center text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium group">
              <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
              eaquirseaquirs@gmail.com
            </a>
            <div className="flex items-center text-slate-700 dark:text-slate-200 font-medium">
              <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
              Bahawalpur, Pakistan
            </div>
          </div>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-gradient-to-b from-blue-200 via-slate-300 to-green-200 dark:from-blue-900 dark:via-slate-800 dark:to-green-900 mx-8" />
        {/* Contact Form */}
        <div className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="relative">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-white/90 dark:bg-slate-800/90 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
              />
              <label htmlFor="name" className="absolute left-3 top-2 text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400 bg-white/80 dark:bg-slate-900/80 px-1 rounded">
                Name
              </label>
            </div>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-white/90 dark:bg-slate-800/90 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
              />
              <label htmlFor="email" className="absolute left-3 top-2 text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400 bg-white/80 dark:bg-slate-900/80 px-1 rounded">
                Email
              </label>
            </div>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-white/90 dark:bg-slate-800/90 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
              />
              <label htmlFor="message" className="absolute left-3 top-2 text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400 bg-white/80 dark:bg-slate-900/80 px-1 rounded">
                Message
              </label>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold shadow-lg transition-all duration-200" disabled={loading}>
              {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
            </Button>
            {success && (
              <div className="flex items-center justify-center mt-2 text-green-500 font-medium animate-fade-in">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 