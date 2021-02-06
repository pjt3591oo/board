# 기술스택

```
서버: nest.js
디비: mysql, typeorm
배포: docker, nginx

프론트: react.js
디자인: styled-components, storybook
```

# 서버실행

```
$ cd server
$ npm run start
```

# 디비

```
$ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password --name board.db.com mysql:5.7
```