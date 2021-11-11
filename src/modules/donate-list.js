export default class DonateList {
  #donates;
  #donatesContainerHTML;

  constructor(donates) {
    //приняли массив объектов: ключи date (дата создания доната) и amount (сумма доната)
    this.#donates = donates;
    this.#donatesContainerHTML = document.createElement("div");
    this.#donatesContainerHTML.className = "donates-container";
  }

  render() {
    const h2DonatesTitle = document.createElement("h2");
    h2DonatesTitle.className = "donates-container__title";
    h2DonatesTitle.textContent = "Список донатов";

    let donatesSubContainer = document.createElement("div");
    donatesSubContainer.className = "donates-container__donates";

    this.#donates.map((item) => {
      const donateItemHTML = document.createElement("div");
      donateItemHTML.className = "donate-item";
      donateItemHTML.textContent = `${item.date} - `;

        const tagBDonats = document.createElement("b");
        tagBDonats.textContent = `${item.amount}`;

      donateItemHTML.append(tagBDonats);
      donatesSubContainer.append(donateItemHTML);
    });

    this.#donatesContainerHTML.append(h2DonatesTitle, donatesSubContainer);

    return this.#donatesContainerHTML;
  }
  #updateDonates(updatedDonates) {
    donatesSubContainer = document.querySelector(".donates-container__donates");
    donatesSubContainer.innerHTML = "";
    updatedDonates.forEach((updatedDonate) => {
      const tagBDonats = document.createElement("b");
      tagBDonats.textContent = `${updatedDonate}`;
      donatesSubContainer.append(tagBDonats)
    });
    return donatesSubContainer
  }
}
