var localtunnel = require('localtunnel')

try{
  localtunnel(5000, { subdomain: 'emaily' }, (err, tunnel) => {
  console.log('LT running')
})
} catch ( err ){
  console.log(`Error:${err}`)
}