import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Study4 extends Component {
    constructor(props)
    {
        super(props);
        this.state = //เป็นการกำหนดค่าเริ่มต้น (ถ้าไม่มีไม่ต้องใส่) อันนี้เราใส่ chartData มาเป็นconstucter
        {
            chartdataAtypical_Appearance :{}
        }
    }

    setData(data)
    {
        var AtypicalA0 = data.filter ((data) => {
            return data['AtypicalAppearance'] === "0"
        })
        var AtypicalA1 = data.filter ((data) => {
            return data['AtypicalAppearance'] === "1"
        })

        this.setState(
            {
                chartdataAtypical_Appearance :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'# Atypical Appearance',
                        data: [AtypicalA0.length,AtypicalA1.length],
                        backgroundColor:[
                            '#008079',
                            '#008079']
                    }]
                }
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
                        data={this.state.chartdataAtypical_Appearance}
                    />                  
                </div>
        )
    }
    
}

export default Study4;