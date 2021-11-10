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

    const donatesSubContaimer = document.createElement("div");
    donatesSubContaimer.className = "donates-container__donates";
    this.#donates.map((item) => {
      const donateItemHTML = document.createElement("div");
      donateItemHTML.className = "donate-item";
      donateItemHTML.textContent = `${item.date} - `;

      const tagBDonats = document.createElement("b");
      tagBDonats.textContent = `${item.amount}`;

      donateItemHTML.append(tagBDonats);
      donatesSubContaimer.append(donateItemHTML);
    });

    this.#donatesContainerHTML.append(h2DonatesTitle, donatesSubContaimer);

    return this.#donatesContainerHTML;
  }
}
