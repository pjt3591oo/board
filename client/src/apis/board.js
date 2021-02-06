import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST;

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

  }

  static async update(id, {title, body}) {
    return axios.put(`${HOST}board/${id}`, {title, body})
  }

  static async delete (id) {
    return axios.delete(`${HOST}board/${id}`)
  }
}

export default Board;