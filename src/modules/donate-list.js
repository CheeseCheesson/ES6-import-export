import { Settings as settings} from '../core/constants/settings';
import {getFormattedTime} from "../core/utils";

export default class DonateList {
  #donates;
  #mainContainer;
  #headerTitle;
  #subContainer;
  #donateItem;

  constructor(donates) {
    this.#donates = donates; // this.state = {donates: []}  this.#donates
    this.#mainContainer = document.createElement("div");
    this.#headerTitle = document.createElement("h2");
    this.#subContainer = document.createElement("div");

  }

  render() {
    this.#mainContainer.className = "donates-container";

    this.#headerTitle.className = "donates-container__title";
    this.#headerTitle.textContent = "Список донатов";

    this.#subContainer.className = "donates-container__donates";

    this.updateDonates(this.#donates) 

    this.#mainContainer.append(
      this.#headerTitle,
      this.#headerTitle,
      this.#subContainer
    );
    return this.#mainContainer;
  }

  updateDonates(updatedDonates) {
    // this.state = {donates: []}  this.#donates
    this.#subContainer.innerHTML = ``;
    updatedDonates.forEach((item) => {
      this.#donateItem = document.createElement("div"); // это нужно отрисовывать каждый раз
      this.#donateItem.className = "donate-item";
      this.#donateItem.innerHTML = `${getFormattedTime(new Date())} - <b>${item}${settings.currency}</b>`;
      this.#subContainer.append(this.#donateItem);
    });

  }
}
