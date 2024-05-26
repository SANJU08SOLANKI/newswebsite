import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Button from "react-bootstrap/Button";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const apikey = process.env.REACT_APP_APIKEY;

  const updateNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apikey}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setArticle(parseData.articles);
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
      setArticle([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePreClick = async () => {
    console.log("previous");
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=${apikey}&page=${page - 1}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setArticle(parseData.articles);
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Failed to fetch previous page:", error);
    }
    setLoading(false);
  };

  const handleNextClick = async () => {
    console.log("NEXT");
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=${apikey}&page=${page + 1}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setArticle(parseData.articles);
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Failed to fetch next page:", error);
    }
    setLoading(false);
  };

  const search = async () => {
    console.log(text);
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?q=${text}&apiKey=${apikey}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setArticle(parseData.articles);
    } catch (error) {
      console.error("Failed to search news articles:", error);
      setArticle([]);
    }
    setLoading(false);
  };

  const handel = (event) => {
    console.log("lol");
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <Form className="d-flex container mx-10">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={text}
          onChange={handel}
        />
        <Button variant="outline-success" onClick={search}>
          Search
        </Button>
      </Form>
      <h2 className="text-center my-4">News - Top Headlines</h2>
      {loading && <Spinners />}
      <div className="row">
        {!loading &&
          article &&
          article.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                image={element.urlToImage}
                url={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <Button variant="dark" disabled={page <= 1} onClick={handlePreClick}>
          &#8672; Previous
        </Button>
        <Button variant="dark" onClick={handleNextClick}>
          Next &#8674;
        </Button>
      </div>
    </div>
  );
}

News.defaultProps = {
  category: "sports",
};

News.propTypes = {
  category: PropTypes.string,
};
