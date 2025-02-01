import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  }
]

class App extends Component {
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

  refreshList = () => {
    axios
      .get("/api/todos")
      .then((res => this.setState({ todoList: res.data })))
      .catch((err) => console.log(err));
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/todos/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/todos/${item.id}/`)
      .then((res) => this.refreshList());
  }

  createItem = () => {
    const item = { title: "", description: "", completed: false };

    this.setState({ activeItem: item, modal: !this.state.modal })
  }

  editItem = (item) => {
    console.log(item);
    console.log(this.state)    
    // this.setState({ activeitem: item, modal: !this.state.modal, activeitem: {...this.state.someProperty,item.title} , description: item.description})
    this.setState({ someProperty: { ...this.state.someProperty, flag: false} });
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted:true });
    }

    return this.setState({ viewCompleted: false })
  };

  renderTablist = () => {
    return (
      <div className='nav nav-tabs'>
          <span className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
          >Complete</span>
          <span 
            className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
            onClick={() => this.displayCompleted(false)}
            >
              Incomplete
            </span>
      </div>
    )
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted)
    ;
  

  return newItems.map((item) => (
    <li key= {item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className={`todo-title mr-2 ${
        this.state.viewCompleted ? "compeleted-todo" : ""
      }`}
      title={item.description}
      >
        {item.title}
      </span>
      <span>
        <button
          className='btn bten-secondary mr-2'
          onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className='btn btn-danger'
            onClick={() => this.handleDelete(item)}
            >
              Delete
          </button>
      </span>
    </li>
  ));
    }


render() {
  return (
    <div id="absoluteMain">

    <Contact
      sendEmail={this.sendEmail}
    ></Contact>
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
            title: "Both Sides of the Deal",
            text: "We are in a unique position to play both offense and defense; \
            we introduce you to people that are vetted and proactively sourced by credible industry participants \
            while acting as a first line of defense to weed out folks that are not a good fit.",
            imageLink: "handshake.jpeg",
          }, {
            id: 1,
            title: "Cost Savings",
            text: "Recruiting fees have gotten out of hand. Our fee structure is reasonable and scalable.",
            imageLink: "money.jpeg",
           }, {
              id: 2,
              title: "Expertise",
              text: "Speak directly with a crypto Head of Sales and crypto-native recruiter who has been recruiting into the industry for 7+ years. \
              We learn about your company and the type of person you’re looking to hire.",
              imageLink: "expertise.jpeg",
            }
        ]
      }
    }

    render(){
      return(
        <div class="blog" id="whyRev3" key={5}>
          <div class="container" key={6}>
            <h1 class="text-center" key={67}>Why Revenue3</h1>
            <div class="row" key={8}>
              {this.state.tiles.map((tile, index) => {
                return(
                  <div class="col-md-4 col-lg-4 col-sm-12 d-lg-flex backgroundEffect" key={index + 1}>
                  <div class="card" key={index + 2}>
                    <div class="card-img" key={index + 3}>
                      <img src={tile.imageLink} class="img-fluid"></img>
                    </div>
      
                    <div class="card-body" key={index + 4}>
                      <h4 class="card-title">{tile.title}</h4>
                      <p class="card-text">
                        {tile.text}
                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="" class="card-link">Read More</a>
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

  class Process extends Component {
    constructor(props){
      super(props)
      this.state = {
        tiles: [
          {
            title: "Network",
            text: "We send detailed notes and tap into our network of advisors, a team of >25 full-time employees in \
            the industry spanning CEOs, CROs, Heads of Sales, Heads of Partnerships, and more. This team also sends us \
            referrals on a daily basis, so we have a great group of candidates to reference at all times.",
            imageLink: "network.png",
          }, {
            title: "Vetting",
            text: "We vet the candidates as an additional line of defense → send them your way.",
            imageLink: "vetting.jpeg",
          }, {
            title: "Parralel Searching",
            text: "If needed after this step, the search is led in tandem by our team. While we always start by \
            sourcing from our advisors, our team has ample experience recruiting in the industry and we will always \
            strive to provide the best experience.",
            imageLink: "analsys.jpeg",
          }
        ]
      }
    }

    render(){
      return(
        <div class="blog" id="Process">
        <div class="container">
          <h1 class="text-center">Our Process</h1>
          <div class="row">
          {this.state.tiles.map((tile, index) => {
            return(
              <div class="col-md-4 col-lg-4 col-sm-12">
              <div class="card">
                <div class="card-img">
                  <img src={tile.imageLink} class="img-fluid"></img>
                </div>
  
                <div class="card-body">
                  <h4 class="card-title">{tile.title}</h4>
                  <p class="card-text">
                    {tile.text}
                  </p>
                </div>
                <div class="card-footer">
                  <a href="" class="card-link">Read More</a>
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

  class Employers extends Component {
    constructor(props){
      super(props)
      this.state = {
        tiles: [
          {
            title: "Standards",
            text: "We will vet every candidate with the same vigilance as if we were hiring them for our teams.",
            imageLink: "standards.jpeg",
          },
          {
            title: "Quality",
            text: "As people that have scaled teams at large crypto firms, we empathize with the importance of the \
            hiring process and the aftermath of hiring the wrong person. We will never sacrifice quality for quantity \
            in our search",
            imageLink: "quality.jpeg",
          },
          {
            title: "Scalability",
            text: "We will put in place a scalable fee structure",
            imageLink: "scalability.jpeg",
          },
        ]
      }
    }

    render(){
      return(
        <div class="blog" id="Employers">
        <div class="container">
          <h1 class="text-center">Employers</h1>
          <p class="text-center">Founded by hiring managers in the crypto space, Revenue3 empathizes with the broken 
          recruiting practices taking place in our industry. <br></br>
          Having direct industry experience ourselves enables us to uniquely position your company in a way that most recruiting firms cannot.  <br></br>
          This is our promise to our clients:</p>
          <div class="row">
            {this.state.tiles.map((tile, index) => {
              return(
                <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="card">
                  <div class="card-img">
                    <img src={tile.imageLink} class="img-fluid"></img>
                  </div>
    
                  <div class="card-body">
                    <h4 class="card-title">{tile.title}</h4>
                    <p class="card-text">
                      {tile.text}
                    </p>
                  </div>
                  <div class="card-footer">
                    <a href="" class="card-link">Read More</a>
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

  class Candidates extends Component {
    constructor(props){
      super(props)
      this.state = {
        tiles: [
          {
            title: "Partner Vetting",
            text: "Vet our clients with as much due diligence as the candidates we refer to them.",
            imageLink: "partnerVetting.jpeg",
          },
          {
            title: "Transparency",
            text: "Be open & transparent about all questions you ask us related to compensation, corporate culture, etc. \
            There is no opaqueness in our recruiting process.",
            imageLink: "transparency.jpeg",
          },
          {
            title: "Honesty",
            text: "Provide honest feedback no matter what.",
            imageLink: "handshake-close-up-executives_1098-1384.jpeg",
          },
        ]
      }
    }

    render(){
      return(
        <div class="blog" id="Candidates">
        <div class="container">
          <h1 class="text-center">Candidates</h1>
          <p class="text-center">Job seekers have a right to be just as frustrated with broken recruiting practices than the companies that are hiring.
         <br></br>
         We will always provide:</p>
          <div class="row">
            {this.state.tiles.map((tile, index) => {
              return(
                <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="card">
                  <div class="card-img">
                    <img src={tile.imageLink} class="img-fluid"></img>
                  </div>
    
                  <div class="card-body">
                    <h4 class="card-title">{tile.title}</h4>
                    <p class="card-text">
                      {tile.text}
                    </p>
                  </div>
                  <div class="card-footer">
                    <a href="" class="card-link">Read More</a>
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

  class Advisors extends Component{
    constructor(props){
      super(props)
      this.state = {
        teamMembers: [
          {
            name: "Josh W",
            imageLink: "weiss.jpeg",
            job: "CEO", 
          },
          {
            name: "Josh W",
            imageLink: "woods.jpeg",
            job: "CTO", 
          },
          // {
          //   name: "Lawyer Dude",
          //   imageLink: "lawyer.jpeg",
          //   job: "CLO", 
          // },
        ]
        }
      }

    render() {

      return(
        <div className="team" id="Advisors">
          <div className="container">
            <h1 className="text-center">Our Team</h1>
            <p class="text-center">Our unparalleled team of advisors are the backbone of Revenue3, and are a team of industry leaders who help us source talent.<br></br>
            Meet some of them below:</p>
            <div className="row">
            {this.state.teamMembers.map((person, index) =>{
              return (<div className="col-lg-3 col-md-3 col-sm-12 item" key={index}>
                <img src={person.imageLink}className="img-fluid" alt="team" ></img>
                <div className="des">
                  {person.name}
                </div>
                <span className="text-muted" >{person.job}</span>
              </div>)
            })}
            </div>
          </div>
        </div>
      )
    }
    
  }


  class Contact extends Component{
    constructor(props){
      super(props)
      this.state = {
        contactName: "",
        email: "",
        message: "",
        phone: "", 
        company: "", 
      }
    }

    componentDidMount(){
    }

    handleUpdate = (e) => {
      this.setState({[e.target.id]: e.target.value})
    };

    handleSubmit = () => {
      this.props.sendEmail(this.state)
    }

    render(){
      return(
        <div className="contact-form" id="Contact">
          <div className="container">
            <form>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <h1>Get In Touch!</h1>
                </div>
                <div className='col-lg-8 col-md-8 sol-sm-12 right'>
                  <div className='form-group'>
                    <div><input id="contactName" type="name" onChange={this.handleUpdate} value={this.state.name} className='form-control form-control-lg' placeholder='Name' name=""></input></div>

                  </div>
                  <div className='form-group'>
                    <div><input id="email" type="email" onChange={this.handleUpdate} value={this.state.email} className='form-control form-control-lg' placeholder='Email'></input></div>
                  </div>
                  <div className='form-group'>
                    <div><input id="phone" type="phone" onChange={this.handleUpdate} value={this.state.phone} className='form-control form-control-lg' placeholder='Phone #'></input></div>
                  </div>
                  <div className='form-group'>
                    <div><input id="company" type="name" onChange={this.handleUpdate} value={this.state.company} className='form-control form-control-lg' placeholder='Your Company'></input></div>
                  </div>
                  <div className='form-group'>
                    <div><textarea id="message" onChange={this.handleUpdate} value={this.state.message} className='form-control form-control-lg' placeholder='Your Message'></textarea></div>
                  </div>
                  <input onClick={this.handleSubmit} type='button' className='btn btn-secondary btn-block' value="Send Email" name=""></input>
                </div>

              </div>
            </form>
          </div>
        </div>
      )
    }
  }


export default App;
