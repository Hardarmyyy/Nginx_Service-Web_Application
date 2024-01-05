pipeline {

  agent any

  stages {

    stage('Clean Ups') {
      steps {
        echo "Cleaning up environment ...."
        sh "docker-compose down" 
      }
    }

    stage('Installing packages') {
      steps {
        echo "Installing depencies ...."
        sh "npm install"
      }
    }

    stage('Build Images') {
      steps {
        echo "Building docker image ...."
        sh "docker-compose -f docker-compose.yaml build"
        sh "docker tag hardarmyyy/test_nodejs_server ${TEST_NODEJS_SERVER}"
        sh "docker tag hardarmyyy/mongo:latest ${TEST_NODEJS_DB}"
      }
    }

    stage('Deploy and Push Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_REGISTRY_CREDS}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          echo "Logging in to Docker registry ..."
          sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin docker.io"
          echo "Pushing images to dockerhub registry ..."
          sh "docker push ${TEST_NODEJS_SERVER}"
          sh "docker push ${TEST_NODEJS_DB}"
        }
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
      }
    }

  }

  post {

    always {
      sh 'docker logout'
    }

    success {
      echo 'Build successful! Artifacts archived.'
    }

    failure {
      echo 'Build failed. Check the logs for details.'
    }

  }

}

