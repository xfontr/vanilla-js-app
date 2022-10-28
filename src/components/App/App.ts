import appStyle from "./App.style.js";
import Component from "../wrappers/Component.js";

export const AppTag = "vanilla-app";

class App extends Component {
  constructor() {
    super();

    this.render();
  }

  render(): void {
    this.setChildren();
    this.renderTemplate("app", appStyle);
  }
}

export default App;
