import { gsap } from "gsap";

export function smartContractLogo() {
  gsap.set(".smartContract_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g4o1, #g4o2", { opacity: 0 });
  gsap.set("#g4img, #g4img > *", { opacity: 0 });

  //REPEATED
  gsap.to("#g4, #g4img", { y: -30, duration: 2, ...repeatedSine, delay: -5 });
  gsap.timeline({ repeat: -1 }).to("#g4img > *", {
    opacity: 1,
    ease: "sine.inOut",
    duration: 1,
    stagger: { each: 4.5, repeat: 1, yoyo: true, repeatDelay: 3 },
  });

  const g4 = gsap
    .timeline({ defaults: { duration: 0.7 } })
    .to("#g4o1", { opacity: 1 })
    .to("#g4img", { opacity: 1 });
}
