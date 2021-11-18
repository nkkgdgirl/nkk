import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { Table } from 'antd';

export default class Graphtrain2 extends Component {
    constructor(props){
        super(props);
        this.state={
            column:[],
            data:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/csv/train_study_level.csv")
        .then ((res) => {
            this.setdata(res.data) 
        })
    }

    id(data){
        return(
            <div>
                <center style = {{ color :'#008079'}} >{ data.length }</center>
                <center style = {{ color :'#696969'}} > unique values </center>
            </div>
        )
    }

    setdata(data){
        console.log(data);
        this.setState({
            column : [
                {
                    title: <center>id</center> ,
                    dataIndex: 'id',
                    sorter: {
                        compare: (a, b) => a.id.localeCompare(b.id),
                        multiple: 3,
                    },
                    children : [
                        {
                            title : this.id(data),
                            dataIndex: 'id'
                        }
                    ],
                   
                },
                {
                    title: 'Negative for Pneumonia',
                    dataIndex: 'NegativeforPneumonia',
                    sorter: {
                        compare: (a, b) => a.NegativeforPneumonia.localeCompare(b.NegativeforPneumonia),
                        multiple: 3,
                    },
                },
                {
                    title: 'Typical Appearance',
                    dataIndex: 'TypicalAppearance',
                    sorter: {
                        compare: (a, b) => a.TypicalAppearance.localeCompare(b.TypicalAppearance),
                        multiple: 3,
                    },
                },
                {
                    title: 'Indeterminate Appearance',
                    dataIndex: 'IndeterminateAppearance',
                    sorter: {
                        compare: (a, b) => a.IndeterminateAppearance.localeCompare(b.IndeterminateAppearance),
                        multiple: 3,
                    },
                },
                {
                    title: 'Atypical Appearance',
                    dataIndex: 'AtypicalAppearance',
                    sorter: {
                        compare: (a, b) => a.AtypicalAppearance.localeCompare(b.AtypicalAppearance),
                        multiple: 3,
                    },
                },
            ],

            data : data
        })
    }

    render() {
        return (
            <div style={{paddingLeft:'40px'}}>
                <Table columns={this.state.column} dataSource={this.state.data} />
            </div> 
        )
    }
}