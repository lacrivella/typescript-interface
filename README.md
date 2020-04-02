# typescript-interface

**interfaces**: creates a new type, describing the property names and value types of an object.

When you use an interface and call it out (like the console log for the summary), it's only going to check to see if there is a property (in this case summary) with the correct value (string) in your variable (in our case antonio).

You can use a single interface to describe very different objects (see antonio and island example).

**General Strategy for Reusable Code in TS**
  - create functions that accept arguments that are typed with interfaces
  - Object/classes can decide to implement a given interface to work with a function

## Classes

**classes**: blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.

We refer to Apollo as a child class to Villager because it is extending Villager. Apollo has all the methods that Villager has. We can overwrite those methods in our child class.

**modifiers**: keywords placed on different methods and properties inside of a class. 
  - **public**: this method can be called any where, any time. Public is the default.
  - **private**: this method can only be called by *other methods* in *this* class
  - **protected**: this method can be called by other methods in *this* class, or by other methods in child classes

You canNOT change the modifier in an override method. It must match the parent's modifier for that method.

You mark a method as private so other developers can't use it later in the code. It's usually reserved for code that changes the class. It is not a security procedure.