import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST;

class File {
  static async upload(payload) {
    return axios.post(`${HOST}file/`, payload)
  }


}

export default File;