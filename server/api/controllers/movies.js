const movieModel = require("../model/movies");

module.exports = {
    getById: (req, res, next) => {
        movieModel.findById(req.params.id, (err, movieInfo) => {
            if (err) next(err);
            else res.json({message: "found", data: {movieInfo}});
        });
    },
    getAll: (req, res, next) => {
        let moviesList = [];
        movieModel.find({}, (err, movies) => {
            if (err) next(err);
            else {
                for (let movie of movies) {
                    moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on})
                }
                res.json({message: 'movies found', data: {moviesList}});
            }
        });
    },
    updateById: (req, res, next) => {
        movieModel.findByIdAndUpdate(req.params.id, {name: req.body.name}, (err, movieInfo) => {
            if (err) next(err);
            else res.json({message: 'updated'})
        });
    },
    deleteById: (req, res, next) => {
        movieModel.findByIdAndRemove(req.params.id, (err, movieInfo) => {
            if (err) next(err);
            else res.json({message: 'deleted'});
        });
    },
    create: (req, res, next) => {
        movieModel.create({name: req.body.name, released_on: req.body.released_on}, (err, result) => {
            if (err) next(err);
            else res.json({message: 'added', data: null})
        });
    }
}