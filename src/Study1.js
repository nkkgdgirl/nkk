import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Study1 extends Component {
    constructor(props)
    {
        super(props);
        this.state = //เป็นการกำหนดค่าเริ่มต้น (ถ้าไม่มีไม่ต้องใส่) อันนี้เราใส่ chartData มาเป็นconstucter
        {
            chartdataNegative_for_Pneumonia :{} ,
        }
    }

    setData(data)
    {
        var NegativePneu0 = data.filter ((data) => {
            return data['NegativeforPneumonia'] === "0"
        })
        var NegativePneu1 = data.filter ((data) => {
            return data['NegativeforPneumonia'] === "1"
        })

        this.setState(
            {
                chartdataNegative_for_Pneumonia :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'# Negative for Pneumonia',
                        data: [NegativePneu0.length,NegativePneu1.length],
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
                        data={this.state.chartdataNegative_for_Pneumonia}
                    />                  
                </div>
        )
    }
    
}

export default Study1;