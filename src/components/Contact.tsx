import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to get started?
        </h2>
        <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground">
          Get in touch with us to discuss your project requirements and how we
          can help you achieve your goals.
        </p>
      </div>
      <div className="mx-auto mt-8 sm:mt-12 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Input placeholder="Name" />
              </div>
              <div className="grid gap-2">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="grid gap-2">
                <Textarea placeholder="Message" />
              </div>
              <Button>Send Message</Button>
            </form>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:ammar@fullstacktics.com">
                  <span>ammar@fullstacktics.com</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
