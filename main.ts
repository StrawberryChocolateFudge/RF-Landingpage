import { render } from "lit-html";
import { CoinbounceAnim } from "./src/gsap/CoinbounceAnim";
import { contractLogoAnim } from "./src/gsap/ContractLogoAnim";
import { managerLogoAnim } from "./src/gsap/ManagerLogoAnim";
import { signContractLogoAnim } from "./src/gsap/SignContractLogoAnim";
import { CoinBounceLogo } from "./src/view/CoinBounceLogo";
import { ContractLogo } from "./src/view/ContractLogo";
import { ManagerLogo } from "./src/view/ManagerLogo";
import { SignContractLogo } from "./src/view/SignContractLogo";

(function renderAnim() {
  const managerLogoEl = document.getElementById("managerLogo");
  render(ManagerLogo(), managerLogoEl);
  managerLogoAnim();

  const contractLogoEl1 = document.getElementById("contractLogo1");
  render(ContractLogo(), contractLogoEl1);
  const contractLogoEl2 = document.getElementById("contractLogo2");
  render(ContractLogo(), contractLogoEl2);

  const contractLogoEl3 = document.getElementById("contractLogo3");
  render(ContractLogo(), contractLogoEl3);

  const contractLogoEl4 = document.getElementById("contractLogo4");
  render(ContractLogo(), contractLogoEl4);
  contractLogoAnim();

  const contractSigningAnimEl = document.getElementById("contractSigning-anim");
  render(SignContractLogo(), contractSigningAnimEl);
  signContractLogoAnim();
})();
