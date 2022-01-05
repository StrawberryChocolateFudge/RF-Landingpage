import { render } from "lit-html";
import { acceptLogoAnim } from "./src/gsap/AcceptLogoAnim";
import { contractLogoAnim } from "./src/gsap/ContractLogoAnim";
import { managerLogoAnim } from "./src/gsap/ManagerLogoAnim";
import { permapinAnim } from "./src/gsap/PermapinAnim";
import { signContractLogoAnim } from "./src/gsap/SignContractLogoAnim";
import { smartContractLogoAnim } from "./src/gsap/SmartContractLogo";
import { AcceptLogo } from "./src/view/AcceptLogo";
import { ContractLogo } from "./src/view/ContractLogo";
import { ManagerLogo } from "./src/view/ManagerLogo";
import { PermapinLogo } from "./src/view/PermapinLogo";
import { SignContractLogo } from "./src/view/SignContractLogo";
import { SmartContractLogo } from "./src/view/SmartContractLogo";

(function renderAnim() {
  const managerLogoEl = document.getElementById("managerLogo");
  render(ManagerLogo(), managerLogoEl);
  managerLogoAnim();

  const contractLogoEl1 = document.getElementById("contractLogo1");
  render(ContractLogo(), contractLogoEl1);
  const contractLogoEl2 = document.getElementById("contractLogo2");
  render(PermapinLogo(), contractLogoEl2);
  permapinAnim();
  const contractLogoEl3 = document.getElementById("contractLogo3");
  render(AcceptLogo(), contractLogoEl3);
  acceptLogoAnim();
  const contractLogoEl4 = document.getElementById("contractLogo4");
  render(SmartContractLogo(), contractLogoEl4);
  contractLogoAnim();
  smartContractLogoAnim();
  const contractSigningAnimEl = document.getElementById("contractSigning-anim");
  render(SignContractLogo(), contractSigningAnimEl);
  signContractLogoAnim();
})();
