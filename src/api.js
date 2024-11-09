import axios from 'axios'
import store from './store'
import ad from './api_debug';

const is_debug = false;

export default {
    async auth() {
        if (is_debug) return ad.auth()

        return await axios.get('/api/auth')
    },
    async sign_in(user_name, password) {
        if (is_debug) return ad.sign_in(user_name, password)
            
        let resp = await axios.post('/api/sign_in', {user_name, password})
        this.check(resp)
        return resp
    },
    async sign_up(user_name, password) {
        if (is_debug) return ad.sign_up(user_name, password)

        let resp =  await axios.post('/api/sign_up', {user_name, password})
        this.check(resp)
        return resp
    },
    async dict_list() {
        if (is_debug) return ad.dict_list()

        let resp = await axios.get('/api/dict')
        this.check(resp)
        return resp
    },
    async dict_create(name) {
        if (is_debug) return ad.dict_create(name)

        let resp =  await axios.post('/api/dict', {name})
        this.check(resp)
        return resp
    },
    async word_list(dict_id) {
        if (is_debug) return ad.word_list(dict_id)

        let resp = await axios.get('/api/dict/' + dict_id)
        this.check(resp)
        return resp
    },
    async word_create(dict_id, first, second) {
        let resp =  await axios.post('/api/word/' + dict_id, {first, second})
        this.check(resp)
        return resp
    },
    async word_remove(dict_id, word_id) {
        let resp =  await axios.delete('/api/word/' + dict_id + '/' + word_id)
        this.check(resp)
        return resp
    },
    check(resp) {
        if (resp.status >= 400) {
            if (resp.data.message) {
                store.dispatch('notifyError', resp.data.message)
            }
        }
    }
}