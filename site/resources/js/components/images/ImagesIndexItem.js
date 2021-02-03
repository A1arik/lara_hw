import React, {Component} from 'react';

export default class ImagesIndexItem extends Component {

    constructor(props) {
        super(props);
        this.csrf =document.querySelector('meta[name="csrf-token"]').content;

        this.state = {
            error: null,
            isEdit: false,
            id: this.props.image.id,
            alt: this.props.image.alt,
            title: this.props.image.title,
            url: this.props.image.url
        };

        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
    }

    render() {
        if (this.state.isEdit){
            return this.renderForm();
        } else {
            return this.renderIndex();
        }
    }

    renderForm(){
        return (
            <div className="form-group">
                <form className="col-md-6" action="" METHOD="post" encType="multipart/form-data">
                    <input type="hidden" name="_token" value={this.csrf}/>
                    <img width="100px" id="imgToUpload" src={'/storage/' + this.props.image.url}/><br/>
                    <input type="hidden" name="id" value={this.state.id}/>
                    <input type="file" id="fileToUpload" name="fileToUpload" onChange={this.onChangeFile}/><br/>
                    <input type="text" id="alt" name="alt"  placeholder="alt" onChange={this.onChange}/><br />
                    <input type="text" id="title" name="title"  placeholder="title" onChange={this.onChange}/><br />
                    <button onClick={this.onSave}> Send </button>
                    <button onClick={()=>this.setState({isEdit: false})}> Cancel </button>
                </form>
            </div>
        )
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
        toSend.append('_method', 'PUT');
        toSend.append('id', this.state.id);
        toSend.append('alt', this.state.alt);
        toSend.append('title', this.state.title);

        console.log(toSend);
        if(file !== "Файл не выбран") {
            toSend.append('fileToUpload', file);
        } else {
            toSend.append('imgNoChange', 'noChange');
        }


        fetch('/rest/images/' + this.props.image.id,
            {
                method: 'PUT', // *GET, POST, PUT, PATCH, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'x-csrf-token': this.csrf,
                    // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM'
                    // 'Content-Type': 'application/json'
                    // 'Content-Type': 'multipart/form-data'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                 },
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

    renderIndex(){
        return (
            <div>
                <img width="100px" src={'/storage/' + this.props.image.url}  />
                Изображение : {this.props.image.id} <br />
                alt:  {this.props.image.alt}<br />
                title {this.props.image.title}<br/>
                <input type="button" onClick={()=>this.setState({isEdit: true})} value="Edit"/>
                <input type="button" onClick={this.onDelete} value="Delete"/>
            </div>
        )
    }

    onDelete(e){
        e.preventDefault();


        fetch('/rest/images/' + this.props.image.id,
            {
                method: 'DELETE', // *GET, POST, PUT, PATCH, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'x-csrf-token': this.csrf,
                    // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM'
                    // 'Content-Type': 'application/json'
                    // 'Content-Type': 'multipart/form-data'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                // body: toSend // body data type must match "Content-Type" header
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
}

