import { Settings as settings} from '../core/constants/settings';

export default class DonateForm {
  #formHTML;
  #totalAmountContent;
  #labelForInput;
  #inputForm;
  #buttonForm;
  #totalAmount;
  constructor(totalAmount, createNewDonate) {
    this.#totalAmount = totalAmount; // this.state.totalAmount
    this.createNewDonate = createNewDonate; // new

    this.#formHTML = document.createElement("form");
    this.#formHTML.addEventListener("submit", (event) => {
      event.preventDefault();

      this.newDonate = {
        date: new Date(),
        amount: event.path[0][0].value,
      };

      this.createNewDonate(this.newDonate.amount);
      
      document.querySelector(".donate-form__donate-input").value = "";
    });
    this.#totalAmountContent = document.createElement("h2");
    this.#labelForInput = document.createElement("label");
    this.#inputForm = document.createElement("input");
    this.#buttonForm = document.createElement("button");
  }
  updateTotalAmount(newAmount) {
    console.log(newAmount);
    // this.#totalAmountContent.textContent = this.updateTotalAmount(this.#totalAmount); //   0
    return (this.#totalAmountContent.textContent = `${newAmount}${settings.currency}`); // 0
  }

  render() {
    this.#formHTML.className = "donate-form";
    this.#totalAmountContent.id = "total-amount";
    this.#totalAmountContent.textContent = this.updateTotalAmount(
      this.#totalAmount
    ); // totalAmount 0 по умолчанию, потом посчитаем функцией

    this.#labelForInput.className = "donate-form__input-label";
    this.#labelForInput.textContent = `Введите сумму в ${settings.currency}`;
    this.#inputForm.className = "donate-form__donate-input";
    this.#inputForm.name = "amount";
    this.#inputForm.type = "number";
    this.#inputForm.max = "100";
    this.#inputForm.min = "0";
    this.#inputForm.setAttribute("required", "");

    this.#labelForInput.append(this.#inputForm);

    this.#buttonForm.className = "donate-form__submit-button";
    this.#buttonForm.type = "submit";
    this.#buttonForm.textContent = "Задонатить";
    this.#formHTML.append(
      this.#totalAmountContent,
      this.#labelForInput,
      this.#buttonForm
    );

    return this.#formHTML;
  }
}
