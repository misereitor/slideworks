import BasicFetch from '../api.js'

const getAllList = async () => {
    const allLists = await BasicFetch(
        `/boards/${process.env.REACT_APP_API_IDBOARD}/lists?fields&key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`,
        {
            method: 'get'
        })
    let lists = []
    allLists.forEach(async (element, id) => {
        const list = await BasicFetch(`/lists/${element.id}/cards?fields=name,desc&key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`)
        lists.push([id, list])
    })
    return lists
}

export default getAllList