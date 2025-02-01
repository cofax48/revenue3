
import React, { Component } from "react";
import axios from "axios";
import "./../main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'reactstrap';


class Home extends Component {
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
      <Banner></Banner>
      <About></About>
      <Testimonial></Testimonial>
      <WhyRev3></WhyRev3>
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
                <a href="/"><img id="headerLogo" src="Revenue3Logo.jpg"></img></a>
              </div>
              <div id="headerLinkedIn"><a id="buttonLink" href="https://www.linkedin.com/company/revenue3official">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div id="headerMail"> <a id="buttonLink" href="https://revenue3.com/contact-us/">
                <FontAwesomeIcon icon={faPaperPlane} />
                </a>
              </div>
              <div className="lineFour">
              <button id="buttonHeader"><a id="buttonLink" href="contact-us/">Get Started</a></button>
            </div>
                
                
         </div>
        </div>
      )
    }
  }

  class Banner extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }

    render(){
      return(
        <div className="fadeInUp-animation">
          <div className="firstImages">
            <img id="initialBackgroundPic" src="blockcnnhain_hero_bg.png"></img>
          </div>
          <div className="boxLander">
            <div className="lineOne">
              Welcome To
            </div>
            <div className="lineTwo">
              Revenue3
            </div>
            <div className="lineThree">
              Your inside source for crypto-native GTM talent
            </div>
            <div className="lineFour">
              <button id="buttonActual">Get Started</button>
            </div>
          </div>
          <div className="lineFive">
                <img id="overlayBackgroundPic" src="r3landing.png"></img>
            </div>
        </div>
      )
    }
  }

  class About extends Component {
    constructor(props){
      super(props)
      this.state = {
        tiles: [
          {
          id:0,
          title: "About Us",
          text: "In a landscape where conventional recruiting strategies often overlook the nuances of sourcing candidates, Revenue3 was founded on the conviction that the crypto industry demands a specialized approach to talent acquisition for go-to-market roles. Our mission is to redefine the standard of building GTM teams within this rapidly evolving industry.",
          imageLink: "gfx-b.png"
          }
        ]
      }
    }
    render(){
      return(
        <div id="aboutSectionRoot">
          {this.state.tiles.map((tiles, index) => {
            return(
              <div id="aboutSection">
                <div className="backgroundImageAboutLeft" key={index + 4}>
                  <img src="ddf_01.png" id="tileImageAboutleft" key={index + 6}></img>
                </div>
                <div id="textSectionAbout" key={index + 7}>
                  <div id="aboutTitle" key={index + 1}>
                    <div id="aboutTitleText" key={index + 8}>{tiles.title}</div>
                  </div>
                  <div id="aboutDiv" key={index + 2}>
                    <div key={index + 9}>{tiles.text}</div>
                  </div>
                </div>
                <div className="aboutUsImg" key={index + 3}>
                  <img src={tiles.imageLink} key={index + 5} id="tileImage"></img>
                </div>
                
              </div>
            )
          })}
        </div>
      )
    }
  }

  class WhyRev3 extends Component {
    constructor(props){
      super(props)
      this.state = {
        tiles: [
          {
            id: 0,
            title: "Specialization",
            text: "We are the only recruiting firm that is dedicated exclusively to placing GTM roles in crypto and web3.",
            imageLink: "specialization.png",
          }, {
            id: 1,
            title: "Industry Insiders",
            text: "Our leadership team consists of crypto-native GTM executives, uniquely equipped with practical experience to drive your team’s growth..",
            imageLink: "industryInsiders.png",
           }, {
              id: 2,
              title: "Advisor Network",
              text: "Leverage our expansive network of >90 industry leaders in GTM roles to find top talent with unmatched precision and credibility..",
              imageLink: "advisorNetwork.png",
            }
        ]
      }
    }

    render(){
      return(
        <div class="blog" id="whyRev3" key={5}>
          <div class="container" key={6}>
            <h1 id="whyRev3Title" class="text-center" key={67}>Why Revenue3</h1>
            <div class="row" key={8}>
              {this.state.tiles.map((tile, index) => {
                return(
                  <div id="cardHolderClassic" class="col-md-4 col-lg-4 col-sm-12 d-lg-flex backgroundEffect" key={index + 1}>
                  <div class="card" key={index + 2}>
                    <div class="card-img" key={index + 3}>
                      <img src={tile.imageLink} class="img-fluid"></img>
                    </div>
      
                    <div id="cardSpecific" class="card-body" key={index + 4}>
                      {/* move ternary operator for whole card */}
                    {tile.title === "Advisor Network" ? <h4 class="card-title" className="advisorLink"><a href="/advisors">{tile.title}</a></h4>: <h4 className="card-title">{tile.title}</h4>}
                      <p class="card-text">
                        {tile.text}
                      </p>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }

  class Testimonial extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }

    render(){
      return(
        <div id="testimonialSection">
          <div id="testimonialNonBackground">
            <div id="titleTestimonial">
              <div id="testimonialTitleText">Testimonial</div>
            </div>
            <div id="testimonialBox">
              <div id="photoLeftTestimonial">
                  <img id="photoLeftTestimonialIMG" src="testiomonailSquaresLeft.png"></img>
              </div>
              <div id="quotePhotoTop">
                  <img className="quoteIMG" src="quoteUP.png"></img>
              </div>
              <div id="testimonialText">
                  Working with Revenue3 felt like having an industry peer guide us through a personalized and efficient hiring process. Within 48 hours, their team provided a list of high-quality candidates with detailed notes on how they matched our needs. Partnering with Revenue3 has been an excellent experience for finding talent.
              </div>
              <div id="testimonialQuoter">
              &ndash; Kell Canty, CEO at Ledgible
              </div>
              <div id="quotePhotoBottom">
                <img className="quoteIMG" src="quotedown.png"></img>
              </div>
            </div>
          </div>
          <div id="backgroundPhotoTestimonial">
            <img src="advantages_bg.png"></img>
          </div>
        </div>
      );
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
              <img id="worldBackGroundContact" src="worldBackGroundContact.jpg"></img>
            </div>
            <div id="boxHolder">
              <div id="logoBrandingBoxLeft">
                <div id="logoBrandingBoxLeftTitle">Revenue3</div>
                <div id="logoBrandingBoxLeftLogoPhoto">
                  <img id="rev3brandingPhoto" src="Revenued3-768x725.jpg"></img>
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
                <a href="our-process/">Our Process</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="meet-the-team/">Meet The Team</a>
              </li>
              <li class="QuickLinkTitleSectionFooterLinks">
                <a href="advisors/">Advisors</a>
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
                <a href="contact-us/">Get In Touch</a>
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
                <div id="footerMail"> <a id="buttonLinkFooter" href="https://revenue3.com/contact-us/">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="backgroundPhotosFooter">
            <div id="footerSectionOverlay"></div>
            <div id="footerPhotoFrontDiv">
              <img id="footerPhotoFrontDivImg" src="footerPhoto.jpg"></img>
            </div>
            <div id="footerPhotoBack">
              <img id="footerPhotoBackDiv" src="11-118193_curve-shape-png-curvy-shapes-1.png"></img>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home;
