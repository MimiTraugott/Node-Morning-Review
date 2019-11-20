const users = [{name: "Meem"}]

module.exports = {
    getUsers (req, res){
        res.status(200).send(users)
    },
    addUsers (req, res){
        users.push(req.body)
        res.status(200).send(users)
    },
    
}