"use client";

import { useEffect } from "react";
import Image from "next/image";

import classes from "@/styles/Home.module.css";

import { useScrollContext } from "@/hooks/useScrollContext";
import { HOME_SECTIONS } from "@/content/home";
import { CONTACT_LINKS } from "@/content/links";
import AboutSection from "@/components/About";
import HomeItem from "@/components/HomeItem";
import LogoSection from "@/components/LogoSection";

export default function HomePage() {
  const { sectionsRefs, setActiveSection } = useScrollContext();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionsRefs).forEach((id) => {
      const ref = sectionsRefs[id as keyof typeof sectionsRefs];
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            root: null,
            rootMargin: id === "contact" ? "0px" : "0px 0px -60% 0px",
            threshold: id !== "contact" ? 0.2 : 0.8,
          },
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionsRefs, setActiveSection]);

  return (
    <div className={classes.homeContainer}>
      <section ref={sectionsRefs.home} className="mb-20 sm:mb-40">
        <LogoSection />
      </section>
      <section
        className="flex flex-col gap-24 lg:gap-[165px] mb-40 lg:mb-150"
        ref={sectionsRefs.works}
      >
        {HOME_SECTIONS.map((item) => (
          <div key={item.title}>
            <HomeItem {...item}>{item.childComponent}</HomeItem>
          </div>
        ))}
      </section>

      <section ref={sectionsRefs.about} className="mb-32 lg:mb-[270px]">
        <AboutSection />
      </section>

      <div
        className={`${classes.linksContainer}`}
        ref={sectionsRefs.contact as React.Ref<HTMLDivElement>}
      >
        <div>
          <p className={`${classes.contactText}`}>
            Open for opportunities, discussion neurodivergence, or just to talk
            shop.
          </p>
        </div>
        <div className={classes.links}>
          {CONTACT_LINKS.map((link) => (
            <div
              key={link.title}
              className={`${classes.link} font-large-narrow`}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <p>{link.title}</p>
                <Image
                  src="/icons/icon-outside-link.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
