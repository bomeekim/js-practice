/**
 * Migratory Birds
 * https://www.hackerrank.com/challenges/big-sorting/problem
 */

const sampleInput0 = bigSorting([
  6,
  31415926535897932384626433832795,
  1,
  3,
  10,
  3,
  5
]);
console.log(sampleInput0);

const sampleInput1 = bigSorting([
  8,
  1,
  2,
  100,
  12303479849857341718340192371,
  3084193741082937,
  3084193741082938,
  111,
  200
]);
console.log(sampleInput1);

const testCase1 = bigSorting([
  100,
  6046724675206781253805417697364063874537349942332939012160502967377173420319837265456476,
  72091970412420810,
  3746855980099062683149629582771,
  4763506513,
  4381858583387279277494367930538,
  195294541694873319042720380485249001380825565396311663127260228626400961443707964165554187168383846,
  57500297590012603652986133599394871645776460,
  3443449340302668605052308,
  799898013447209990576845913871859165418584121624031762316631,
  3300953792,
  8,
  63593696,
  24851084103,
  407248179926838952899179921191873979655396776466610725637337844938107386865231,
  347055068146981261045909920471491104435367358281493074132530787003286631891260,
  84617645710,
  79889616038675409793789137873748992624206633449485792697950955,
  89010681446075323502110552896366
]);
console.log(testCase1)

function bigSorting(unsorted) {
  unsorted.sort((a, b) => {
    const lengthA = a.toString().length;
    const lengthB = b.toString().length;
    
    if (lengthA === lengthB) {
      return a > b ? 1 : -1;
    }

    return lengthA - lengthB;
  });

  return unsorted;
}

function originBigSorting(unsorted) {
  unsorted.sort();
  unsorted.sort((a, b) => {
    const lengthA = a.toString().length;
    const lengthB = b.toString().length;
    //console.log(`a: ${typeof a} lengthA : ${lengthA} lengthB: ${lengthB}`);
    return lengthA > lengthB ? 1 : lengthA < lengthB ? -1 : 0;
  });

  return unsorted;
}
