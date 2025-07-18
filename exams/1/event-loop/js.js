console.log(console.prototype) //undefinde
console.log(console) /* Object [console] {
  log: [Function: log],
  info: [Function: info],
  debug: [Function: debug],
  warn: [Function: warn],
  error: [Function: error],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  dirxml: [Function: dirxml],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]
}*/
let obj = {
    name:'name',
    lastName:'lastName',
    method:function(){console.log('I am a method');}
};
// console.log(obj)
console.clear() //cls jhaha