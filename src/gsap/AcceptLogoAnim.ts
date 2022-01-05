import { gsap } from "gsap";

export function acceptLogoAnim() {
  gsap.set(".accept_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };
  gsap.set("#g7m1 > *", { strokeDasharray: 135, strokeDashoffset: 135 });
  gsap.set("#g7o1, #g7o2", { opacity: 0 });

  //REPEATED
  gsap.to("#g7", { y: -30, duration: 2, ...repeatedSine, delay: -2 });
  gsap.to("#g7m2", {
    rotate: -20,
    transformOrigin: "center",
    x: 10,
    y: 5,
    duration: 1.5,
    ...repeatedSine,
    repeatDelay: 1.1,
  });

  const g7 = gsap
    .timeline({})
    .to("#g7o1", { opacity: 1 })
    .to("#g7o2", { opacity: 1 })
    .to("#g7m1 > *", { strokeDashoffset: 0, stagger: 0.5 });
}
