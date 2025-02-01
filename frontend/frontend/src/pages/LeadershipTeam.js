
import React, { Component } from "react";
import axios from "axios";
import "./../main.css";
import "./../contactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'reactstrap';


class LeadershipTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <TeamMates></TeamMates>
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
                    Meet Our Core Team 
                </div>
                <div id="contactImage" >
                    <img src="../teamBannerPhoto.webp"></img>
                </div>
            </div>
        </div>
      )
    }
  }

  class TeamMates extends Component {
    constructor(props){
      super(props)
      this.state = [{
            name: "Joshua Weiss",
            titleOne: "Founder",
            titleTwo: "Head of Sales at Utila",
            titleFormer: "Bloomberg, Elliptic",
            photoLink: "Joshua-Weiss-LI-Photo.jpeg",
            linkedInLink: "https://www.linkedin.com/in/joshua-weiss-caia-28a6ab52/"
            },{
                name: "Andrew Sabola",
                titleOne: "Managing Director",
                titleTwo: "VP, Business Development at Bakkt",
                titleFormer: "Copper, Lukka, BNP Paribas",
                photoLink: "andrewshabola.webp",
                linkedInLink: "https://www.linkedin.com/in/andrewsabola/"
            },{
                name: "Tyler Kirschner",
                titleOne: "VP of Recruiting",
                titleFormer: "Selby Jennings",
                photoLink: "Tyler.jpeg",
                linkedInLink: "https://www.linkedin.com/in/tyler-kirschner-b98329b0/"
            },{
                name: "Josh Woods",
                titleOne: "Chief Technology Officer",
                titleTwo: "VP, Team Lead & Senior Full Stack Developer at Bank of America",
                titleFormer: "United Nations, Homeland Security",
                photoLink: "JoshWoodsprofile.webp",
                linkedInLink: "https://www.linkedin.com/in/josh-woods-65b26549/"
            },{
                "name": "Meaghan Long",
                titleOne: "Senior Talent Partner",
                titleFormer: "dYdX, Meta, Riskified",
                photoLink: "meganlong.webp",
                linkedInLink: "https://www.linkedin.com/in/meaghanoelle/"
            },{
                name: "Jerry Bonura",
                titleOne: "Senior Talent Partner",
                titleFormer: "TwentyPine, Mitchell Martin",
                photoLink: "jerrybonura.webp",
                linkedInLink: "https://www.linkedin.com/in/cryptojerry/"
            },
            {"name": "Eric Zimmerman", "titleOne": "Head of Business Development", "titleTwo": "Sardine", "photoLink": "headshots/Eric-Zimmerman.jpeg", "linkedInLink": "https://www.linkedin.com/in/ericdzimmerman/"}        ]
    }

    componentDidMount(){
    }



    render(){
      return(
        <div id="teamHolder">
            {this.state.map((person, index) => (
            <div class="fullCard">
                <div class="leftCard">
                    <div class="leftPhotoCard">
                        <img class="actualPhoto" key={index * 1} src={"../" + person.photoLink}></img>
                    </div>
                    <div class="leftCardLinkedIn">
                        <div class="linkedinLogoHolder">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
                <div class="rightCard">
                    <div class="personName" key={index * 2}>
                        {person.name}
                    </div>
                    <div class="persontitleOne" key={index * 3}>
                        {person.titleOne}
                    </div>
                    <div class="persontitleTwo" key={index * 4}>
                        {person.titleTwo}
                    </div>
                    <div class="persontitleFormer" key={index * 5}>
                        FORMER: {person.titleFormer}
                    </div>
                </div>
            </div>
            ))}
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

export default LeadershipTeam;
