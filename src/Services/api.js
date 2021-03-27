const BasicFetch = async (endpoint, method) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`, method)
    const json = await req.json()
    return json
}

export default BasicFetch