import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] overflow-hidden">
      <Navbar />
      <div className="relative pt-8 px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#AEBED9]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#AEBED9]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-[#AEBED9]/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-3xl mx-auto space-y-8 md:space-y-12 z-10">
          {/* Header Section */}
          <div className="text-center space-y-3 md:space-y-4 animate-fade-in mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF9F6]">Contact Me</h1>
            <p className="text-base md:text-lg text-[#FFFFFF] max-w-2xl mx-auto px-4">
              Let's work together. Feel free to send a message or call directly—I'm ready to collaborate.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left animate-fade-in px-4">
            <div className="space-y-2 backdrop-blur-sm bg-[#AEBED9]/5 p-4 md:p-6 rounded-lg">
              <h2 className="text-lg md:text-xl font-semibold text-[#FAF9F6]">Email</h2>
              <a href="mailto:nesteemusicprovvidence@gmail.com" className="text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors break-all">
                nesteemusicprovvidence@gmail.com
              </a>
            </div>
            <div className="space-y-2 backdrop-blur-sm bg-[#AEBED9]/5 p-4 md:p-6 rounded-lg">
              <h2 className="text-lg md:text-xl font-semibold text-[#FAF9F6]">Phone</h2>
              <a href="tel:+46708991799" className="text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors">
                +46 708 991 799
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 backdrop-blur-sm bg-[#AEBED9]/5 p-4 md:p-8 rounded-lg mx-4 mb-8">
            <div className="space-y-3 md:space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-transparent border-[#AEBED9] text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 text-sm md:text-base"
                />
                {errors.name && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="bg-transparent border-[#AEBED9] text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 text-sm md:text-base"
                />
                {errors.email && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Share details about your project or inquiry..."
                  {...register("message", { required: "Message is required" })}
                  className="bg-transparent border-[#AEBED9] text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 min-h-[120px] md:min-h-[150px] text-sm md:text-base"
                />
                {errors.message && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#AEBED9] text-[#121212] hover:bg-[#AEBED9]/80 transition-colors text-sm md:text-base py-2 md:py-3"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;