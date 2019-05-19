//Js.log("Hello, BuckleScript and Reason!");

type animal = Cat(string) | Dog(string);

let speak = (animal) => 
    switch (animal) {
    | Cat(name) => name ++ " says: meow"
    | Dog(name) => name ++ " says: woof"
};

Js.log(speak(Dog("Cooper")));
Js.log(speak(Cat("Buddy")));  
