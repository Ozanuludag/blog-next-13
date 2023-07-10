import {createClient} from 'next-sanity'

const projectId = 'ow7d726r'
const dataset = 'production'
const apiVersion = '2021-10-21'

export const client = createClient({
projectId,
dataset,
apiVersion,
useCdn: true,
});