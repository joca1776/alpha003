[ ! -d 'mxpfu-nodejsLabs' ] && git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git[ ! -d 'mxpfu-nodejsLabs' ] && git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git
git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git
cd mxpfu-nodejsLabs/
ls
pwd
npm install
curl localhost:5000/user
npm start
npm start
mkdir crm-backend
cd crm-backend
npm init -y
npm install express pg dotenv cors
touch server.js
nano server.js
touch .env
nano .env
node server.js
nano Dockerfile
nano .dockerignore
docker build -t gcr.io/alpha001-453321/crm-backend .
gcloud config get-value project
gcloud auth configure-docker
docker push gcr.io/alpha001-453321/crm-backend
gcloud run deploy crm-backend   --image gcr.io/alpha001-453321/crm-backend   --platform managed   --region us-central1   --allow-unauthenticated
gcloud config get-value project
gcloud run deploy crm-backend   --image gcr.io/alpha001-453321/crm-backend   --platform managed   --region us-central1   --allow-unauthenticated
gcloud container images list --repository=gcr.io/alpha001-453321
gcloud container images list
gcloud services enable containerregistry.googleapis.com
gcloud auth configure-docker
docker build -t gcr.io/alpha001-453321/crm-backend .
docker push gcr.io/alpha001-453321/crm-backend
gcloud run deploy crm-backend   --image gcr.io/alpha001-453321/crm-backend   --platform managed   --region southamerica-east1   --allow-unauthenticated
npx create-react-app crm-frontend
cd crm-frontend
npm install -g firebase-tools
firebase login
firebase login --no-localhost
firebase init hosting
firebase projects:list
firebase-debug.log
firebase login --reauth
firebase login --no-localhost
firebase use --add
firebase init
sudo firebase init
cat firebase-debug.log
firebase init
firebase use --add
firebase logout
firebase login --no-localhost
firebase use --add
firebase init
firebase use --add
ls
firebase init
npm install react-router-dom axios
npm start
cd ~/crm-frontend
npm start
pwd
scp -r /home/jo_carlos_1776/crm-frontend jo_carlos_1776@34.151.213.17:/home/jo_carlos_1776/
ssh-keygen -t rsa -b 2048 -f ~/.ssh/google_cloud_ssh
gcloud compute os-login ssh-keys add --key-file ~/.ssh/google_cloud_ssh.pub
gcloud compute ssh --zone=us-central1-a --project=alpha001 --ssh-key-file ~/.ssh/google_cloud_ssh jo_carlos_1776@<instance-name>
gcloud compute ssh --zone=us-central1-a --project=alpha001 --ssh-key-file ~/.ssh/google_cloud_ssh jo_carlos_1776@<alpha2>
gcloud compute ssh --zone=us-central1-a --project=alpha001 --ssh-key-file ~/.ssh/google_cloud_ssh jo_carlos_1776@my-instance
gcloud projects list
gcloud compute ssh --zone=us-central1-a --project=crm-alpha --ssh-key-file ~/.ssh/google_cloud_ssh jo_carlos_1776@my-instance
gcloud compute instances list --project=alpha001
gcloud compute instances list --project=crm-alpha
gcloud auth list
gcloud auth login
gcloud config set project alpha001-453321
gcloud compute instances list --project=alpha001-453321
ls ~/crm-frontend
gcloud compute scp --recurse ~/crm-frontend jo_carlos_1776@alpha2:/home/jo_carlos_1776 --zone=southamerica-east1-c --project=alpha001-453321
gcloud projects list
gcloud config set project abstract-ring-442514-q0
gcloud projects delete  abstract-ring-442514-q0
gcloud projects list
gcloud auth list
gcloud config list project
npm start
npx create-react-app crm-frontend
cd crm-frontend
npm install react-router-dom axios
npm start
npm install mysql2
DB_HOST=<IP_DO_CLOUD_SQL>
DB_USER=root
DB_PASSWORD=<SUA_SENHA>
DB_NAME=crm
DB_HOST=alpha002-453501:southamerica-east1:crm-db-dev
DB_USER=root
DB_PASSWORD=UP[(U0iYK4|.0Ejl
DB_NAME=crm
export DB_HOST="34.95.171.160"
export DB_USER="root"
export DB_PASSWORD="UP\[\(U0iYK4\|.0Ejl"
export DB_NAME="crm"
pwd
ls
mkdir backend
cd backend
npm init -y
npm install express mysql2 dotenv
touch app.js
touch .env
ls
ls -la
nano .env
node app.js
CREATE TABLE customers (
);
mysql -h <DB_HOST> -u <DB_USER> -p
nano .env
node app.js
gcloud sql connect crm-db-dev --user=root --quiet
CREATE TABLE customers (
);
gcloud sql connect crm-db-dev --user=root --quiet
nano .env
node app.js
gcloud sql connect crm-db-dev --user=root
ls
npm i
node -v
npm -v
npm install
nano .env
npm install
npm run dev
nano .env
npm run dev
ls
cd backend
npm install firebase-admin
ls
cd crm-frontend
npm install firebase
ls
cd backend
docker build -t meu-backend
docker build -t meu-backend .
docker run -p 3000:3000 meu-backend
sudo lsof -i :3000
netstat -ano | findstr :3000
sudo apt update
sudo apt install lsof
sudo lsof -i :3000
netstat -tulnp | grep :3000
kill -9 321
netstat -tulnp | grep :3000
docker run -p 3000:3000 meu-backend
ps aux | grep nodemon
docker run -p 3000:3000 meu-backend
sudo netstat -tulnp | grep :3000
sudo kill -9 2313
docker run -p 3000:3000 meu-backend
docker run -p 8080:3000 meu-backend
nano .env
docker build -t meu-backend .
docker run -p 8080:5000 meu-backend
gcloud init
gcloud services enable     sqladmin.googleapis.com     run.googleapis.com     vpcaccess.googleapis.com     containerregistry.googleapis.com
gcloud services list --enabled
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password=UP[(U0iYK4|.0Ejl0\
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --enable-private-ip     --network=default
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --private-network=default
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --network=default
gcloud services enable servicenetworking.googleapis.com
gcloud compute addresses create google-managed-services-default     --global     --prefix-length=16     --network=default     --purpose=VPC_PEERING
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --network=default
gcloud services vpc-peerings connect     --service=servicenetworking.googleapis.com     --network=default     --ranges=google-managed-services-default
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=southamerica-east1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --network=default
gcloud sql databases create meu_banco --instance=meu-banco-de-dados
gcloud compute networks vpc-access connectors create conector-cloudrun-cloudsql     --region=southamerica-east1     --range=10.8.0.0/28     --network=default
gcloud compute networks vpc-access connectors create conector-cloud-run-cloudsql     --region=southamerica-east1     --range=10.8.0.0/28     --network=default
gcloud compute networks vpc-access connectors create conector-cloud-sql     --region=southamerica-east1     --range=10.8.0.0/28     --network=default
gcloud sql instances delete meu-banco-de-dados
gcloud compute networks vpc-access connectors delete conector-cloud-sql --region=southamerica-east1
gcloud run services delete meu-backend-service --region=southamerica-east1
gcloud sql instances create meu-banco-de-dados     --database-version=MYSQL_8_0     --region=us-central1     --cpu=1     --memory=3840MB     --root-password='UP[(U0iYK4|.0Ejl0'     --network=default
gcloud sql databases create meu_banco --instance=meu-banco-de-dados
gcloud compute networks vpc-access connectors create conector-cloud-sql     --region=us-central1     --range=10.8.0.0/28     --network=default
ls
cd crm-frontend
ls
cd src
ls
npm run build
ls[200~scp -r build jo_carlos_1776@34.46.204.59:/var/www/html/~
scp -r build jo_carlos_1776@instance-20250312-144758:/var/www/html/
cd ..
npm run build
scp -r build jo_carlos_1776@instance-20250312-144758:/var/www/html/
ls
scp -r build jo_carlos_1776@34.46.204.59:/var/www/html/
cat ~/.ssh/id_rsa.pub
ssh-keygen -t rsa -b 4096 -C "jo.carlos.1776@gmail.com"
ls ~/.ssh/id_rsa.pub
cat ~/.ssh/id_rsa.pub
scp -r build jo_carlos_1776@34.46.204.59:/var/www/html/
ls
cd ..
ls
cd backend
pwd
cd backend
npm start
nano .env
npm start
scp -r /home/jo_carlos_1776/backend jo_carlos_1776@34.46.204.59:~/
nano .env
npm start
nano .env
npm start
sudo lsof -i :5000
sudo kill -9 6141
sudo lsof -i :5000
npm start
pwd
curl http://localhost:5000/produtos
ssh-copy-id -i ~/.ssh/id_rsa.pub jo_carlos_1776@34.46.204.59
scp -i ~/.ssh/id_rsa -r /home/jo_carlos_1776/backend/* jo_carlos_1776@34.46.204.59:~/backend/
sudo lsof -i :5000
ls
cd backend
sudo lsof -i :5000
cd ..
ls
cd crm-frontend
npm start
cd ..
ls
git init
