import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Graphtrain extends Component {
    constructor(props)
    {
        super(props);
        this.state = //เป็นการกำหนดค่าเริ่มต้น (ถ้าไม่มีไม่ต้องใส่) อันนี้เราใส่ chartData มาเป็นconstucter
        {
            chartdataNegative_for_Pneumonia :{} ,
            chartdataTypical_Appearance :{} ,
            chartdataIndeterminate_Appearance :{} ,
            chartdataAtypical_Appearance :{}
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
        var TypicalA0 = data.filter ((data) => {
            return data['TypicalAppearance'] === "0"
        })
        var TypicalA1 = data.filter ((data) => {
            return data['TypicalAppearance'] === "1"
        })
        var IndeterminateA0 = data.filter ((data) => {
            return data['IndeterminateAppearance'] === "0"
        })
        var IndeterminateA1 = data.filter ((data) => {
            return data['IndeterminateAppearance'] === "1"
        })
        var AtypicalA0 = data.filter ((data) => {
            return data['AtypicalAppearance'] === "0"
        })
        var AtypicalA1 = data.filter ((data) => {
            return data['AtypicalAppearance'] === "1"
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
                <div className = 'Graphtrain ' > 
                    <Bar 
                        data={this.state.chartdataNegative_for_Pneumonia}
                    /> 
                    <Bar 
                        data={this.state.chartdataTypical_Appearance}
                    /> 
                    <Bar 
                        data={this.state.chartdataIndeterminate_Appearance}
                    /> 
                    <Bar 
                        data={this.state.chartdataAtypical_Appearance}
                    />                  
                </div>
        )
    }
    
}

export default Graphtrain;

// export const graphtrainstu = [
//     {
//         'id' : <div></div> ,
//         'NegativeforPneumonia' : <div> <Bar data={this.state.chartdataAtypical_Appearance}/> </div> ,
//         'TypicalAppearance' : <div> <Bar data={this.state.chartdataTypical_Appearance}/> </div>  ,
//         'IndeterminateAppearance' : <div> <Bar data={this.state.chartdataIndeterminate_Appearance}/>  </div>,
//         'AtypicalAppearance' : <div> <Bar data={this.state.chartdataAtypical_Appearance} /> </div>
//     }
// ]