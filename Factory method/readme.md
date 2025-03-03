IMPLEMENTATION FACTORY METHOD

1. Implement the same interface for all products. This interface should declare methods that all 
products can have in common.

2. Add an empty factory method inside the creator class. The return type of the method should match 
the common interface of the products.

3. Locate all references to product constructors in the creator code. Replace them one by one with 
calls to the factory method and move the product creation code into the factory method.

-You may need to add a temporary parameter to the factory method to check the type of the returned product.

-At this point, the code in the factory method may look messy. It might even contain a big one 
switchthat chooses which class to instantiate. Don't worry, everything will be sorted out soon.

4. For each product type listed in the factory method, create a subclass of Creator. 
Override the factory method in the subclasses and retrieve the appropriate pieces of code from the base method.

5. If there are too many product types and little point in creating subclasses for all of them, 
you can reuse the base class's control parameter in the subclasses.

- Let's imagine the following class hierarchy: the base class Courrierwith subclasses 
CourrierAérienand CourrierTerrestre ; the classes of Transportare Avion, Camionand Train. The class CourrierAérienonly uses Avionsand the class CourrierTerrestrecan use both Camionsand Trains. You could create a new subclass ( CourrierFerroviairefor example) to handle both cases, but there is another possibility. The client code could pass an argument to the du factory method CourrierTerrestreto designate the type of product it wants to receive.

6. If after all these changes the base factory method has become completely empty, 
you can make it abstract. If there are still a few lines left, you can leave a default behavior there.