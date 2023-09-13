import axios from "axios"

const url = "http://localhost:8082/authentication"

export const AuthenticationService = {

    login: (player) => {
        return axios.post(url, player, {withCredentials: true})
        .then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    }

}