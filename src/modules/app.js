import DonateForm from "./donate-form";
import DonateList from "./donate-list";
import * as Utils from "../core/utils";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

export default class App {
  #donateForm;
  #donateList;
  #state;

  constructor() {
    this.#state = {
      donates: mockDonates.map((item) => item.amount), // для DonatList
      totalAmount: Utils.calculateSumOfNumbers(mockDonates.map((item) => item.amount)), // для DonateForm
    };


    this.#donateForm = new DonateForm(
      this.#state.totalAmount,
      this.createNewDonate.bind(this)
    );

    this.#donateList = new DonateList(this.#state.donates);
  }
  createNewDonate(newDonate) {
    console.log("newDonate", newDonate);

    this.#state.donates.push(newDonate);

    this.#state.totalAmount = +this.#state.donates.reduce((acc, item) => {
      return acc + +item;
    }, 0);

    this.#donateList.updateDonates(this.#state.donates);
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }

  run() {
    document.body.append(this.#donateForm.render(), this.#donateList.render());
  }
}
