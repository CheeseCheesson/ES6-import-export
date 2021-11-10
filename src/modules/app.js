import DonateForm from "../modules/donate-form";

export default class App {
  #donate = new DonateForm();
  run() {
    document.body.append(this.#donate.render());
  }
}
