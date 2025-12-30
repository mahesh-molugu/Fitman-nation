import { Link } from 'react-router-dom'
import './Blog.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Starting Your Fitness Journey',
      category: 'Fitness Tips',
      date: 'March 10, 2024',
      excerpt: 'Starting a fitness journey can be overwhelming. Here are 10 practical tips to help you begin with confidence and set yourself up for success.',
      readTime: '5 min read',
      image: '💪'
    },
    {
      id: 2,
      title: 'Nutrition Basics: Fueling Your Body Right',
      category: 'Nutrition',
      date: 'March 8, 2024',
      excerpt: 'Understanding the fundamentals of nutrition is key to achieving your fitness goals. Learn about macronutrients, meal timing, and healthy eating habits.',
      readTime: '7 min read',
      image: '🥗'
    },
    {
      id: 3,
      title: 'The Power of Community in Fitness',
      category: 'Mindset',
      date: 'March 5, 2024',
      excerpt: 'Why having a supportive community can make all the difference in your fitness journey. Discover how connection and accountability drive results.',
      readTime: '6 min read',
      image: '🤝'
    },
    {
      id: 4,
      title: 'Mobility Exercises for Desk Workers',
      category: 'Mobility',
      date: 'March 3, 2024',
      excerpt: 'Sitting all day? These mobility exercises can help counteract the effects of prolonged sitting and improve your posture and movement quality.',
      readTime: '8 min read',
      image: '🧘'
    },
    {
      id: 5,
      title: 'Meal Prep Made Easy: 5 Simple Recipes',
      category: 'Recipes',
      date: 'March 1, 2024',
      excerpt: 'Save time and stay on track with these easy meal prep recipes. Nutritious, delicious, and perfect for busy schedules.',
      readTime: '10 min read',
      image: '🍱'
    },
    {
      id: 6,
      title: 'Building Mental Strength Through Fitness',
      category: 'Mindset',
      date: 'February 28, 2024',
      excerpt: 'Fitness isn\'t just about physical strength. Learn how regular exercise builds mental resilience, confidence, and emotional well-being.',
      readTime: '6 min read',
      image: '🧠'
    }
  ]

  const categories = ['All', 'Fitness Tips', 'Nutrition', 'Mindset', 'Mobility', 'Recipes']

  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <h1 className="page-title">Blog & Resources</h1>
          <p className="page-subtitle">
            Fitness articles, tips, recipes, mindset guides, and mobility advice to support your journey.
          </p>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">{post.image}</div>
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-newsletter section">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for weekly fitness tips, recipes, and exclusive content.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-red">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}









