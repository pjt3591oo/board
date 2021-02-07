import axios from 'axios';

import CONFIG from '../config';

const HOST = CONFIG.HOST[process.env.REACT_APP_MODE || 'dev'];

class File {
  static async upload(payload) {
    return axios.post(`${HOST}file/`, payload)
  }


}

export default File;