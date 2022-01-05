import { gsap } from "gsap";

export function managerLogoAnim() {
  gsap.set(".manager_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g1o1, #g1o2, #g1m3", { opacity: 0 });

  //REPEATED
  gsap.to("#g1", { y: -30, duration: 1, ...repeatedSine, delay: -8 });

  const g1 = gsap
    .timeline({ defaults: { duration: 0.7 } })
    .to("#g1o1", { opacity: 1 })
    .to("#g1o2", { opacity: 1 })
    .to("#g1m1", {
      rotate: 20,
      x: 1,
      ease: "sine.inOut",
      duration: 0.65,
      transformOrigin: "center",
    })
    .to("#g1m2", { x: -50, y: -30, ease: "sine.inOut", duration: 0.65 }, "<")
    .to("#g1m3", { opacity: 1 }, ">+.3");
}
