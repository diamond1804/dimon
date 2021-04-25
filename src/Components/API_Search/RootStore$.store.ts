import axios from 'axios'
import { flow } from 'mobx'
import { ResultFromGoogle } from './ResultFromGoogle'
import { applySnapshot, types } from 'mobx-state-tree'
import { makeSnapshotInFromGoogle } from './functionsGoogle'




export const RootStore$ = types.model('RootStore$', {
    content_from_google$: types.array(ResultFromGoogle),
    query_param_google: ''
})
    .actions((self) => ({
        updateGoogle(param: string): void {
            self.query_param_google = param
        },
        requestGoogle: flow(function* () {
            try {
                const res = yield axios.get(`https://google-search3.p.rapidapi.com/api/
v1/search/q=${ self.query_param_google }$num=10`, {
                    headers: {
                        'x-rapidapi-key':  '654ad9d07bmsh04689b4191d1d6cp10d199jsn2a122546e7f9',                        'x-rapidapi-host': 'google-search3.p.rapidapi.com'
                    }
                })
                applySnapshot(self.content_from_google$, makeSnapshotInFromGoogle(res))
            } catch (e) {
                console.error('>>Error', e)
            }
        })
    }))