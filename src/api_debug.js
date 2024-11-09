import axios from 'axios'
import store from './store'

export default {
    async auth() {
        return this.answer('');
    },
    async sign_in(user_name, password) {
        return this.answer('');
    },
    async sign_up(user_name, password) {
        return this.answer('');
    },
    async dict_list() {
        let t = '[{"id": 0,"name": "test"}]'
        return this.answer(JSON.parse(t))
    },
    async dict_create(name) {
        return this.answer('');
    },
    async word_list(dict_id) {
        let t = '[ { "id": 0, "first": "test1", "second": "тест1" }, { "id": 1, "first": "test2", "second": "тест2" }, { "id": 2, "first": "test3", "second": "тест3" } ]'
        return this.answer(JSON.parse(t))
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
    },
    answer(data) {
        return {status: 200, data: data}
    }
}