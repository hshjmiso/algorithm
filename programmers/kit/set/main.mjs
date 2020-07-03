import Set from './set.mjs';

let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.remove(1);
console.log(set.values());

set.remove(2);
console.log(set.values());

{
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);

    let unionAB = setA.union(setB);
    console.log(unionAB.values());
}

{
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    let intersectionAB = setA.intersection(setB);
    console.log(intersectionAB.values());
}

{
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    let differenceAB = setA.difference(setB);
    console.log(differenceAB.values());
}

{
    let setA = new Set();
    setA.add(1);
    setA.add(2);

    let setB = new Set();
    setB.add(1);
    setB.add(2);
    setB.add(3);

    let setC = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    console.log(setA.subset(setB));
    console.log(setA.subset(setC));
}