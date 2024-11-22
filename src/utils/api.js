import apiConfig from './apiConfig.json'

const Api = () => {
    /**
     * Get data from the API
     * @param {string} path The path to the API endpoint 
     * @returns {Promise} The response from the API
     */
    const get = async (path) => {
        const response = await fetch(`${apiConfig.url}${path}`)
        return await response.json()
    }

    /**
     * Post data to the API
     * @param {*} path 
     * @param {*} data 
     * @returns 
     */
    const post = async (path, data) => {
        const response = await fetch(`${apiConfig.url}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    }

    /**
     * Get all cats from the API
     * @returns 
     */
    const getAllCats = async () => {
        //return dummy data
        return [
            {
                id: 1,
                name: "Felix",
                specie: "Hauskatze",
                age: 3,
                isVegan: false,
            },
            {
                id: 3,
                name: "Luna",
                specie: "Hauskatze",
                age: 2,
                isVegan: false,
            },
            {
                id: 1,
                name: "Felix",
                specie: "Hauskatze",
                age: 3,
                isVegan: false,
            },
            {
                id: 3,
                name: "Luna",
                specie: "Hauskatze",
                age: 2,
                isVegan: false,
            },
        ]

        return await get('/cats')
    }


    return {
        getAllCats
    }
}

export default Api()