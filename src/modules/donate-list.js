import { Settings as settings } from "../core/constants/settings";
import { getFormattedTime } from "../core/utils";

export default class DonateList {
  #donates;
  #mainContainer;
  #headerTitle;
  #subContainer;
  #donateItem;

  constructor(donates) {
    this.#donates = donates;
    this.#mainContainer = document.createElement("div");
    this.#headerTitle = document.createElement("h2");
    this.#subContainer = document.createElement("div");
  }

  render() {
    this.#mainContainer.className = "donates-container";

    this.#headerTitle.className = "donates-container__title";
    this.#headerTitle.textContent = "Список донатов";

    this.#subContainer.className = "donates-container__donates";
    this.#donates.forEach((item) => {
      this.#donateItem = document.createElement("div");
      this.#donateItem.className = "donate-item";
      this.#donateItem.innerHTML = `${getFormattedTime(
        new Date()
      )} - <b>${item}${settings.currency}</b>`;
      this.#subContainer.append(this.#donateItem);
    });

    this.#mainContainer.append(
      this.#headerTitle,
      this.#headerTitle,
      this.#subContainer
    );
    return this.#mainContainer;
  }

  updateDonates(updatedDonates) {
    
    // this.#subContainer.innerHTML = ``; //! чистит контейнер!!!!!!!!!!!

    updatedDonates.forEach((item) => {
      this.#donateItem = document.createElement("div");
      this.#donateItem.className = "donate-item";
      this.#donateItem.innerHTML = `${item.date} - <b>${item.amount}${settings.currency}</b>`;
      this.#subContainer.append(this.#donateItem);
    });
  }
}
