const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3001
const userCtrl = require('./usersControllers')

app.get('/ap/users', userCtrl.getUsers)
app.post('api/users', userCtrl.addUsers)
app.put('api/users', userCtrl.updateUser)

app.listen(PORT, () => console.log(`its too early to be listening on ${PORT}`))