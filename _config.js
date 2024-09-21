var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://jameskimani2:4sy1NOu3iosx0IxS@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://jameskimani2:4sy1NOu3iosx0IxS@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://jameskimani2:4sy1NOu3iosx0IxS@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
