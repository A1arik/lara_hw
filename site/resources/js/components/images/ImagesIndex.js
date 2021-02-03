import React, {Component} from 'react';
import ImagesCreateForm from "./ImagesCreateForm";
import PortfolioIndexItem from "../portfolio/PortfolioIndexItem";
import ImagesIndexItem from "./ImagesIndexItem";

export default class ImagesIndex extends Component {


    constructor(props) {
        super(props);
        this.csrf =document.querySelector('meta[name="csrf-token"]').content;
        this.doCancel = this.doCancel.bind(this); // Ссылка для передачи детям для отмены
        this.state = {
            error: null,
            isLoaded: true,
            items: [],
            isEdit: false, // Метка редактирования
            isNew: false // Метка создания новой сущности
        };
        this.doReload = this.doReload.bind(this);
    }

    doCancel(){
        this.setState({isNew:false, isEdit: false});
    }

    doReload(){
        this.setState( {
            error: null,
            isLoaded: true,
            items: [],
            isEdit: false, // Метка редактирования
            isNew: false // Метка создания новой сущности
        });
        this.loadItems();
    }


    componentDidMount(){
        this.loadItems();
    }


    loadItems(){
        fetch("/api/images")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log("then: ");
                    // console.log(result);
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

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            if (this.state.isNew) {
                return this.renderNewForm();
            }
            return this.renderList();
        }
    }

    renderList(){
        return (
            <div>
                { this.state.items.map(item => (
                    <ImagesIndexItem image={item} doReload={this.doReload}></ImagesIndexItem>
                ))}
                <div>
                    <input type="button"  onClick={()=>this.setState({isNew: true})}/>
                </div>
            </div>
        );
    }



    renderNewForm(){
        return (
            <div>
            <ImagesCreateForm doReload={this.doReload} doCancel={this.doCancel}></ImagesCreateForm>
            </div>
        );
    }

}

