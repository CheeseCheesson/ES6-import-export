import DonateForm from "../modules/donate-form";
import DonateList from "../modules/donate-list";
import { mockDonates } from "../core/mockDanats";
import { state } from "../core/state";

export default class App {
  #donate = new DonateForm(state.totalAmount, this.createNewDonate);
  #donateList = new DonateList(mockDonates, state.donates);
  #state;
  constructor(state) {
    this.#state = state;
  }
  createNewDonate(newDonate) {
    this.#state.donates = newDonate;
    const newTotalAmount = this.#state.donates.reduce((acc, item) => {
      return acc + item;
    }, 0);
    this.#state.totalAmount = newTotalAmount;
    this.#donateList.updateDonates()
    this.#donate.updateTotalAmount()
  }
  run() {
    document.body.append(this.#donate.render(), this.#donateList.render());
  }
  
}
