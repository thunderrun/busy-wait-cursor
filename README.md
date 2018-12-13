# BUSY-WAIT-CURSOR

Display wait cursor and disable user interaction when broswer is busy

## Install

```
npm i busy-wait-cursor
```

## Usage

```javascript
import Busy from "busy-wait-cursor";

Busy.wait().then(done => {
  // do something
  done();
});

// or
(async () => {
  await Busy.wait();
  await new Promise(resolve => {
    setTimeout(function() {
      resolve("done");
    }, 5000);
  });
  Busy.done();
})();
```

## Known Issues

Cursor won't change without moving if dev tools is open
