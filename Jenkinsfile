pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Install") {
            steps {
                git url : "https://github.com/manavchit/task9.2d.git", branch : "main"
                bat "npm install --verbose -omit=optional"
            }
        }
        stage("Build"){
            steps{
                
                bat "npm run build"
            }
        }
        
        stage("Test"){
            steps{
                bat "npm test -- --passWithNoTests"
            }
        }
        
        stage("Code Analysis"){
            steps{
                bat "npx eslint src"
            }
        }
        
        stage("Deploy"){
            steps{
                script{
                    def netlifySiteID = '62227442-d1ae-497d-90ae-da38290aee3c'
                    def netlifyAccessToken = 'nfp_tAFcb1AZ1dEEzTC7LJ8WhLY5Z8Eqt4KY3d7b'
                    
                    bat "npm install netlify-cli --save-dev"
                    bat "npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod"
                }
            }
        }
    
    }
}
