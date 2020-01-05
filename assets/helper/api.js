import { createClient } from 'contentful'

const client = createClient({
    space: process.env.NUXT_ENV_SPACE_ID,
    accessToken: process.env.NUXT_ENV_ACCESS_TOKEN
})

export const fetchEntries = (content_type = 'post', options) =>
    client.getEntries({
        ...options,
        content_type
    })

export const fetchPostById = id => client.getEntry(id)
