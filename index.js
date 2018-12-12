import Mask from "mask";

class Busy {
  constructor() {
    Mask.init({
      duration: 1,
      backgroundColor: "unset"
    });
    Mask.style({
      zIndex: 999,
      cursor: "wait"
    });
  }

  async wait() {
    await Mask.show();
    return new Promise(resolve => {
      resolve(this.done);
    });
  }

  done() {
    setTimeout(() => {
      Mask.hide();
    }, 0);
  }
}

export default new Busy();
