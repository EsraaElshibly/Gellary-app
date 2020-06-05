import React, { Component } from "react";
import "./Images.css";
import Pic from "./Pic";
import LargeImg from "./Gellary";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: [
        {
          imgSrc: "../pic/Desert.jpg",
          title: "This Is Pic About Desert",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
        },
        {
          imgSrc: "../pic/Lighthouse.jpg",
          title: "This Is Pic About Lighthouse",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
        },
        {
          imgSrc: "../pic/Penguins.jpg",
          title: "This Is Pic About Penguins",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
        },
        {
          imgSrc: "../pic/1.jpg",
          title: "This Is Pic About Ballons",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
        }
      ],

      largeImg: {
        imgSrc: "",
        title: "",
        details: ""
      },

      imgStyle: {
        largeImgConStyle: {
          display: "none"
        },
        imgArrConStyle: {
          display: "flex"
        }
      }
    };
  }

  handleClick = e => {
    console.log("fine");
    e.preventDefault();

    if (this.state.imgStyle.imgArrConStyle.display === "flex") {
      console.log("Large Image title: " + this.state.largeImg.title);

      this.setState({
        imgStyle: {
          largeImgConStyle: {
            display: "block"
          },
          imgArrConStyle: {
            display: "none"
          }
        }
      });

      Object.values(this.state.imgArr).forEach(element => {
        console.log(element.imgSrc);
        let sourceString = ".." + e.target.src.toString().slice(21);
        console.log(sourceString);

        if (element.imgSrc === sourceString) {
          console.log("Source is matched");
          console.log("Elelment title: " + element.title);

          this.setState({
            largeImg: {
              imgSrc: e.target.src,
              title: element.title,
              details: element.details
            }
          });
        } else {
          console.log("Source didn't match");
        }
      });
    } else {
      console.log("Something went wrong");
    }
  };

  closeLargeImage = e => {
    e.preventDefault();
    console.log("close button is working fine");
    this.setState({
      imgStyle: {
        largeImgConStyle: {
          display: "none"
        },
        imgArrConStyle: {
          display: "flex"
        }
      }
    });
  };

  buttonStyle = {
    background: "none",
    border: "none"
  };

  render() {
    let imgItem = this.state.imgArr.map(pic => {
      return (
        <button
          className="But"
          onClick={this.handleClick}
          style={this.buttonStyle}
          key={pic.imgSrc}
        >
          <img src={pic.imgSrc} />
        </button>
      );
    });
    return (
      <div className="Parent">
        <div
          className="lg-img-con"
          style={this.state.imgStyle.largeImgConStyle}
        >
          <LargeImg
            closeButton={this.closeLargeImage}
            title={this.state.largeImg.title}
            details={this.state.largeImg.details}
            src={this.state.largeImg.imgSrc}
          />
        </div>
        <div className="wrap" style={this.state.imgStyle.imgListConStyle}>
          {imgItem}
        </div>
      </div>
    );
  }
}

export default Images;
