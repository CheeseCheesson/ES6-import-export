import DonateForm from "../modules/donate-form";
import DonateList from "../modules/donate-list";
import {mockDonates} from '../core/mockDanats'

export default class App {
  #donate = new DonateForm();
  #donateList = new DonateList(mockDonates)
  run() {
    document.body.append(this.#donate.render(), this.#donateList.render());
  }
}
