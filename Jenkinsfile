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
                sh 'npm install'
            }
        }
        
        stage ('deploy to Render') {
            steps { 
                echo 'deploying'
            }
        }
        
    }
}