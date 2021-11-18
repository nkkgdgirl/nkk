import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { Table } from 'antd';

export default class Trainimg extends Component {
    constructor(props){
        super(props);
        this.state={
            column:[],
            data:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/csv/train_image_level.csv")
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
                    title: 'boxes',
                    dataIndex: 'boxes',
                    sorter: {
                        compare: (a, b) => a.boxes.localeCompare(b.boxes),
                        multiple: 3,
                    },
                },
                {
                    title: 'label',
                    dataIndex: 'label',
                    sorter: {
                        compare: (a, b) => a.label.localeCompare(b.label),
                        multiple: 3,
                    },
                },
                {
                    title: 'StudyInstanceUID',
                    dataIndex: 'StudyInstanceUID',
                    sorter: {
                        compare: (a, b) => a.StudyInstanceUID.localeCompare(b.StudyInstanceUID),
                        multiple: 3,
                    },
                },
            ],

            data : data
        })
    }

    render() {
        return (
            <div style={{paddingLeft:'auto'}}>
                <Table columns={this.state.column} dataSource={this.state.data} />
            </div> 
        )
    }
}