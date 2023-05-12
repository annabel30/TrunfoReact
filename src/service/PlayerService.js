// import React from                  "react"
import axios from "axios"

const url = "http://localhost:8082/player"

export const PlayerService = {

    buscarUm: (id) => {
        return axios.get(url + "/specific/" + id)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    login: (name, password) => {
        return axios.get(url + "/login/" + name + "/" + password)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    buscarPorNome: (name) => {
        return axios.get(url + "/name/" + name)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    buscarTodos: () => {
        return axios.get(url + "/all")
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    cadastrar: (player) => {
        return axios.post(url + "/create", player)
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    editar: (id, player) => {
        return axios.put(url + "/edit/" + id, player)
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