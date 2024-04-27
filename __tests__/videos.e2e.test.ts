import {req} from './test-helpers'
import {setDB} from '../src/db/db'
import {dataset1} from './datasets'
import {SETTINGS} from '../src/settings'
import { describe, it } from 'node:test'
 
describe('/videos', () => {
    beforeAll(async () => {
        // await req.delete('/testing/all-data')
    })
 
    // it('hello-world', async () => {
    //     // setDB()
 
    //     const res = await req
    //         .get(SETTINGS.PATH.TESTING)
    //         .expect(200)
 
    //     console.log(res.body)
 
    //     // expect(res.body.length).toBe(0)
    // })
    it('should get not empty array', async () => {
        setDB(dataset1)
 
        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)
  
        expect(res.body.length).toBe(1)
        expect(res.body[0]).toEqual(dataset1.videos[0])
    })
})

function beforeAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.')
}


function expect(length: any) {
    throw new Error('Function not implemented.')
}
