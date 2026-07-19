import React from "react";
import "./News.css";

function News() {
  return (
    <div className="news-container">
      <h1 className="news-title">Updates for You</h1>

      <div className="news-data">
        <div className="news-empty"></div>

        {/* Competitions */}
        <div>
          <h1 className="news-subtitle">Competitions</h1>

          <div>
            <div className="news-competition-event">
              <p>📖 Book Review Competition</p>
              <p>
                Share your review of your favorite book and stand a chance to win
                exciting prizes.
              </p>
            </div>

            <div className="news-competition-event">
              <p>📚 Reading Marathon</p>
              <p>
                Read the maximum number of books this month and earn certificates
                and rewards.
              </p>
            </div>

            <div className="news-competition-event">
              <p>📝 Essay Writing Contest</p>
              <p>
                Showcase your writing skills on educational and social topics.
              </p>
            </div>

            <div className="news-competition-event">
              <p>🎨 Bookmark Design Contest</p>
              <p>
                Design creative bookmarks and get featured in our library.
              </p>
            </div>

            <div className="news-competition-event">
              <p>📖 Story Writing Challenge</p>
              <p>
                Submit an original short story and compete with fellow readers.
              </p>
            </div>
          </div>
        </div>

        <div className="news-empty"></div>

        {/* Online Quiz */}
        <div>
          <h1 className="news-subtitle">Online Quiz</h1>

          <div>
            <div className="news-quiz-event">
              <p>📚 General Knowledge Quiz</p>
              <p>
                Test your knowledge with questions on science, history,
                geography, literature, and current affairs.
              </p>
            </div>

            <div className="news-quiz-event">
              <p>📖 Literature Challenge</p>
              <p>
                Explore famous authors, classic novels, and world literature
                through an engaging reading quiz.
              </p>
            </div>

            <div className="news-quiz-event">
              <p>💻 Computer Science Quiz</p>
              <p>
                Practice programming, databases, operating systems, networking,
                and web development concepts.
              </p>
            </div>

            <div className="news-quiz-event">
              <p>🧠 Aptitude & Reasoning</p>
              <p>
                Improve logical reasoning and quantitative aptitude through
                placement-style questions.
              </p>
            </div>

            <div className="news-quiz-event">
              <p>🏆 Monthly Reading Challenge</p>
              <p>
                Read one featured book every month, answer a quiz, and earn
                digital achievement badges.
              </p>
            </div>
          </div>
        </div>

        <div className="news-empty"></div>
      </div>
    </div>
  );
}

export default News;