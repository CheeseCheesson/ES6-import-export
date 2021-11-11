export default class DonateForm {
  #donateFormHTML;
  #totalAmount;

  constructor(totalAmount, createNewDonate) {
    this.#donateFormHTML = document.createElement("form");
    this.#donateFormHTML.className = "donate-form";
    this.#totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
  }

  #updateTotalAmount(newAmount) {
    return `${newAmount}$`;
  }
  render() {
    const totalAmountHTML = document.createElement("h1");
    totalAmountHTML.id = "total-amount";
    totalAmountHTML.textContent = this.#updateTotalAmount(0);

    const labelDialAmount = document.createElement("label");
    labelDialAmount.className = "donate-form__input-label";
    labelDialAmount.textContent = "Введите сумму в $";
    const subInputDialAmount = document.createElement("input");
    subInputDialAmount.className = "donate-form__donate-input";
    subInputDialAmount.setAttribute("name", "amount");
    subInputDialAmount.type = "number";
    subInputDialAmount.max = "100";
    subInputDialAmount.min = "0";
    subInputDialAmount.setAttribute("required", "");
    labelDialAmount.append(subInputDialAmount);

    const buttonDonateForm = document.createElement("button");
    buttonDonateForm.className = "donate-form__submit-button";
    buttonDonateForm.type = "submit";
    buttonDonateForm.textContent = "Задонатить";

    this.#donateFormHTML.append(
      totalAmountHTML,
      labelDialAmount,
      buttonDonateForm
    );
    this.#donateFormHTML.addEventListener("submit", (e) => {
      const donate = {
        date,
        amount,
      };
      this.createNewDonate.bind(this);
      subInputDialAmount.value = "";
    });
    return this.#donateFormHTML;
  }
}
