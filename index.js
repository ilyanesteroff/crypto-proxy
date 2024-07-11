const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
/*
  PLEASE ENSURE ALL OF SERVICES ARE RUNNING
*/
const app = express()
app.get('/test-proxy', (req, res) => res.json({ proxy: true }))
app.use(
  '/api/v1/crypto',
  createProxyMiddleware({
    target: 'http://localhost:8080/api/v1/crypto', changeOrigin: true
  })
)

app.use(
  '/',
  createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true, ws: true })
)

app.listen(7000, () => {
  console.log('PLEASE ENSURE ALL OF SERVICES ARE RUNNING')
  console.log('THIS IS ONLY DEV SOLUTION')
})
