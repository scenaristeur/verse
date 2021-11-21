let rone_url = "https://spoggy-test5.solidcommunity.net/public/verses/17388935-eecf-4124-a4c2-b1a5f2f4e86c.json"

/* anyone can create a neurone on his pod and
neurone code can be executed on a local machine
*/


/* example de fichier
{"name":"flock","@id":"17388935-eecf-4124-a4c2-b1a5f2f4e86c","url":"https://spoggy-test5.solidcommunity.net/verses/17388935-eecf-4124-a4c2-b1a5f2f4e86c.json","modele":"agent","updated":1637363084386,"action":"console.log('hello boss')\nconsole.log('can catch args'+args)"}
*/

const fs = require('fs')
const fetch = require('node-fetch');
const path = require('path')

let settings = { method: "Get" };

fetch(rone_url, settings)
.then(res => res.json())
.then((json) => {
  console.log(json)
  createAction(json)
  // do something with JSON
});


function createAction(rone){
  let id  = rone['@id']
  let action = rone.action
  console.log("action",action)

  let file = path.resolve(__dirname, id+'_module.js')

  // let content =
  // `module.exports={
  //   func:function(){
  //     ${action}
  //     // return true;
  //   },
  //   val:10,
  // }`

  let content =
  `module.exports= {
    func:function(args){
      console.log("args",args)
      ${action}
      // return true;
    },
    val:10,
  }`



  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err)
      return
    }

console.log("require",file)
    var m=require(file);
    m.func()
    console.log(m.val)
    m.func("with args, should be an object ")
    //file written successfully
  })


}
