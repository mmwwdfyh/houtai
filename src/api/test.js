import axios from "@/utils/request"

export default {
    // list(){
    //     return axios({
    //         url:"http://mengxuegu.com:7300/mock/5f4f52288d90085e5b583f5e/list/list"
    //     }) 
    // }
    login(name, pass) {
        return axios({
            url: "http://mengxuegu.com:7300/mock/5f5189718d90085e5b5840f1/login/ind",
            method: "post",
            data: {
                username: name,
                userpass: pass
            }
        })
    },
    getUser(){
        return axios({
            url:"http://mengxuegu.com:7300/mock/5f50b5d58d90085e5b5840a4/jy/yong"
        })
    }
}