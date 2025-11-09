"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactSection = () => {
  const contactList = [
    {
      name: "Facebook",
      handle: "Joe Kier Hagos",
      link: "https://web.facebook.com/joekier.hagos",
      icon: FaFacebookF,
    },
    {
      name: "GitHub",
      handle: "jokerhgs",
      link: "https://github.com/jokerhgs",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      handle: "Joe Kier Hagos",
      link: "https://www.linkedin.com/in/joe-kier-hagos/",
      icon: FaLinkedinIn,
    },
    {
      name: "Gmail",
      handle: "kierhagos0@gmail.com",
      link: "mailto:kierhagos0@gmail.com",
      icon: MdEmail,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center border-b border-border pb-3 md:pb-4">
          Get In Touch
        </h2>

        {/* Content Container */}
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
          {/* Intro Text */}
          <div className="w-full flex justify-center">
            <p className="text-secondary-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-center">
              {`Need help with your business or projects? Don't hesitate to reach out anytime. I typically respond within 24 hours.`}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6 lg:pl-8 w-full max-w-5xl">
              {contactList.map(({ name, handle, link, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-primary/5 transition-colors duration-200 p-4 rounded-lg flex items-center justify-center"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-colors duration-200 text-foreground mb-2">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-200" />
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-xs sm:text-sm font-medium text-secondary-foreground truncate text-center w-full">
                        {name}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary truncate transition-colors duration-200 text-center w-full">
                        {handle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 text-center text-xs sm:text-sm text-secondary-foreground">
          Copyright © {new Date().getFullYear()} by Kier Hagos | All Rights
          Reserved.
        </div>
      </div>
    </section>
  );
};
