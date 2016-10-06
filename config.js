// NODE_ENV=production forever [flags] start app.js [app_flags]
// NODE_ENV=production nodemon app.js

module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'prod':
            return {
                port: 8080
            };

        // case 'dev':
        default:
            return {
                port: 9001,
                hint: console.log('Add `NODE_ENV=prod` for production settings')
            };
    }
};
