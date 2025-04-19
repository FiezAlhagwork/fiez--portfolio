import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
        trigger: target,
      toggleActions: "play pused",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
