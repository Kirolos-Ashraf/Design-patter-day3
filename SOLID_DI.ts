// the dependency inversion principle is that high-level modules should not depend on the low-level modules. Instead, both of them should depend on abstractions.

interface Person {
  introduceSelf(): void;
}
class Engineer implements Person {
  public introduceSelf() {
    console.log('I am an engineer');
  }
}
class Musician implements Person {
  public introduceSelf() {
    console.log('I am a musician');
  }
}