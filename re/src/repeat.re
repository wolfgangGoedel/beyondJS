let everySecond what => {
  let iid = Js.Global.setInterval what 1000;
  fun () => Js.Global.clearInterval iid
};

let rec repeat what times =>
  switch (what, times) {
  | (_, 0) => ()
  | (that, n) =>
    that ();
    repeat that (n - 1)
  };

let sayHello () => Js.log "Hello";

let sayHelloTimes = repeat sayHello;

sayHelloTimes 10;

let unsub = everySecond sayHello;

Js.Global.setTimeout unsub 10000;
