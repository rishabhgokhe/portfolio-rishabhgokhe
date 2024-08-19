"use client";
import React, { FormEvent, ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "@/components/elements/CustomButton";
import SocialLinks from "@/components/elements/SocialLinks";
import ThankYou from "./ThankYou";
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
import { z } from "zod";
import { toast } from "react-hot-toast";
import MobileContent from "@/public/svg/icons/MobileContent";

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // schema defining from zod
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phoneNumber: z.string().max(10).optional(),
    message: z.string(),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // perform form validation
    const validation = formSchema.safeParse(formData);

    if (!validation.success) {
      console.error("Validation failed:", validation.error.errors);
      toast.error("Please check your inputs and try again.");
      setErrorMessage("Please check your inputs and try again.");
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      console.error("EmailJS environment variables are not set");
      toast.error("Failed to send message. Please try again later.");
      setLoading(false);
      return;
    }

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        setShowThankYou(true);
        toast.success("Message sent successfully! - " + result.text);
        setLoading(false);
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        toast.error("Failed to send message. Please try again later.");
        setLoading(false);
      }
    );
  };

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

      <div className="flex w-full justify-center items-center gap-10">
        <div className="hidden md:block">
          <MobileContent />
        </div>
        <Card className="max-w-[90vw] bg-neutral-900 border-neutral-800">
          {!showThankYou && (
            <>
              <CardHeader>
                <CardTitle className="text-green-500">
                  Write your message
                </CardTitle>
                <CardDescription>
                  Get in touch with us for any feedback or collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder=" "
                      className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FloatingInput>Name</FloatingInput>
                  </div>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder=" "
                      className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FloatingInput>Email</FloatingInput>
                  </div>
                  <div className="relative">
                    <Input
                      id="phoneNumber"
                      placeholder=" "
                      className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white rounded-md peer"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    <FloatingInput>Phone Number</FloatingInput>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-neutral-900 text-white border-2 border-gray-500 rounded-md focus:border-yellow-500 focus:ring-0 peer"
                      placeholder=" "
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <FloatingInput>Message</FloatingInput>
                  </div>

                  {/* Alert Dialog for validation warning */}
                  {/* {errorMessage && (
                  <AlertDialog
                    title="Validation Warning"
                    message={errorMessage}
                  />
                )} */}

                  <CardFooter className="flex p-0 justify-between">
                    <CustomButton className="w-full" type="submit">
                      {loading ? (
                        <span className="loader">
                          Sending your message ....
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </CustomButton>
                  </CardFooter>
                </form>
              </CardContent>
            </>
          )}

          {showThankYou && <ThankYou />}
        </Card>
      </div>

      {/* {!showThankYou && <SocialLinks className="flex justify-center mt-4" />} */}
    </section>
  );
}
