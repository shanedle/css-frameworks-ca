import React from "react";
import { Container } from "react-bootstrap";
import NewsCards from "../components/news/NewsCards.js";
import NewsPagination from "../components/news/NewsPagination.js";

const News = () => {
    return (
        <>
            <Container>
                <h2 className="news-header my-3">News</h2>
                <NewsPagination />
                <NewsCards />
                <NewsPagination />
            </Container>
        </>
    );
}

export default News;