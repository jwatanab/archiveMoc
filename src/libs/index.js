import request from 'superagent';

/**
 * DynamoDBに対してリクエストを発行します
 * 
 * @param {String} tableName
 *     AWS Dynamo DBにリクエストを発行する際のテーブル名.
 * 
 * @param {String} opt
 *     DBに対するアクションを設定します
 *     制約: *を指定すると全レコードの取得を行います.
 */
export function dbRequest(tableName, opt = null) {
    return new Promise((resolve, reject) => {
        request.post('/l/g')
            .query([tableName, opt])
            .end((err, res) => {
                if (err) reject(err);
                resolve(res.body);
            });
    });
}