function* foo() {
  console.log('foo');
  yield 'one';
  yield 'two';
  yield 'three';
}

foo();

const gen = foo();

gen.next();
gen.next();
gen.next();
gen.next();