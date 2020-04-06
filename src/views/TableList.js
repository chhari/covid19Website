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
import { connect } from 'react-redux'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {

  createHeaderComponents(){
    let countries = this.props.resCountries;
    let headerComponentList = [];
    Object.keys(countries[0]().map((k,i)=>{
      console.log(k)
      headerComponentList.push(<th>{k}}</th>)
    }))
    console.log(headerComponentList)

    return headerComponentList.length > 0 ? headerComponentList : [] 

  }

  createBodyComponents(){
    let countries = this.props.resCountries;
    console.log(countries)
    let bodyComponentsList = [];
    countries.map(k => {
      Object.keys(k).map(key => bodyComponentsList.push(<tb>k[key]</tb>))

    })
    console.log(bodyComponentsList)
    return bodyComponentsList.length > 0 ? bodyComponentsList : []

  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th>Country</th>
                        <th>Cases</th>
                        <th>Recovered</th>
                        <th>TodayCases</th>
                        <th>Active</th>
                        <th>Critical</th>
                        <th className="text-center">Deaths</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.resCountries.length > 0  ? this.props.resCountries
                      .map(key => key ? <tr>
                        <td>{key.country}</td>
                        <td>{key.cases}</td>
                        <td>{key.recovered}</td>
                        <td>{key.todayCases}</td>
                        <td>{key.active}</td>
                        <td>{key.critical}</td>
                        <td className="text-center">{key.deaths}</td> </tr>:<tr></tr>) : <tr></tr>}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
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


export default connect(mapStateToProps)(Tables);
