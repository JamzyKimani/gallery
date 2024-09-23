pipeline {
    agent any
    
    tools {
        nodejs 'node-latest' 
    }
    
    stages {
        stage ('build') {
            steps { 
                echo 'fetching code from GitHub'
                git 'https://github.com/JamzyKimani/gallery.git'
                echo 'Installing dependancies'
                sh 'npm install'
            }  
        }
        stage ('test') {
            steps { 
                echo 'testing application'
                sh 'npm test'
            }
        }
        
        stage ('deploy') {
            steps { 
                echo 'deploying code to Render.com (prod link: https://gallery-2afi.onrender.com )'
                sh 'curl https://api.render.com/deploy/srv-cro6m8pu0jms73c792dg?key=7K9ElyF9Hjk'
            }
        }
        
    }
}