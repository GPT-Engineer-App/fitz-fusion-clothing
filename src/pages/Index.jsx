import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">FITZ FUSION</h1>
          <p className="text-xl mb-8">Where Fashion Meets Comfort</p>
          <Button variant="outline">Shop Now</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center">
                FITZ FUSION is a modern clothing brand that blends style and comfort. Our mission is to provide high-quality apparel that makes you look and feel great. Join us on our journey to redefine fashion.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="Your Message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;