'use strict';

module.exports =function(app){

    var task=require('../controller/taskController');

    //task routes

    app.route('tasks')
    .get(task.list_all_tasks);
    
}