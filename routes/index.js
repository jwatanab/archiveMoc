const express = require('express');
const assert = require('assert');
const aws = require('aws-sdk');
const conf = require('config');

const router = express.Router();

const dynamodb = new aws.DynamoDB({
    region: conf.awsRegion,
    accessKeyId: conf.awsAccessKeyId,
    secretAccessKey: conf.awsSecretAccessKey
});


//-----------------------------------
// Content Res
//-----------------------------------

/**
 *
 * @param {Object} req
 * @param {Object} res 
 */
router.get('/', (req, res) => {
    res.render('index');
});

//--------------------------------
// API
//--------------------------------

/**
 * DBからの全レコード抽出を行う
 * 
 * @param {Object} req
 * @param {Object} res
 * @returns {void}
 */
router.post('/l/g', (req, res) => {
    const opt = req.query[1];
    if (!opt || opt === '*') {
        dynamodb.scan({ TableName: req.query[0] }, (err, data) => {
            assert.ifError(err);
            res.send(data.Items);
        });
        return;
    }

    // getItemメソッドの使い方が分からないので保留
    if (opt) {
        // return dynamodb.getItem({}, (err, data) => {
        //     assert.ifError(err);
        //     res.send(data.Item);
        // });
    }
});

module.exports = router;
