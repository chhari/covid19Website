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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import styled from 'styled-components'



// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";


const Anchor = styled.a`
   color: white

  `

class Notifications extends React.Component {
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  

  render() {
    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            {/* <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <UncontrolledAlert color="info">
                    <span>This is a notification with close button.</span>
                  </UncontrolledAlert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col> */}
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Info on Data</CardTitle>
                </CardHeader>
                <CardBody>
                  <UncontrolledAlert color="primary">
                    <Anchor href="https://github.com/nytimes/covid-19-data">
                    <span>
                      <b>States and Countres Data -  </b>
                      The data for covid19 cases for individual state and county is from New York Times , updates everyday.Access the data from their Github page https://github.com/nytimes/covid-19-data
                      , click here to go there
                    </span>
                    </Anchor>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="info">
                  <Anchor href="https://www.worldometers.info/coronavirus/">
                    <span>
                      <b>World Data :  </b>
                      World data is accessed from an open API that gets its data from Worldometer website ."https://www.worldometers.info/coronavirus/" 
                    </span>
                    </Anchor>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="success">
                    <Anchor href="cdc.gov">
                    <span>
                      <b>Visit CDC.gov for more info on prevention and cure  : </b>
                      For more current info on corona virus and its impact and prevention , please visit Center for Disease Controls website "cdc.gov"
                    </span>
                    </Anchor>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="warning">
                    <Anchor href="https://www.google.com/covid19/">
                    <span>
                      <b>Other info on symptoms </b>
                      Google.com provides these data , please vist google's covid19 website "google.com/covid19/"
                    </span>
                    </Anchor>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="danger">
                    <span>
                      <b>Note -  </b>
                      Please protect yourself and your loved ones from the disease ,we'll provide upto data stats and keep you updated .Click on the above links to be redirected to respoective sites
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col  md="12">
                        <CardTitle tag="h4">
                          Acknowledgments<br></br>
                          <p></p>
                          <p className="category">
                            The website has been made using data from New York Times and Worldomer. Thier respective links have been mentioned above. 
                          </p><br></br>
                          <p className="category">
                            The worldometer data is accessed through <Anchor href="https://github.com/javieraviles/covidAPI">"https://github.com/javieraviles/covidAPI"</Anchor> api from a developer . 
                          </p><br></br>
                          <p className="category">
                            The website is made using ReactJS , maps are done using react-simple-maps . The template is from Creative Tim <Anchor href = "https://www.creative-tim.com/product/black-dashboard">"https://www.creative-tim.com/product/black-dashboard"</Anchor>
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
        
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
