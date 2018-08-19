//  Interface defines a shape
interface Dood {
    firstName: string,
    lastName: string,
    age: number,
    isCool: boolean
}

//  Using interface to annotate
const doodHello = (dood: Dood) => {
    console.log(`Bonjour, ${dood.firstName} ${dood.firstName}!`);
};

//  An example Dood
const Bronas = {
    firstName: 'Jonas',
    lastName: 'Trappenberg',
    age: 45,
    isCool: true,
};

//  This will work:
doodHello(Bronas);

//  This will not work:
doodHello({
    firstName: 'D',
    lastName: 'Money',
});
