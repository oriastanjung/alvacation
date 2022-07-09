import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import ItemDetails from "../json/itemDetails.json";
import PostBooking from "../json/post-booking.json";

import Header from "parts/Header";
import Footer from "parts/Footer";
import FeaturedImages from "parts/FeaturedImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import { Fade } from "react-reveal";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImages data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}></Categories>
        <Testimony data={ItemDetails.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}
