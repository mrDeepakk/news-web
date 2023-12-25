import { useEffect, useState } from "react";
import NewsItem from "./NewsItem.jsx";
function NewsBord({ category }) {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    let url;
    if (category) {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
    } else {
      url = `https://newsapi.org/v2/everything?q=everythings&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var arr = data.articles;
        shuffleArray(arr);
        setArticle(arr);
      });
  }, [category]);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return (
    <center>
      <div>
        <h2 className="text-center p-3">
          Latest
          <span className="badge bg-danger px-3"> news</span>
        </h2>
        {articles.map((news, index) => {
          if (news.urlToImage === null) return;
          return <NewsItem key={index} news={news} />;
        })}
      </div>
    </center>
  );
}

export default NewsBord;
