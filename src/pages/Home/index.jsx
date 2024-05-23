import React from "react";
import { Banner } from "../../components/Banner"
import { ContentFiller } from "../../components/ContentFiler";
import { CoursePreview } from "../../components/CoursePreview";
import { Features } from "../../components/Features";
import { Footer } from "../../components/Footer";



const Home = () => {
    return(
        <>
            <Banner />
            <CoursePreview />
            <Features />
            <ContentFiller />
            <Footer />
        </>
    )
}

export default Home;