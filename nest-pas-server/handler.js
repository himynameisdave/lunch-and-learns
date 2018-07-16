//  You can import/export as many main functions as you want
//  This is like doing `module.exports.me = () => ...`
//  Each export will have it's own endpoint like `/me` (specified in serverless.yml)
export { default as me } from './src/lambdas/me.js';
