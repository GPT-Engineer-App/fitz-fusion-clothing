import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800">FITZ FUSION</h1>
          <p className="mt-4 text-gray-600">Where Fashion Meets Comfort</p>
          <Button className="mt-6">Shop Now</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card>
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                FITZ FUSION is a modern clothing brand that combines style and comfort. Our mission is to provide high-quality apparel that makes you look and feel great.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <Textarea placeholder="Your Message" />
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