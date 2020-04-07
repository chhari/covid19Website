/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { connect } from 'react-redux';
import {runCountryWiseData, runWorldData} from '../redux/countries/countriesAction'
import {Link} from 'react-router-dom'
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Map from "./Map"
import App from "./App"
import MyMap from './MyMap'


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { initGA, logPageView } from '../util/googleAnalytics'

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      map : "World"
    };
  }

  componentDidMount(){
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    this.props.runWorldReq();
    this.props.runCountryWiseReq();
  }

  countries = ["USA","Spain","Italy","Germany","France","Iran","UK","China","India"]
  us = ["USA"]

  renderMap = () => {
    
    if(this.state.map === "World"){
      return <App/>

    }else if(this.state.map === "States"){
      return <MyMap/>

    }else if (this.state.map === "Counties" ){
      return <Map/>

    }else{
        return <App/>
    }
    
  }
  
  setMap = name => {
    this.setState({
      map: name
    });
  };

  getPara = () => {
    
    if(this.state.map === "World"){
      return "Click over for data on individual country "

    }else if(this.state.map === "States"){
      return "Click over for data on state data "

    }else if (this.state.map === "Counties" ){
      return "Click over for data on county wise data "

    }else{
        return ""
    }
    
  }

  usa = []

  getHeadertitle = () =>{
    if(this.state.map === "World"){
      let myVar = "Total Cases in World: " 
      let myVar2 = this.props.resWorld.cases
      let myVar3 = myVar + myVar2
      return myVar3

    }else if(this.state.map === "States"){
      let myVar =  "State wise Cases in USA: "
      let myVar2 = this.props.resCountries.length > 0  ? this.props.resCountries
        .filter(k => this.us.includes(k.country))
        .map(key => {return key.cases}) : "no data availble"
     let myVar3 =  myVar + myVar2
     return myVar3

    }else if (this.state.map === "Counties" ){
      let myVar =  "County wise Cases in USA: "
      let myVar2 = this.props.resCountries.length > 0  ? this.props.resCountries
        .filter(k => this.us.includes(k.country))
        .map(key => {return key.cases}) : "no data availble"
     let myVar3 =  myVar + myVar2
     return myVar3

    }else{
        return "Total Cases Map"
    }
    
  }

  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Covid19 Cases worldwide </h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    {this.props.resWorld.cases}
                  </CardTitle>
                </CardHeader>
                {/* <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Cases Recovered</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    {this.props.resWorld.recovered}
                  </CardTitle>
                </CardHeader>
                {/* <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Deaths</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-atom" /> {this.props.resWorld.deaths}
                  </CardTitle>
                </CardHeader>
                {/* <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">{this.getHeadertitle()}</CardTitle>
                      <h5 className="card-category">{this.getPara()} </h5>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.map === "World"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setMap("World")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            World
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-globe-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.map === "States"
                          })}
                          onClick={() => this.setMap("States")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            States
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-bank" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.map === "Counties"
                          })}
                          onClick={() => this.setMap("Counties")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Counties
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-square-pin" />
                          </span>
                        </Button>
                        {/* <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          onClick={() => this.setMap("Clusters")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Clusters
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button> */}
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                {/* <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody> */}
                {this.renderMap()}
              </Card>
            </Col>
          </Row>
          <Row>
            {/* <Col lg="6" md="12">
            </Col> */}
            <Col md="12">
              <Card>
                <CardHeader>
                  <Link to="/admin/tables">
                <Button block color="primary">
                     World List (click for complete world list)
                  </Button>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th>Country</th>
                        <th>Cases</th>
                        <th>Recovered</th>
                        <th>TodayCases</th>
                        <th>TodayDeaths</th> 
                        <th>Deaths</th>
                        <th>Critical</th>
                        <th className="text-center">Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.resCountries.length > 0  ? this.props.resCountries
                      .filter(k => this.countries.includes(k.country))
                      .map(key => key ? <tr>
                        <td>{key.country}</td>
                        <td>{key.cases}</td>
                        <td>{key.recovered}</td>
                        <td>+{key.todayCases}</td>
                        <td>+{key.todayDeaths}</td>
                        <td>{key.deaths}</td>
                        <td>{key.critical}</td>
                      <td className="text-center">{key.active}</td> </tr>:<tr></tr>) : <tr></tr>}
                    </tbody>
                  </Table>
                </CardBody>
              </Card> 
            </Col>
          </Row>
          <Row>
                          <Col md="4">
                            <Link to="/admin/worldmap">
                            <Button
                              block
                              color="primary"
                            >
                              World Map 
                            </Button>
                            </Link>
                          </Col>
                          <Col md="4">
                          <Link to="/admin/usmap">
                            <Button
                              block
                              color="primary"
                            >
                              US Statewise Map
                            </Button>
                            </Link>
                          </Col>
                          <Col md="4">
                          <Link to="/admin/usmap">
                            <Button
                              block
                              color="primary"
                            >
                              US County Map
                            </Button>
                            </Link>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="4">
                            <Link to="/admin/clusters">
                            <Button
                              block
                              color="primary"
                            >
                             Clusters 
                            </Button>
                            </Link>
                          </Col>
                          <Col md="4">
                            <Link to="/admin/about">
                            <Button
                              block
                              color="primary"
                            >
                              Info on Data and About
                            </Button>
                            </Link>
                          </Col>
                          <Col md="4">
                            <Link to= "cdc.gov">
                            <Button
                              block
                              color="primary"
                            >
                              CDC.gov
                            </Button>
                            </Link>
                          </Col>
                        </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
	return {
    resWorld: state.contReducer.responseWorld,
    resCountries : state.contReducer.response
    
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    runWorldReq: () => dispatch(runCountryWiseData()),
    runCountryWiseReq : () => dispatch(runWorldData())
	};
};

// const mapDispatchToProps = dispatch => ({
//   action1: some_payload => dispatch(action1(some_payload))
//   action2: some_payload => dispatch(action2(some_payload))
// })

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
