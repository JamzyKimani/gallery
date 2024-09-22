pipeline {
    agent any
    stages {
        stage ('build') {
            steps { 
                git 'https://github.com/JamzyKimani/gallery.git'
                sh 'npm install'
            }
            
        }
        
        stage ('test') {
            steps { 
                echo 'testing application'
            }
        }
        
        stage ('deploy') {
            steps { 
                echo 'deploying'
            }
        }
        
    }
}