import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Study3 extends Component {
    constructor(props)
    {
        super(props);
        this.state = //เป็นการกำหนดค่าเริ่มต้น (ถ้าไม่มีไม่ต้องใส่) อันนี้เราใส่ chartData มาเป็นconstucter
        {
            chartdataIndeterminate_Appearance :{} ,
        }
    }

    setData(data)
    {
        var IndeterminateA0 = data.filter ((data) => {
            return data['IndeterminateAppearance'] === "0"
        })
        var IndeterminateA1 = data.filter ((data) => {
            return data['IndeterminateAppearance'] === "1"
        })

        this.setState(
            {
                chartdataIndeterminate_Appearance :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'# Indeterminate Appearance',
                        data: [IndeterminateA0.length,IndeterminateA1.length],
                        backgroundColor:[
                            '#008079',
                            '#008079']
                    }]
                },
            }
        )       
    }

    componentDidMount() {
        parse("http://localhost:5000/train_study_level.csv", {
            download: true,
            header : true ,
            complete : (e) => {
                console.log(e);
                this.setData(e.data);
            }
        })
    }

    render(){
        return(           
                <div className = 'Graphtrain1 '  >  
                    <Bar 
                        data={this.state.chartdataIndeterminate_Appearance}
                    />                  
                </div>
        )
    }
    
}

export default Study3;