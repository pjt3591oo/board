# 기술스택

```
서버: nest.js
디비: mysql, typeorm
배포: docker, nginx

프론트: react.js
디자인: styled-components, storybook
```

# 배포

## production

* up

```
$ chmod 755 deploy.sh

$ ./deploy.sh
```

* down

```
$ docker-compose down
```

http://localhost/board

swagger => http://localhost/api

# 로컬 테스트

* 디비

```
$ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password --name board.db.com mysql:5.7

$ docker exec -it board.db.com mysql -u root -ppassword -e "CREATE DATABASE Boards;"
```

데이터베이스 생성 명령어에서 다음과 같은 경고문구가 출력될 수 있음.

```
mysql: [Warning] Using a password on the command line interface can be insecure.
```

* 서버

```
$ cd server 
$ npm run start:dev
```

서버/api 접속할 경우 swagger 접속가능

* 웹

```
$ cd client 
$ npm run start
```



---

디자인은 귀찮아서 도저히 못하겠다 ㅋㅋ