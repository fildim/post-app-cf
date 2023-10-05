const PostEntity = require('../model/Post').PostEntity;
const dataSource = require('../connect').dataSource;

function findAll() {
    const result = dataSource
        .getRepository(PostEntity)
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.categories", "category")
        .getMany();

    return result;    
}


function findOne(id) {
    const result = dataSource
        .getRepository(PostEntity)
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.categories", "category")
        .where("post.id = :id", { id : id })
        .getOne();

    return result;    
}


function create(data) {
    const result = dataSource
        .getRepository(PostEntity)
        .save(data)
        .catch(error => console.log(error));
        
    return result;    
}

// example for create
// {
//     "title" : "this",
//     "text" : "this is a post",
//     "categories" : [
//         { "id" : 21 },
//         { "id" : 31 }
//     ]
// }


function updatePost(data) {
    const result = dataSource
        .getRepository(PostEntity)
        .createQueryBuilder()
        .update(PostEntity)
        .set({
            title : data.title,
            text : data.text
        })
        .where("id = :id", { id : data.id })
        .execute();

    return result;    
}

function updateCategory(data) {
    // 8:36 παρασκευης
}





module.exports = { findAll, findOne, create, updatePost };