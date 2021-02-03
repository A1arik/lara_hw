import React, {Component} from 'react';
import Title from "../../layouts/Title";
import Questions from "./questions";

export default class Test extends Component {


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
            qcount: 1,
            acount: [],
            id:0 // номер выделенного элемента (для редактирования или удаления)
        };

        this.doCreate = this.doCreate.bind(this);
        this.doAddQuestion = this.doAddQuestion.bind(this);
        this.doAddAnswer = this.doAddAnswer.bind(this);


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
        let el = [];
        el.push(<Title title="Create"/>);
        el.push(<h2 className="color-black">Create new test</h2>);
        el.push(<input type="text" className="form-control footer-input margin-b-20" placeholder="Название теста" name="Name"  onChange={this.onChange} required/>);
        let q = 0;
        let a= 0;
        //this.state.acount[q] = 1;
        for (q = 0; q < this.state.qcount;q++) {
           el.push(<label> Вопрос {q} :</label>);
           el.push (<input type="text" name={'q' + q} placeholder="Вопрос" class="q"/>);
           el.push (<br />);

           for(a =0; a < this.state.acount[q]; a++){
               el.push(<label>Ответ {q} {a}:</label>);
               el.push(<input type="text" name={'q' + q + 'a' + a} placeholder="Ответ" class={'a' + q}/>);
               el.push (<br />);
           }
           el.push(<button onClick={this.doAddAnswer} data-column={q}>Add A</button>);
        }
        el.push (<br />);
        el.push(<button onClick={this.doAddQuestion}>Add Q</button>);
        el.push(<button onClick={this.sendCreate}>Send</button>);

        return el;
    }

    doAddAnswer(e){
        let q = e.currentTarget.getAttribute('data-column');
        console.log("question " + q);
        let acount = [];
        if (this.state.acount[q] === undefined)
            this.state.acount[q] = 0;
        acount = this.state.acount;
        acount[q] = acount[q] + 1;
        this.setState({acount: acount });
        console.log("now answer: " + this.state.acount);
    }
    doAddQuestion(){
        let n = this.state.qcount +1;
        this.setState({qcount: n });
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
        console.log("Try Send");
        this.state.obj = {
            _token: this.csrf
        }

        let quessions=document.querySelectorAll('.q');
        let q,a;
        let answers;
        let objQ = [];
        let obj = {name: " ",answers: [] };
        console.log("Найдено вопросов : " + quessions.length);
        for (q = 0; q < quessions.length; q++) {
            console.log("Вопрос: " + quessions[q].value);
            obj.name = quessions[q].value;
            answers = document.querySelectorAll('.a' + q);
            for(a =0; a< answers.length; a++ ){
                console.log("Вариант ответа " + answers[a].value);
                obj.answers.push(answers[a].value);
            }
            objQ.push(obj);
            obj = {name: " ",answers: [] };
        }


        console.log(objQ);
        /*
        fetch('/api/tests',
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
         */
    }

    doRead(){
        fetch("/api/tests")
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
        fetch('/api/tests/' + id,
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
