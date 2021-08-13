const { REACT_BASE_API } = process.env;

const makeResponse = async (url) => {
    const response = await fetch(url);
    return response.json();
}

export const getMarvelCharacters = async () => {
    return makeResponse(REACT_BASE_API + `/v1/public/charactersFetches`)
}