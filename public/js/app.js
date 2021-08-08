const timeline = gsap.timeline({ defaults: { duration: 1.4 } });
timeline
  .to("span", { y: "0%", stagger: 0.25, ease: "power1.out" })
  .to(".slider", { y: "-100%", delay: 0.4, ease: "power1.out" })
  .to(".intro", { y: "-100%" }, "-=1.5")
  .from(".navbar", { opacity: 0 })
  .from(".icon-bar", { opacity: 0 })
  .from("#info", { opacity: 0, stagger: 0.3 })
  .from(".about__parent", { opacity: 0, ease: "power1.out" });
