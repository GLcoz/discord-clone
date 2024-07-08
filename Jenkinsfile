pipeline {
    agent any
    environment {
        NODE_VERSION = '18'
    }
    stages {
        stage('Install Node.js') {
            steps {
                sh '''
                #!/bin/bash
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm install ${NODE_VERSION}
                nvm use ${NODE_VERSION}
                '''
            }
        }
        stage('Checkout') {
            steps {
                git 'https://github.com/GLcoz/discord-clone.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm use ${NODE_VERSION}
                npm install
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm use ${NODE_VERSION}
                npm test
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment command here
                // sh 'your-deploy-command'
            }
        }
    }
}
