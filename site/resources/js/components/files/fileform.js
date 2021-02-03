import React, {Component} from 'react';


export default class FileForm extends Component {

    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {}

        this.sendFile = this.sendFile.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    sendFile(){

        let toSend = new FormData();
        let file = document.querySelector('#fileToUpload').files[0];
        toSend.append('fileToUpload', file);
        toSend.append('_token', this.csrf);

        // console.log(toSend.get('_token'));

        fetch('/test/file/send',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                // headers: {
                //    // 'Content-Type': 'application/json'
                //    'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: toSend // body data type must match "Content-Type" header
            }
        ).then(res =>
                {
                    console.log("res: "); console.log(res);
                }
        );

    }

    onChange(e){ this.state[e.target.name] = e.target.value;}

    render() {
        return (
            <div>
                <form action="/test/file/send" METHOD="post" encType="multipart/form-data">
                        <input type="hidden" name="_token" value={this.csrf}/>
                        <input type="file" id="fileToUpload" name="fileToUpload" onChange={this.onChange}/>
                        <input type="button" name="submit" onClick={this.sendFile} />
                </form>
            </div>
        )
    }

}
