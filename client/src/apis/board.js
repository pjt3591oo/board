import axios from 'axios';

import CONFIG from '../config';

const HOST = CONFIG.HOST[process.env.REACT_APP_MODE || 'dev'];


class Board {
  static async findAll({limit, page}) {
    return axios.get(`${HOST}board/`, {
      params: {
        limit, page
      }
    })
  }

  static async findOne(id) {
    return axios.get(`${HOST}board/${id}`, {
      params: {}
    })
  }

  
  static async create({title, body}) {
    return axios.post(`${HOST}board/`, {title, body});
  }

  static async update(id, {title, body}) {
    return axios.put(`${HOST}board/${id}`, {title, body})
  }

  static async delete (id) {
    return axios.delete(`${HOST}board/${id}`)
  }
}

export default Board;