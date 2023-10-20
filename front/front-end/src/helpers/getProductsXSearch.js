export const getProductsXSearch = async ( nombre) => {
    const url = `http://localhost:3040/api/items?q=${ nombre }&limit=4`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data;
}