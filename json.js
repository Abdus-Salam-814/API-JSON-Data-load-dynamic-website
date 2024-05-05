const user = { id: 1, name: 'gorib Amir', job: 'Actor'};
//JvavScript Object Notetion (JSON)
// JSON.stringify();

console.log(user);

const stringifyed = JSON.stringify(user);

console.log(stringifyed);

const javaScriptObjsct = JSON.parse(stringifyed)

console.log(javaScriptObjsct)
