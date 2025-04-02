pipeline {
    agent any
    triggers {
        pollSCM('H/1 * * * *')
    }
    environment {
        KUBECONFIG = "C:\\Users\\DELL\\Desktop\\6th sem\\EE6254_DevOps Engineering\\DevOps_Project\\terraform\\kubeconfig.yaml"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Praveen-Hapuarachchi/simple-blog-app.git'
            }
        }
        stage('Build Images') {
            steps {
                script {
                    bat 'docker build -t praveenlichchavi/simple-blog:latest ./simple-blog'
                    bat 'docker build -t praveenlichchavi/simple-blog-backend:latest ./simple-blog-backend'
                    bat 'docker build -t praveenlichchavi/nginx:latest ./nginx'
                }
            }
        }
        stage('Push Images') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
                    }
                    bat 'docker push praveenlichchavi/simple-blog:latest'
                    bat 'docker push praveenlichchavi/simple-blog-backend:latest'
                    bat 'docker push praveenlichchavi/nginx:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    try {
                        withCredentials([string(credentialsId: 'do-token', variable: 'DO_TOKEN')]) {
                            echo "Using DigitalOcean token: [REDACTED]"
                            bat 'set TF_VAR_do_token=%DO_TOKEN%'
                            bat 'cd terraform && terraform init && terraform apply -auto-approve'
                        }
                        bat 'kubectl apply -f k8s/ --kubeconfig="%KUBECONFIG%"'
                        bat 'kubectl rollout status deployment/mongo --kubeconfig="%KUBECONFIG%"'
                        bat 'kubectl rollout status deployment/simple-blog-backend --kubeconfig="%KUBECONFIG%"'
                        bat 'kubectl rollout status deployment/simple-blog --kubeconfig="%KUBECONFIG%"'
                        bat 'kubectl rollout status deployment/nginx --kubeconfig="%KUBECONFIG%"'
                    } catch (Exception e) {
                        echo "Error during Kubernetes deployment: ${e.getMessage()}"
                        error "Failed to deploy to Kubernetes: ${e.getMessage()}"
                    }
                }
            }
        }
    }
    post {
        always {
            bat 'docker system prune -f'
            archiveArtifacts artifacts: 'logs.txt', allowEmptyArchive: true
        }
        success {
            echo 'Deployment completed successfully! Access your app at http://209.38.173.211/'
        }
        failure {
            echo 'Deployment failed. Check the logs for details.'
        }
    }
}