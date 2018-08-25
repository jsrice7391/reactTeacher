import React, { Component } from "react";
import {Grid, Row, Col, Button, FormControl} from "react-bootstrap";
import {SampleComp} from "../../components/SampleComp";


class All extends Component {

    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        goodToGo: false,
        startText:"Hey, you changed state!"
      };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleClick(event){
      if(this.state.goodToGo){
        this.setState({goodToGo:false})
      }else{
        this.setState({goodToGo:true})
      }
    }

      handleChange(event) {
         this.setState({
           [event.target.name]: event.target.value
         });
      }

  render(){
    return(
        <Grid>
          <Row>
            <h1> Welcome to the React Lesson.</h1> 
            <p>This will show some of the basics of react, but also get you on your way to the cool stuff. </p>     
          </Row>
          <Row>
            <h4>We will start with the smallest part</h4>

            <Col md = {4}>

            {
              this.state.goodToGo ? 
              <div>
                <FormControl  name="startText" type = "text" placeholder = "Enter text" onChange = {this.handleChange}
                />  
                </div> : 
                <div>
              <h3>I am an <b>ELEMENT</b>, I am the smallest block of a react app.</h3>
                          <Button bsStyle = "primary"
                          onClick = {
                            this.handleClick
                          }>Good to go ? </Button>
                          </div>
                        }

            </Col>
            <Col md={4}>
            {
              this.state.goodToGo ? <SampleComp text = {this.state.startText} /> : ""
            }

            </Col>
          </Row>
        </Grid>
    )
  }
}


export default All;
