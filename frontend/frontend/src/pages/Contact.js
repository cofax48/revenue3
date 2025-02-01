
import React, { Component } from "react";
import axios from "axios";
import "./../main.css";
import "./../contactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'reactstrap';


class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: "",
      },
      email: {
        contactName: "",
        email: "",
        message: ""
      },
      // urlRoot: "http://ec2-3-134-112-63.us-east-2.compute.amazonaws.com:8000",
      urlRoot: "http://localhost:8080",
    };
  }

  // componentDidMount() {
  //   this.refreshList();
  // }

 
  sendEmail = (json) => {
    console.log(json)
    let res = axios
      .post(this.state.urlRoot + "/sendEmail", json)
      .then((res => console.log(res)))
      .catch((err) => console.log(err));
    console.log(res);
  }

    


render() {
  return (
    <div id="absoluteMain">
      <Header></Header>
      <ContactBanner></ContactBanner>
      <Contact
        sendEmail={this.sendEmail}
      ></Contact>
      <Footer></Footer>
    </div>
    
  
  )
}

  }

  class Header extends Component {
    constructor(props){
      super(props)
        this.state = {

        }
      }

    render(){
      return(
        <div>
          <div id="headerBar">
              <div id="headerDiv">
                <a href="/"><img id="headerLogo" src="../Revenue3Logo.jpg"></img></a>
              </div>
              <div id="headerLinkedIn"><a id="buttonLink" href="https://www.linkedin.com/company/revenue3official">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div id="headerMail"> <a id="buttonLink" href="../contact-us/">
                <FontAwesomeIcon icon={faPaperPlane} />
                </a>
              </div>
              <div className="lineFour">
              <button id="buttonHeader"><a id="buttonLink" href="../contact-us/">Get Started</a></button>
            </div>
                
                
         </div>
        </div>
      )
    }
  }

  class ContactBanner extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }

    render(){
      return(
        <div id="contactBannerHolder">
            <div id="contactContents">
                <div id="contactTitleContact">
                    Contact
                </div>
                <div id="contactImage">
                    <img src="../contactCoin.webp"></img>
                </div>
            </div>
        </div>
      )
    }
  }

  class Contact extends Component {
    constructor(props){
      super(props)
      this.state = {
          dropdownOptions: ["I'm Looking For A job", "I'm Looking For Talent"],
          name: "",
          email: "",
          linkedIn: "",
          comment: "",
          dropDownSelect: "I'm Looking For A job"
      }
    }

    componentDidMount(){
    }

    handleUpdate = (e) => {
      this.setState({[e.target.id]: e.target.value})
    }

    handleSelect = (e) => {
      console.log(e)
      this.setState({dropDownSelect: e.target.value})
    }

    handleSubmit = () => {
      this.props.sendEmail(this.state)
    }


    render(){
      let icon = <FontAwesomeIcon icon={faLinkedin} />
      console.log(icon)
      return(
        <div id="contactSection">
          <div id="contactHolder">
            <div id="backGroundPhotoContact">
              <img id="worldBackGroundContact" src="../worldBackGroundContact.jpg"></img>
            </div>
            <div id="boxHolder">
              <div id="logoBrandingBoxLeft">
                <div id="logoBrandingBoxLeftTitle">Revenue3</div>
                <div id="logoBrandingBoxLeftLogoPhoto">
                  <img id="rev3brandingPhoto" src="../cta.png"></img>
                </div>
                <div id="logoBrandingBoxLeftLogoContent">Your inside source for crypto-native GTM talent</div>
              </div>
              <div id="contactBox">
                <div id="contactTitle">Contact Us</div>
                <div id="contactElements"> 
                  <div id="contactTypeDropDown" class="contactInput">
                    <label for="contactOptions"></label>
                    <select name="options" id="options" onChange={this.handleSelect} value={this.state.dropDownSelect}>
                      {this.state.dropdownOptions.map((optionVal, idx) => {
                        return(
                          <option key={idx} value={optionVal}>{optionVal}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div id="nameAndEmailElem">
                    <div id="contactName" class="contactInput">
                      <input id="name" type="text" onChange={this.handleUpdate} value={this.state.name} placeholder="Name"></input>
                    </div>
                    <div id="contactEmail" class="contactInput">
                      <input id="email" class="contactInputActual" type="email" onChange={this.handleUpdate} value={this.state.email} placeholder='Email'></input>
                    </div>
                  </div>
                  <div id="contacLinkedIn" class="contactInput">
                    <input id="linkedIn" class="contactInputActual" type="text" onChange={this.handleUpdate} value={this.state.linkedIn} placeholder='LinkedIin  [EX: linkedin.com/in/jane-doe]'></input>
                  </div>
                  <div id="contactComment" class="contactInput">
                    <textarea id="comment" class="contactInputActual" type="text" onChange={this.handleUpdate} value={this.state.comment} placeholder="Comment or Message"></textarea>
                  </div>
                  <div id="contacButton" class="contactInput">
                    <button type="button" id="contacButtonActual" class="contactInputActual" onClick={this.handleSubmit}>Submit <div id="arrowRight">→</div></button>
                  </div>
                  <div id="contacSubmissionNotification"></div>
                </div>
                <br></br>
      
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  class Footer extends Component{
    constructor(props){
      super(props)
      this.state = {
      }
    }
    render(){
      return(
        <div id="footerSection">
          <div id="footerSectionText">
          <div id="revTitleSectionFooter">
            <div id="revTitleSectionFooterActual" class="footerTitle">
              Revenue3
            </div>
            <div id="revTitleSectionFooterContent">
              Our mission is to redefine the standard of building GTM teams within crypto & web3.
            </div>
          </div>
          <div id="QuickLinkTitleSectionFooter">
            <div id="QuickLinkTitleSectionFooterActual">
              Quick Links
            </div>
            <ul id="QuickLinkTitleSectionFooterLinksListQuick">
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="/">Home</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="../our-process/">Our Process</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="../meet-the-team/">Meet The Team</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="../advisors/">Advisors</a>
              </li>
            </ul>
          </div>
          <div id="resourcesFooterSection">
            <div id="revTitleSectionFooterActualResources" class="footerTitle">
                Resources
            </div>
            <ul id="QuickLinkTitleSectionFooterLinksListResources">
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="/">Privacy Policy</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="/">Terms And Conditions</a>
              </li>
            </ul>
            <div id="revTitleSectionFooterActualResources" class="footerTitle">
                Contact
            </div>
            <ul id="QuickLinkTitleSectionFooterLinksListContact">
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="../contact-us/">Get In Touch</a>
              </li>
            </ul>
          </div>
          <div id="copyright">
              <div id="copyrightText">
                <div id="copyrightTextActual">
                Copyright © 2024 All rights reserved.
                </div>
                <div id="footerLinkedIn"><a id="buttonLinkFooter" href="https://www.linkedin.com/company/revenue3official">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div id="footerMail"> <a id="buttonLinkFooter" href="../contact-us/">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="backgroundPhotosFooter">
            <div id="footerSectionOverlay"></div>
            <div id="footerPhotoFrontDiv">
              <img id="footerPhotoFrontDivImg" src="../footerPhoto.jpg"></img>
            </div>
            <div id="footerPhotoBack">
              <img id="footerPhotoBackDiv" src="../11-118193_curve-shape-png-curvy-shapes-1.png"></img>
            </div>
          </div>
        </div>
      )
    }
  }

export default ContactPage;
