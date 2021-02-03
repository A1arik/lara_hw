import React, {Component} from 'react';

export default class ImagesCreateForm extends Component {

    constructor(props) {
        super(props);
        this.csrf =document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
    }

    onChange(e){ this.state[e.target.name] = e.target.value;}

    onChangeFile(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
        if(this.setState({fileToUpload:e.target.value}) !== "Файл не выбран")
        {
            let f = e.target.files[0];
            let fr = new FileReader();
            fr.onload = function(ev2) {
                console.dir(ev2);
                $('#imgToUpload').attr('src', ev2.target.result);
                $("#imgToUpload").attr("width","200px");
                $("#imgToUpload").attr("height","200px");
            };
            fr.readAsDataURL(f);
        }

    }



    onSave(e){
        e.preventDefault();
        let toSend = new FormData();
        let file = document.querySelector('#fileToUpload').files[0];
        toSend.append('_token', this.csrf);
        toSend.append('alt', this.state.alt);
        toSend.append('title', this.state.title);

        console.log(toSend);
        toSend.append('fileToUpload', file);

        fetch('/api/images',
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
                this.props.doReload();
                return false;
            }
        );

    return false;
    }

    render() {
        return(
            <div className="form-group">
                <form className="col-md-6" action="" METHOD="post" encType="multipart/form-data">
                    <input type="hidden" name="_token" value={this.csrf}/>
                    <img id="imgToUpload" src="/storage/users/default.png"/><br/>
                    <input type="file" id="fileToUpload" name="fileToUpload" onChange={this.onChangeFile}/><br/>
                    <input type="text" id="alt" name="alt" placeholder="alt" onChange={this.onChange}/><br />
                    <input type="text" id="title" name="title" placeholder="title" onChange={this.onChange}/><br />
                    <button onClick={this.onSave}> Send </button>
                    <button onClick={this.props.doCancel}> Cancel </button>
                </form>
            </div>
        );
    }
}
