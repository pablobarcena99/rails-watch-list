import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Create your lists.", "Enjoy your films."],
      typeSpeed: 60,
      loop: true
    });
  }

  listName() {
    new Typed(this.element, {
      strings: ["Create your lists.", "Enjoy your films."],
      typeSpeed: 60,
      loop: true
    });
  }
}
