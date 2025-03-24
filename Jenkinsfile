pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-ssh-key', url: 'git@github.com:Praveen-Hapuarachchi/simple-blog-app.git'
                // Add this step to initialize and update submodules
                sh 'git submodule update --init --recursive'
            }
        }
        stage('Build and Push Docker Images') {
            steps {
                script {
                    // Log in to Docker Hub
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    
                    // Build and tag images
                    sh 'docker build -t praveenlichchavi/simple-blog-backend:latest ./simple-blog-backend'
                    sh 'docker build -t praveenlichchavi/simple-blog:latest ./simple-blog'
                    sh 'docker build -t praveenlichchavi/simple-blog-nginx:latest ./nginx'
                    
                    // Push images to Docker Hub
                    sh 'docker push praveenlichchavi/simple-blog-backend:latest'
                    sh 'docker push praveenlichchavi/simple-blog:latest'
                    sh 'docker push praveenlichchavi/simple-blog-nginx:latest'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Update docker-compose.yml to use Docker Hub images
                    sh '''
                    sed -i 's|build: ./simple-blog-backend|image: praveenlichchavi/simple-blog-backend:latest|' docker-compose.yml
                    sed -i 's|build: ./simple-blog|image: praveenlichchavi/simple-blog:latest|' docker-compose.yml
                    sed -i 's|build: ./nginx|image: praveenlichchavi/simple-blog-nginx:latest|' docker-compose.yml
                    '''
                    
                    // Deploy using docker-compose
                    sh 'docker-compose down --remove-orphans'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            sh 'docker-compose logs'
        }
    }
}