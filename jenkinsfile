pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'nodejs'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/GLcoz/discord-clone.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment steps here, e.g., uploading to a server
                // sh 'npm run deploy'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
