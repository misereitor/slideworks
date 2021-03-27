import BasicFetch from '../api.js'

const addListAction = async (data) => {
    const createList = await BasicFetch(
        `/lists?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}&name=${Math.random()}&idBoard=${process.env.REACT_APP_API_IDBOARD}`,
        {
            method: 'post'
        })
    const idList = createList.id
    for (let c in data) {
        let desc = toUpper(c)
        if (desc === 'Email') desc = 'E-mail'
        if (desc === 'Estadocivil') desc = 'Estado civil'
        if (desc === 'Descricao') desc = 'Descriçao'
        await BasicFetch(
            `/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}&idList=${idList}&name=${desc}&desc=${data[c]}`,
            {
                method: 'post'
            })
    }
}

function toUpper (string, separator = ' ') {
    return string
        .split(separator)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(separator);
}

export default addListAction