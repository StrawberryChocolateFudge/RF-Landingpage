import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
export function signContractLogoAnim() {
  gsap.set(".signContract_animation_container svg", { opacity: 1 });
  gsap.registerPlugin(MotionPathPlugin);
  MotionPathPlugin.convertToPath("#g3p1");
  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g3o1", { opacity: 0 });

  //REPEATED
  gsap.to("#g3", { y: -30, duration: 2, ...repeatedSine, delay: -6 });
  gsap.to("#g3m1 > *", {
    motionPath: {
      path: "#g3p1",
      align: "#g3p1",
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
    },
    stagger: { each: 2.5, repeat: -1 },
    ease: "none",
    delay: -50,
    duration: 10,
  });
  gsap.to("#g3m2", {
    rotate: -15,
    transformOrigin: "center",
    duration: 1.75,
    ...repeatedSine,
  });
  gsap.to("#g3m3", {
    rotate: -10,
    transformOrigin: "center",
    duration: 1.75,
    ...repeatedSine,
  });

  const g3 = gsap
    .timeline({ defaults: { duration: 0.7 } })
    .to("#g3o1", { opacity: 1 });
}
