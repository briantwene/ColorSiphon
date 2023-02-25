import Dexie from "dexie"

//create db

export const db = new Dexie('demo');

db.version(1).stores({
    colorHistory: '++id, colors'
})