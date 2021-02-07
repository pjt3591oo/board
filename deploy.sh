# 환경변수 파일생성
echo 'REACT_APP_MODE=prod' > ./client/.env
echo 'MODE=prod' > ./server/.env

# 웹 빌드
cd client
npm run build

cd ../

# 서버빌드
cd server
npm run build

cd ../

# 서버활성화
docker-compose up -d

# 웹서버 설정파일 카피
docker cp ./deploy/nginx/server.conf board_board.server.com_1:/etc/nginx/conf.d/default.conf

# 웹 빌드파일 카피
docker cp ./client/build board_board.server.com_1:/home/

# 웹서버 nginx 재시작
docker exec -it board_board.server.com_1 /bin/bash service nginx reload

# 디비 컨테이너 데이터 베이스 생성
docker exec -it board_board.db.com_1 mysql -u root -ppassword -e "CREATE DATABASE Boards;"