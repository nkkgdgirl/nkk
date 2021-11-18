import {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
import './App.css';

class Graphsim extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            graphsim :{}
        }
    }

    setData(data)
    {
        console.log(data);
        var Negative = data.filter((data)  => { 
            return data.PredictionString === "negative 1 0 0 1 1"
        })
        var None = data.filter((data) => {
            return data.PredictionString === "none 1 0 0 1 1"
        })

        this.setState(
            {
                graphsim :{
                    labels: ['negative 1 0 0 1 1', 'none 1 0 0 1 1'],
                    datasets: [{
                        label:'Prediction String',
                        data: [Negative.length,None.length],
                        backgroundColor:[
                            '#008079',
                            '#008079']
                    }]
                }
            }
        )       
    }
    
    componentDidMount(){
        parse("http://localhost:5000/sample_submission.csv", {
            download: true,
            header : true ,
            complete : (e) => {
                console.log(e);
                this.setData(e.data);
            }
        })
      }
    render()
    {
        return(
                <div className = "Graphsim " >                   
                    <Bar
                        data={this.state.graphsim}
                    />                   
                </div>
        )
    }
}
export default Graphsim ;