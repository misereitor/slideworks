const BasicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`, {
        method: 'post'
    })
    const json = await req.json()
    return json
}

const addListAction = async (data) => {
    const createList = await BasicFetch(`/lists?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}&name=${Math.random()}&idBoard=${process.env.REACT_APP_API_IDBOARD}`)
    const idList = createList.id
    for (let c in data) {
        let desc = titleize(c)
        if (desc === 'Email') desc = 'E-mail'
        if (desc === 'Estadocivil') desc = 'Estado civil'
        await BasicFetch(`/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}&idList=${idList}&name=${desc}&desc=${data[c]}`)
    }
}

function titleize (string, separator = ' ') {
    return string
        .split(separator)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(separator);
}

export default addListAction