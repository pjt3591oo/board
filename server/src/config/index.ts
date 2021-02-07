export default {
  DB: {
    dev: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'Boards',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }, 
    prod: {
      type: 'mysql',
      host: 'board_board.db.com_1',
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
    },
    prod: {
      dest: '/var/upload/'
    }
  }
}