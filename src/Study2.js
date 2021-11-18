import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Study2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = //เป็นการกำหนดค่าเริ่มต้น (ถ้าไม่มีไม่ต้องใส่) อันนี้เราใส่ chartData มาเป็นconstucter
        {
            chartdataTypical_Appearance :{} ,
        }
    }

    setData(data)
    {
        var TypicalA0 = data.filter ((data) => {
            return data['TypicalAppearance'] === "0"
        })
        var TypicalA1 = data.filter ((data) => {
            return data['TypicalAppearance'] === "1"
        })
        this.setState(
            {
                    chartdataTypical_Appearance :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'# Typical Appearance',
                        data: [TypicalA0.length,TypicalA1.length],
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
                        data={this.state.chartdataTypical_Appearance}
                    />                   
                </div>
        )
    }
    
}

export default Study2;