const BasicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

const getAllList = async () => {
    const allLists = await BasicFetch(`/boards/${process.env.REACT_APP_API_IDBOARD}/lists?fields&key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`)
    let lists = []
    allLists.forEach(async element => {
        const list = await BasicFetch(`/lists/${element.id}/cards?fields=name,desc&key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`)
        lists.push(list)
    })
    return lists
}

export default getAllList