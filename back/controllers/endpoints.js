const { response, request } = require('express');
const axios = require('axios');

const urlBusqueda = `https://api.mercadolibre.com/sites/MLA/search`;
const urlBusquedaId = `https://api.mercadolibre.com/items/`;

const busquedaArticulosPorNombre = async (req = request, res = response) => {

    const { q } = req.query;
    
    try {
        // Petición http
        const intance = axios.create({
            baseURL: urlBusqueda,
            params: { q, limit:4 }
        });

        const resp  = await intance.get();
        const data = resp.data.results.map( producto => ({
            id: producto.id,
            title: producto.title,
            thumbnail: producto.thumbnail,
            price: producto.price,
            state_name: producto.address.state_name,
        }));

        res.json({
            results: data,
            total: resp.data.paging.total
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msj:"Error en la petición, consulte al daminsitrador",
        });
    }
}

const consultarArticuloPorId = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const intance = axios.create({
            baseURL: `${ urlBusquedaId }${id}`
        });

        const resp2 = await intance.get();

        // Petición http
        const intance2 = axios.create({
            baseURL: `${ urlBusquedaId }${id}/description`
        });

        const resp = await intance2.get();
        data = {
            id: resp2.data.id,
            title: resp2.data.title,
            price: resp2.data.price,
            thumbnail: resp2.data.thumbnail,
            descripcion: resp.data.plain_text
        }

        res.json({
            data
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msj:"Error en la petición, consulte al daminsitrador",
        });
    }
}

module.exports = {
    busquedaArticulosPorNombre,
    consultarArticuloPorId,
}