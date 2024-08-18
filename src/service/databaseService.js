const { formatDate } = require("../utils/helpers");
const User = require("../model/user")

async function addWebsiteToDatabase(info){
    try {
        const updatedDocument = await User.findByIdAndUpdate(
            info.id,
            { $push: { websites: {name:info.webname,url:info.endpoint,id:info.webid,date:formatDate(),status:true} } },
            { new: true } // Return the updated document
        );

        if (!updatedDocument) {
            console.log(`Document with ID ${updatedDocument._id} not found.`);
            return false;
        }

        console.log(`Object added to items array:`, updatedDocument);
        return true;
    } catch (error) {
        console.error('Error updating document:', error);
        return false;
    }
}

module.exports={
    addWebsiteToDatabase

}