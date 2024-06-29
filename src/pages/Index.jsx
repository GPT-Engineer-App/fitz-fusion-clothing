import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">FITZ FUSION</h1>
          <p className="text-xl mb-6">Where Fashion Meets Comfort</p>
          <Button variant="outline">Shop Now</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              At FITZ FUSION, we believe in blending style with comfort. Our clothing line is designed to make you look good and feel great. Whether you're hitting the gym or going out for a casual day, FITZ FUSION has got you covered.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-gray-50 flex flex-col items-center">
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
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
      </section>
    </div>
  );
};

export default Index;