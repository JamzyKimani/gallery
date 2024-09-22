pipeline {
    agent any
    stages {
        stage ('Fetch Code from Github') {
            steps { 
                git 'https://github.com/JamzyKimani/gallery.git'
            }
        }
        
        stage ('installing dependancies') {
            steps { 
                echo 'installing dependancies'
            }
        }
        
        stage ('deploy to Render') {
            steps { 
                echo 'deploying'
            }
        }
        
    }
}