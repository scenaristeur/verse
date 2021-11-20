const DB_NAME = 'nodedb';
const DB_VERSION = 1;
let DB;
// https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};

			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};

			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("nodes", { keyPath:'id' });
			};
		});
	},
	async deleteNode(node) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['nodes'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('nodes');
			store.delete(node.id);
		});
	},
	async deleteDb(){
		try{
			window.indexedDB.deleteDatabase(DB_NAME)
		}catch(e){
			alert(e)
		}
	},
	async getNodes() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['nodes'],'readonly');
			trans.oncomplete = () => {
				resolve(nodes);
			};

			let store = trans.objectStore('nodes');
			let nodes = [];

			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					nodes.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveNode(node) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['nodes'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('nodes');
			store.put(node);

		});

	}

}
