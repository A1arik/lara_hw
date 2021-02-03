import React, {Component} from 'react';
import Title from "../../layouts/Title";
import CrudForm from "./form";

export default class Crud extends Component {


    constructor(props) {
        super(props);
        this.csrf =document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            error: null,
            isLoaded: false,
            isEdit: false,
            isNew: false,
            items:[], // коллекция элементов
            obj:null, // место для нового элемента
            id:0 // номер выделенного элемента (для редактирования или удаления)
        };

        this.doCreate = this.doCreate.bind(this);
        this.sendCreate = this.sendCreate.bind(this);
        this.doRead = this.doRead.bind(this);
        this.doUpdate = this.doUpdate.bind(this);
        this.sendUpdate = this.sendUpdate.bind(this);
        this.doDelete = this.doDelete.bind(this);
        this.sendDelete = this.sendDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.doCloseForm = this.doCloseForm.bind(this);

    }


    componentDidMount() {
        this.doRead();
    }




    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            if (this.state.isEdit){
                return this.renderEditForm();
            } else if (this.state.isNew) {
                return this.renderNewForm();
            }
            return this.renderList();
        }
    }

    renderNewForm(){
        return (
            <div>
                <Title title="Create"/>
                <div className="content-lg container">
                    <div className="row margin-b-20">
                        <h2 className="color-black">Create form</h2>
                        <input type="text" className="form-control footer-input margin-b-20" placeholder="Name" name="Name"  onChange={this.onChange} required/>
                        <input type="number" className="form-control footer-input margin-b-20" placeholder="First" name="First" onChange={this.onChange}required/>
                        <input type="number" className="form-control footer-input margin-b-20" placeholder="Second"  name="Second"  onChange={this.onChange}required/>
                        <input type="number" className="form-control footer-input margin-b-30"  placeholder="Third" name="Third" required  onChange={this.onChange}></input>
                        <button type="submit" className="btn-theme btn-theme-sm btn-base-bg text-uppercase" onClick={this.sendCreate}>Сохранить</button>
                        <button onClick={this.doCloseForm}> Отменить </button>
                    </div>
                </div>
            </div>
        );
    }

    renderEditForm(){
        return (
            <div>
                <Title title="Edit"/>
                <div className="content-lg container">
                    <div className="row margin-b-20">
                        Редактирование
                        <button onClick={this.doCloseForm}> Отменить </button>
                    </div>
                </div>
            </div>
        );
    }

    renderList(){
        return(
            <div>
                <Title title="CRUD"/>
                <div className="content-lg container">
                    <div className="row margin-b-20">
                        <ul>
                            { this.state.items.map(item => (
                                <li>{item.name}
                                <button value={item.id} onClick={this.doDelete}> Удалить </button>
                                <button value={item.id} onClick={this.doUpdate}> Редактировать </button>
                                </li>
                            ))}
                            <button onClick={this.doCreate}> Создать </button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }


    doCreate(){
        this.setState({isNew: true, id:0 });
    }


    sendCreate(){
        this.state.obj = {
            _token: this.csrf,
            Name: this.state.Name,
            First:this.state.First,
            Second:this.state.Second,
            Third:this.state.Third,
        }
        console.log(this.state.obj);
        fetch('/api/crud',
            {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            // mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(this.state.obj) // body data type must match "Content-Type" header
            }
        )
        .then(res =>
            {
                console.log("res"); console.log(res);
                if (res.status == 201){
                    this.setState({isNew:false});
                    this.doRead();
                } else {
                    this.setState({error: res.status})
            }
            }
        );
    }

    doRead(){
        fetch("/api/crud")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("then: ");
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    doUpdate(e){
        this.setState({isEdit: true, id: e.target.value});
    }

    sendUpdate(){}


    doDelete(e){
        this.setState({id: e.target.value});
        console.log("Delete: " + id);
        this.sendDelete()
    }

    sendDelete(){

        let toSend = {
            id: this.state.id,
            _token: this.csrf
        }
        fetch('/api/crud/' + id,
            {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(toSend) // body data type must match "Content-Type" header
            }
        )
            .then(res =>
                {
                    console.log("res"); console.log(res);
                    if (res.status == 200){
                         this.doRead();
                     } else {
                         this.setState({error: res.status})
                     }
                }
            );
    }

    onChange(e){ this.state[e.target.name] = e.target.value;}

    doCloseForm(){
        this.setState({isEdit: false, isNew:false, id: 0});
    }
}
