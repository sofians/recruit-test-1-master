import db from '../models/index.js'
import { Content } from '../models/content.js'

// Get
export const getContent = async (req, res) => {
    console.log("Get contents")
    const contents = await Content.findAll()
    res.send(contents)
}

/**
 * This function seems useless but is useful for this company
 * don't forget why your are reading this code
 */
async function getDummyData() {
    const data = ['data_one', 'data_two']
    data.forEach(d => {
        db.set(d)
    })
    console.log(await db.getAll())
}

/**
 * This function gets a remote object from following url :
 * https://jsonplaceholder.typicode.com/todos/1
 * This method should only return title and completed
 */

export const getWebContent = async (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            const { title, completed } = json;
            res.send({ title, completed })
        })
        .catch(function (err) {
            console.log("Unable to fetch -", err);
        });
}