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

class CountyTables extends React.Component {

  createHeaderComponents(){
    let countries = this.props.myData;
    let headerComponentList = [];
    Object.keys(countries[0]().map((k,i)=>{
      console.log(k)
      headerComponentList.push(<th>{k}}</th>)
    }))
    console.log(headerComponentList)

    return headerComponentList.length > 0 ? headerComponentList : [] 

  }

  createBodyComponents(){
    let countries = this.props.myData;
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
                      <th>Date</th>
                        <th>County</th>
                        <th>State</th>
                        <th>Cases</th>
                        <th className="text-center">Deaths</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.myData.length > 0  ? this.props.myData
                      .map(key => key ? <tr>
                        <td>{key.date}</td>
                        <td>{key.county}</td>
                        <td>{key.state}</td>
                        <td>{key.cases}</td>
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



export default CountyTables;
