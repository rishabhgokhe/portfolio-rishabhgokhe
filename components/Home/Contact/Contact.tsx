import React from "react";
import CustomButton from "@/components/elements/CustomButton";
import SocialLinks from "@/components/elements/SocialLinks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FloatingInput } from "@/components/elements/FloatingInput";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white pb-10 flex flex-col items-center justify-center"
    >
      <h1 className="text-center text-5xl font-bold pb-8">
        Contact <span className="text-red-500">Me</span>
      </h1>
      <p className="text-center font-semibold mb-4">
        Mail me at:{" "}
        <a
          href="mailto:rishabhgokhe20contact@gmail.com"
          className="text-yellow-500 underline underline-offset-2 font-normal"
        >
          rishabhgokhe20contact@gmail.com
        </a>
      </p>

      <Card className="max-w-[90vw] bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-green-500">Write your message</CardTitle>
          <CardDescription>
            Get in touch with us for any feedback or collaboration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="relative">
              <Input
                id="name"
                placeholder=" "
                className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
              />
              <FloatingInput>Name</FloatingInput>
            </div>
            <div className="relative">
              <Input
                id="name"
                placeholder=" "
                className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
              />
              <FloatingInput>Email</FloatingInput>
            </div>
            <div className="relative">
              <Input
                id="name"
                placeholder=" "
                className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
              />
              <FloatingInput>Phone Number</FloatingInput>
            </div>
            <div className="relative">
              <textarea
                id="message"
                className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white border-2 border-gray-500 rounded-md focus:border-yellow-500 focus:ring-0 peer"
                placeholder=" "
                rows={4}
              ></textarea>
              <FloatingInput>Message</FloatingInput>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <CustomButton className="w-full">Send Message</CustomButton>
        </CardFooter>
      </Card>

      <SocialLinks className="flex justify-center mt-4" />
    </section>
  );
}
