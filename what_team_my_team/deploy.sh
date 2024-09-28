REPOSITORY=/home/ubuntu/deploy/service
APP_NAME=wtnt-service

cd $REPOSITORY 

pnpm install --frozen-lockfile

pm2 reload $APP_NAME || pm2 start pnpm --name "$APP_NAME" -- run start
