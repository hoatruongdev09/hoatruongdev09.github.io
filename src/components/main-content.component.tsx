// import { useState } from "react";
import About from "./main-contents/about.component";
import Resume from "./main-contents/resume.component";
import FeaturedPortfolio from "./main-contents/featured-portfolio.component";
// import LatestBlogs from "./main-contents/latest-blogs.component";

export default function MainContent() {

    return (
        <div className="w-full">
            <About />
            <Resume />
            <FeaturedPortfolio />
            {/* <LatestBlogs /> */}
        </div>
    )
}