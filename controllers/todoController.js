module.exports = function(app){

    //Show todo
    app.get('/todo',function(req,res){
        res.render('todo');
    });

    //Fill todo
    app.post('/todo',function(req,res){

    });

    //Remove todo
    app.delete('/todo',function(req,res){

    });
}