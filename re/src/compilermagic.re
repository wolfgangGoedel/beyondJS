let answer = 42;

let add a b => a + b;

Js.log (add answer answer);

let double x => x * 2;

let rec fact n =>
  switch n {
  | 1 => 1
  | n => n * fact (n - 1)
  };

let fact_t n => {
  let rec aux n acc =>
    switch (n, acc) {
    | (1, acc) => acc
    | (n, acc) => aux (n - 1) (acc * n)
    };
  aux n 1
};
