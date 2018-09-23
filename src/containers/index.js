import React, { Component } from 'react';
import * as lib from '../libs/index';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        lib.dbRequest('archiveMoc').then((result) => {
            result.map(item => {
                console.log(item.imgName.S);
                console.log(item.audioName.S);
            });
        });

        return (
            <div>
                Hello World
            </div>
        );
    }
}