import corsWrapper from 'cors'
import { RequestHandler } from 'express'

/**
 * Hey there you curious :)
 *
 * By default, NextJS APIs are same-site origin only.
 * But since *I needed the main project*
 * to have public API access, I had to configure CORS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */
const CORS_OPTIONS = {
    methods: ['GET', 'OPTIONS'],
}

function promisifyMiddleware(middleware) {
    return (req, res) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
}

// Initialize the cors middleware
const cors = promisifyMiddleware(corsWrapper(CORS_OPTIONS))

export default cors
