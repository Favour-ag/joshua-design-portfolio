"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#060A0F] text-foreground">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My crazy journey as a Computer Engineering student with a passion
            for music and design
          </h1>
          <p className="text-xl text-muted-foreground">
            The start of my Journey.
          </p>
        </section>

        {/* Early Interest Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              For a while I've always heard that left-handed people tend to
              excel in visual-spatial tasks (fun fact: I'm left-handed). I
              always felt that was absurd but looking at my journey so far
            </p>
            <p className="text-lg">
              I'm starting to believe that it's true (not that I'm being
              stereotypical). I graduated from Afk Basosta University with a
              bachelor's degree in Computer Engineering and I have gotten the
              opportunity to work with a lot of designers and developers who
              have inspired me to always develop myself because I believe we
              learn everyday.
            </p>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
              alt="Portrait in black and white"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Music to Design Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            My Journey from Music to Graphic Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                alt="Music studio setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                From a very young age I've always been into creativity be it
                music or design but I was into music initially where I started
                making my own music then I met a graphic designer who always
                charged me high for a cover. So I decided I needed to learn how
                to create my own cover, flyers and logos and that was how I was
                introduced to graphic design.
              </p>
              <p className="text-lg">
                I got the opportunity to intern as a graphic designer at
                National Institute of Information Technology (NIIT) where I
                learnt a lot of things inline with design. I started freelancing
                as a graphic designer after, working with a lot of talents which
                gave me the vision of myself I have today.
              </p>
            </div>
          </div>
        </section>

        {/* UX/UI Journey Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Where does UX/UI design come in?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                As my desire to learn increased more and more, I heard about
                UX/UI design and me being the curious person I am I decided to
                find out what it was all about and the moment I discovered what
                it was I fell in love with the idea of designing User Interfaces
                that will promote User Experience on a good note.
              </p>
              <p className="text-lg">
                I found myself always researching and practising and joined a
                community to always develop myself with every chance that I get.
                I've been able to work on few projects and eventually found
                myself in a tech team (NOVA TECH) where we design and develop
                websites for clients and it has given me the opportunity to
                discuss with clients working in start-ups.
              </p>
              <p className="text-lg">
                In addition to teaching me how to apply user-centred principles
                to solve challenging business problems, working in these dynamic
                settings pushed me to develop as a researcher and designer.
              </p>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                alt="Design workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">You've made it to this point!</h2>
          <p className="text-lg">Great to see you here, Let's Connect</p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
