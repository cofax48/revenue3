
import React, { Component } from "react";
import axios from "axios";
import "./../main.css";
import "./../contactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'reactstrap';


class Advisors extends Component {
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
                Advisors
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
      this.state = [
        {"name": "Dean Skurka", "titleOne": "President & CEO", "titleTwo": "WonderFi", "photoLink": "headshots/image-037.jpg", "linkedInLink": "https://www.linkedin.com/in/dean-skurka-52baa452/"},
        {"name": "Koleya Karrington", "titleOne": "Executive Director Canadian Blockchain Consortium", "titleTwo": "", "photoLink": "headshots/image-029.jpg", "linkedInLink": "https://www.linkedin.com/in/koleya-karringten-a78a5559/"},
        {"name": "Jessica Rossman", "titleOne": "BD & Partnerships Kadena", "titleTwo": "", "photoLink": "headshots/image-038.jpg", "linkedInLink": "https://www.linkedin.com/in/jessica-rossman/"},
        {"name": "Duke Kim", "titleOne": "SVP, Revenue", "titleTwo": "The Block", "photoLink": "headshots/image-040.jpg", "linkedInLink": "https://www.linkedin.com/in/thedukekim/"},
        {"name": "Melinda Delis", "titleOne": "Head of Business Development", "titleTwo": "expand.network", "photoLink": "headshots/Melinda-Delis.jpeg", "linkedInLink": "https://www.linkedin.com/in/melindadelis/"},
        {"name": "Arnaud Simeray", "titleOne": "Head of GTM ", "titleTwo": "Dune", "photoLink": "headshots/image-036.jpg", "linkedInLink": "https://www.linkedin.com/in/arnaudsimeray/"},
        {"name": "Felipe Priuli", "titleOne": "Senior Manager, Crypto Assets", "titleTwo": "RBCx", "photoLink": "headshots/image-039.jpg", "linkedInLink": "https://www.linkedin.com/in/felipe-priuli/"},
        {"name": "Michael Broderick", "titleOne": "Global Web3 Strategy", "titleTwo": "AWS", "photoLink": "headshots/image-035.jpg", "linkedInLink": "https://www.linkedin.com/in/broderick-michael/"},
        {"name": "Rob Salman", "titleOne": "Head of Custody", "titleTwo": "Ava Labs", "photoLink": "headshots/Rob-Salman.jpeg", "linkedInLink": "https://www.linkedin.com/in/rob-salman-6a32753/"},
        {"name": "Kate Goldman", "titleOne": "Growth & Strategy", "titleTwo": "Anchorage Digital", "photoLink": "headshots/image-042.jpg", "linkedInLink": "https://www.linkedin.com/in/kate-goldman/"},
        {"name": "Ricky Siewers", "titleOne": "Director of Growth", "titleTwo": "CoinMetrics", "photoLink": "headshots/image-032.jpg", "linkedInLink": "https://www.linkedin.com/in/rickysiewers/"},
        {"name": "Sergio Silva", "titleOne": "Co-Founder", "titleTwo": "Popset", "photoLink": "headshots/image-041.jpg", "linkedInLink": "https://www.linkedin.com/in/sergioesilva/"},
        {"name": "Steven Hillenbrand", "titleOne": "Sales Director, US", "titleTwo": "Elwood", "photoLink": "headshots/Steven-Hilenbrand-photo.jpeg", "linkedInLink": "https://www.linkedin.com/in/steven-hillenbrand-97282aa7/"},
        {"name": "Bryan Young", "titleOne": "Chief Revenue Officer", "titleTwo": "Elementus", "photoLink": "headshots/Bryan-Young.jpeg", "linkedInLink": "https://www.linkedin.com/in/bryany/"},
        {"name": "Leah Jonas", "titleOne": "Co-Founder", "titleTwo": "Metamorphosis Digital", "photoLink": "headshots/Leah-Jonas.jpeg", "linkedInLink": "https://www.linkedin.com/in/leah-jonas-82547580/"},
        {"name": "Jeff Curry", "titleOne": "Senior Solutions Architect", "titleTwo": "Coinbase", "photoLink": "headshots/Jeff-Curry.jpeg", "linkedInLink": "https://www.linkedin.com/in/jeffrey-curry/"},
        {"name": "Elliot Chun", "titleOne": "Partner", "titleTwo": "Architect Partners", "photoLink": "headshots/Elliot-Chun.jpeg", "linkedInLink": "https://www.linkedin.com/in/elliotchun/"},
        {"name": "Bren Maciel", "titleOne": "BD & Partnerships", "titleTwo": "Tweed", "photoLink": "headshots/Bren-Maciel.jpeg", "linkedInLink": "https://www.linkedin.com/in/brenmaciel/"},
        {"name": "Seena Foroutan", "titleOne": "President", "titleTwo": "Foroutan Strategies", "photoLink": "headshots/Seena.jpeg", "linkedInLink": "https://www.linkedin.com/in/seenaforoutan/"},
        {"name": "Drew Magiera", "titleOne": "Institutional Sales &amp; Protocols", "titleTwo": "Anchorage Digital", "photoLink": "headshots/Drew.jpeg", "linkedInLink": "https://www.linkedin.com/in/drewmagiera/"},
        {"name": "Beatrice O'Carroll", "titleOne": "Principal", "titleTwo": "Triple Crown Digital", "photoLink": "headshots/Bea.jpeg", "linkedInLink": "https://www.linkedin.com/in/beatriceocarroll/"},
        {"name": "Henry Mandlebaum", "titleOne": "VP of GTM", "titleTwo": "Halborn", "photoLink": "headshots/Henry-M.jpeg", "linkedInLink": "https://www.linkedin.com/in/henrymandelbaum/"},
        {"name": "Jon Taneski", "titleOne": "Head of Sales", "titleTwo": "Milk Road", "photoLink": "headshots/Jonny-T.jpeg", "linkedInLink": "https://www.linkedin.com/in/jonnyjonjon/"},
        {"name": "Alexis Athenas", "titleOne": "Customer Success Lead", "titleTwo": "MPCH", "photoLink": "headshots/Alexis-A.jpeg", "linkedInLink": "https://www.linkedin.com/in/alexis-athenas/"},
        {"name": "Matt Gibson", "titleOne": "BD & Partnerships", "titleTwo": "JST Digital", "photoLink": "headshots/Matt-Gibson.jpeg", "linkedInLink": "https://www.linkedin.com/in/matthew-gibson-94644485/"},
        {"name": "Tyler Sherwin", "titleOne": "Co-Founder RWA World", "titleTwo": "", "photoLink": "headshots/Tyler-Sherwin.jpeg", "linkedInLink": "https://www.linkedin.com/in/tylersherwin/"},
        {"name": "Keeyan Ravanshid", "titleOne": "COO", "titleTwo": "GoQuant", "photoLink": "headshots/Keeyan.jpeg", "linkedInLink": "https://www.linkedin.com/in/keeyanravanshid/"},
        {"name": "Avi Mash", "titleOne": "Co-Founder", "titleTwo": "BlockFuel", "photoLink": "headshots/Avi-Mash.jpeg", "linkedInLink": "https://www.linkedin.com/in/avimash/"},
        {"name": "Salty Qazi", "titleOne": "VP of Strategy & BD", "titleTwo": "Cube3.ai", "photoLink": "headshots/Salty-.jpeg", "linkedInLink": "https://www.linkedin.com/in/sultaanqazi/"},
        {"name": "Thomas DelCharco", "titleOne": "Ecosystem Growth Lead", "titleTwo": "Camp Network", "photoLink": "headshots/Charco.jpeg", "linkedInLink": "https://www.linkedin.com/in/tjdc/"},
        {"name": "Eric Zimmerman", "titleOne": "Head of Business Development", "titleTwo": "Sardine", "photoLink": "headshots/Eric-Zimmerman.jpeg", "linkedInLink": "https://www.linkedin.com/in/ericdzimmerman/"},            
        {"name": "Emanuele Rossi", "titleOne": "Head of Sales & Expansion", "titleTwo": "Mountain Protocol", "photoLink": "headshots/Emanuel.jpeg", "linkedInLink": "https://www.linkedin.com/in/emanuele-rossi-141b84105/"}            
      ]
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
                            <a href={person.linkedInLink}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
                <div class="rightCard">
                    <div class="personName" key={index * 2}>
                        {person.name}
                    </div>
                    <div class="persontitleFormer" key={index * 3}>
                        {person.titleOne}
                    </div>
                    <div class="persontitleFormer" key={index * 4}>
                        {person.titleTwo}
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

export default Advisors;
