const User = require('../model/user')

async function fetchWebsites(data){
    const user =await User.findOne({_id:data.id})
    if(!user){
        return false
    }
    const webarray= await user.get("websites")
    return webarray
}

module.exports={fetchWebsites}