import request from 'superagent';

const defaultConfig = {
    header: {
        'Accept': 'application/json'
    }
};

const post = function (conf) {
    return new Promise((resolve, reject) => {
        request
            .post(conf.url ? conf.url : '')
            .send(conf.body ? conf.body : {})
            .set(conf.header ? conf.header : defaultConfig.header)
            .end((err, res) => {
                if (err) {
                    reject(err.message);
                } else {
                    if (res.status == 200) {
                        resolve(res.body);
                    }
                }
            });
    });
};

const get = function (conf) {
    return new Promise((resolve, reject) => {
        request
            .get(conf.url ? conf.url : '')
            .query(conf.query ? conf.query : {})
            .set(conf.header ? conf.header : defaultConfig.header)
            .end((err, res) => {
                if (err) {
                    reject(err.message);
                } else {
                    if (res.status == 200) {
                        resolve(res.body);
                    }
                }
            });
    });
};

export default {
    post,
    get
};