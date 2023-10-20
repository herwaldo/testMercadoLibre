export const getProductPorId = async ( identificador) => {
    const url = `http://localhost:3040/api/items/${ identificador }`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data;
}