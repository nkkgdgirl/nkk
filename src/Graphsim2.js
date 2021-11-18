import React, { Component } from 'react'
import './App.css'
import { Table } from 'antd';
import axios  from 'axios';

export default class Graphsim2 extends Component {
    constructor(props){
        super(props);
        this.state={
            column:[],
            data:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/csv/sample_submission.csv")
        .then ((res) => {
            this.setdata(res.data) 
        })
    }

    setdata(data){
        console.log(data);
        this.setState({
            column : [
                {
                    title: 'id',
                    dataIndex: 'id',
                    sorter: {
                        compare: (a, b) => a.id.localeCompare(b.id),
                        multiple: 3,
                    },
                   
                },
                {
                    title: 'PredictionString',
                    dataIndex: 'PredictionString',
                    sorter: {
                        compare: (a, b) => a.PredictionString.localeCompare(b.PredictionString),
                        multiple: 3,
                    },
                },
            ],

            data : data
        })
    }

    render(){
        return (
            <div style={{paddingLeft:'250px'}}>
                <Table columns={this.state.column} dataSource={this.state.data} />
            </div>          
            );
    }
}