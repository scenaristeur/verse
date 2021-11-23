# verse
- anyone can create a neurone on his pod at https://scenaristeur.github.io/verse/
- a neurone is a node with an action key (see below `store a file on your pod like`)
- neurone action can be executed on a local machine through executor
- neurone can send data to / call another neurone or watch for certain result of a another neurone like dendrites & axiones does

# store a file on your pod like

`
{"name":"flock","@id":"17388935-eecf-4124-a4c2-b1a5f2f4e86c","url":"https://spoggy-test5.solidcommunity.net/verses/17388935-eecf-4124-a4c2-b1a5f2f4e86c.json","modele":"agent","updated":1637363084386,"action":"console.log('hello boss')\nconsole.log('can catch args'+args)"}
`
- then update executor/index.js with the url of your file
`let rone_url = "https://spoggy-test5.solidcommunity.net/public/verses/17388935-eecf-4124-a4c2-b1a5f2f4e86c.json"
`
- execute the code located in the action key of the json file with

`
cd executor
node index.js
`

# inspiration vue idb
- https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
- https://github.com/cfjedimaster/vue-demos/tree/master/idb


# voir aussi offline storage
- https://github.com/filrak/vue-offline

# jsonld
// jsonld https://jsfiddle.net/aveltens/d3tzfhjx/
// https://forum.solidproject.org/t/using-solid-with-json-ld/1641

# vuejs fileter / order
https://vuejs.org/v2/guide/migration.html#Replacing-the-orderBy-Filter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
# activitystreams context
https://www.npmjs.com/package/activitystreams-context
https://github.com/jasnell/activitystreams-context

# ou activitystream objects
- https://github.com/jasnell/activitystrea.ms




### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## gh-pages

comment the dist folder in the .gitignore file

git add dist -f && git commit -m "Initial dist subtree commit"

npm run git -- init
