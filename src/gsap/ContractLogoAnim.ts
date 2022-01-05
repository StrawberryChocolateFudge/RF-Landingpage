import { gsap } from "gsap";

export function contractLogoAnim() {
  gsap.set(".contract_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g2o1, #g2m1", { opacity: 0 });

  //REPEATED
  gsap.to("#g2", { y: -30, duration: 1, ...repeatedSine, delay: -3 });

  const g2 = gsap
    .timeline({ defaults: { duration: 0.7 } })
    .to("#g2o1", { opacity: 1 })
    .to("#g2m1", { opacity: 1 });
}
