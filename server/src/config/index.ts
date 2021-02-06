export default {
  DB: {
    dev: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'Boards',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }
  },
  FILE: {
    dev: {
      dest: '/Users/bagjeongtae/Desktop/board/upload/'
    }
  }
}