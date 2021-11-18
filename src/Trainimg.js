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

    id(data){
        return(
            <div>
                <center style = {{ color :'#008079'}} >{ data.length }</center>
                <center style = {{ color :'#696969'}} > unique values </center>
            </div>
        )
    }

    boxes(data){
        var Null = data.filter((data) => {
            return data.boxes === ""
        })
        var null1 = Math.round((Null.length / data.length)*100)
        var X = data.filter((data) => {
            return data.boxes === "[{'x': 789.28836, 'y': 582.43035, 'width': 1026.65662, 'height': 1917.30292}, {'x': 2245.91208, 'y': 591.20528, 'width': 1094.66162, 'height': 1761.54944}]"
        })
        var x = Math.round((X.length / data.length)*100)
        var y = 100-(null1+x) 
        var z = data.length-(Null.length+X.length)
        return(
            <div>
                <h5 style = {{ color :'#FF0033'}}> null &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {null1}% </h5>
                <h5 style = {{ color :'#008079'}} > ['x': 789.28836, 'y': 582.43035... &nbsp;&nbsp; {x}% </h5>
                <h5 style = {{ color :'#696969'}} > Other ({z}) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {y}% </h5>
            </div>       
        )
    }

    label(data){
        var Non = data.filter((data) => {
            return data.label === "none 1 0 0 1 1"
        })
        var non = Math.round((Non.length / data.length)*100)
        var Opacity = data.filter((data) => {
            return data.label === "opacity 1 789.28836 582.43035 1815.94498 2499.73327 opacity 1 2245.91208 591.20528 3340.5737 2352.75472"
        })
        var opacity = Math.round((Opacity.length / data.length)*100)
        var y2 = 100-(non+opacity) 
        var z2 = data.length-(Non.length+Opacity.length)
        return(
            <div>
                <h5 style = {{ color :'#008079'}} > none 1 0 0 1 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {non}% </h5>
                <h5 style = {{ color :'#008079'}} > opacity 1 789.28836 582.43035.... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {opacity}% </h5>
                <h5 style = {{ color :'#696969'}} > Other ({z2}) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {y2}% </h5>
            </div>       
        )
    }
    
    StudyInstanceUID(data){
        return(
            <div>
                <center style = {{ color :'#008079'}}>6054</center>
                <center style = {{ color :'#696969'}} > unique values </center>
            </div>       
        )
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
                    children : [
                        {
                            title : this.id(data),
                            dataIndex: 'id'
                        }
                    ],
                   
                },
                {
                    title: 'boxes',
                    dataIndex: 'boxes',
                    sorter: {
                        compare: (a, b) => a.boxes.localeCompare(b.boxes),
                        multiple: 3,
                    },
                    children : [
                        {
                            title : this.boxes(data),
                            dataIndex: 'boxes'
                        }
                    ],
                },
                {
                    title: 'label',
                    dataIndex: 'label',
                    sorter: {
                        compare: (a, b) => a.label.localeCompare(b.label),
                        multiple: 3,
                    },
                    children : [
                        {
                            title : this.label(data),
                            dataIndex: 'label'
                        }
                    ],
                },
                {
                    title: 'StudyInstanceUID',
                    dataIndex: 'StudyInstanceUID',
                    sorter: {
                        compare: (a, b) => a.StudyInstanceUID.localeCompare(b.StudyInstanceUID),
                        multiple: 3,
                    },
                    children : [
                        {
                            title : this.StudyInstanceUID(data),
                            dataIndex: 'StudyInstanceUID'
                        }
                    ],
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