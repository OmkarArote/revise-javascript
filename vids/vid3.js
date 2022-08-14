console.log('VAR vs LET vs CONST');
// Using Var
console.log('--------- Using Var ---------');
var a = 'Suman';
{
  var a = 'Omkar';
  console.log('Value of a inside the block: ' + a);
}
console.log('Value of a outside the block: ' + a);
// Using Let
console.log('--------- Using Let ---------');
let b = 'Suman';
{
  let b = 'Omkar';
  console.log('Value of b inside the block: ' + b);
}
console.log('Value of b outside the block: ' + b);
// Using Const
console.log('--------- Using Let ---------');
const c = 'Suman';
// const c = 'Omkar'; //Uncomment this and a error will be shown because a const cannot be changed in any condition once it's been declared
{
  const c = 'Omkar';
  console.log('Value of b inside the block: ' + b);
}
console.log('Value of b outside the block: ' + b);
