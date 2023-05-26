import axios from "axios"

const url = "http://localhost:8082/card"

export const CardService = {

    buscarUmaCard: (id) => {
        return axios.get(url + "/specific/" + id)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    buscarTodasCards: () => {
        return axios.get(url + "/all")
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    pageBuscarTodasCards: (page, size) => {
        return axios.get(url + "/pageReadAll?page=" + page + "&size=" + size)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    cadastrar: (card) => {
        return axios.post(url + "/create", card)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    editar: (id, card) => {
        return axios.put(url + "/edit/" + id, card)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    deletar: (id) => {
        return axios.delete(url + "/delete/" + id)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    }
}