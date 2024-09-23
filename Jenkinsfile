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
    
    post {
        failure {
            mail to: 'mail4jameskimani@gmail.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Build # ${JOB_NAME} - ${currentBuild.result}! <br> Something is wrong with the build, Check console output at ${env.BUILD_URL}"
        }
        
        success {
            slackSend channel: '#kimani_ip1',
                      color: 'good',
                      message: "The pipeline ${currentBuild.fullDisplayName} completed successfully (Build ID is ${BUILD_ID}). Visit the deployed app on url: https://gallery-2afi.onrender.com"
        }
    }
}