const postService = require('../services/post.services');

exports.findAll = async(req, res) => {
    console.log("Find all posts");

    try {
        const result = await postService.findAll();

        res.status(200).json({ status : true, data : result });
        console.log("Success in finding all posts");

    } catch(err) {
        res.status(400).json({ status : false, data : err });
        console.log("Problem in finding all posts");
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    console.log("Find post with id ", id);
    
    try {
        const result = await postService.findOne(id);

        res.status(200).json({ status : true, data : result });
        console.log("Success in finding post with id ", id);

    } catch(err) {
        res.status(400).json({ status : false, data : err });
        console.log("Problem in finding post with id ", id);
    }
}



exports.create = async(req, res) => {
    const data = req.body;

    console.log("Insert post", data.title);

    try {
        const result = await postService.create(data);

        res.status(200).json({ status : true, data : result });
        console.log("Success in saving post");

    } catch (err) {
        res.status(400).json({ status : false, data : err });
        console.log("Problem in saving post");
    }
};


exports.updatePost = async(req, res) => {
    const id = req.params.id;

    console.log("Update post with id ", id);

    try {
        const result = await postService.updatePost(req.body);

        res.status(200).json({ status : true, data : result });
        console.log("Success in updating post with id ", id);

    } catch (err) {
        res.status(400).json({ status : false, data : err });
        console.log("Problem in updating post with id", id);
    }
}


