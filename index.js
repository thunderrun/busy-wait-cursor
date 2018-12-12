class Busy {
  constructor() {
    this.mask = document.createElement('div');
    this.mask.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;z-index:999;cursor:wait;display:none;';
    document.body.appendChild(this.mask);
  }

  wait() {
    return new Promise(resolve=>{
      this.mask.style.display = 'initial';
      resolve(this.done.bind(this));
    })
  }

  done() {
    setTimeout(()=>{
      this.mask.style.display = 'none';
    }, 0)
  }

}

export default new Busy();
