# typescript-interface

**interfaces**: creates a new type, describing the property names and value types of an object.

When you use an interface and call it out (like the console log for the summary), it's only going to check to see if there is a property (in this case summary) with the correct value (string) in your variable (in our case antonio).

You can use a single interface to describe very different objects (see antonio and island example).

**General Strategy for Reusable Code in TS**
  - create functions that accept arguments that are typed with interfaces
  - Object/classes can decide to implement a given interface to work with a function

## Classes

**classes**: blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.