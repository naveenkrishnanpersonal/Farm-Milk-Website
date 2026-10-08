const testimonials = [
  {
    review: 'The milk is exceptionally rich and flavorful. It reminds me of the fresh milk I used to have during my childhood at my grandparents\' village farm.',
    name: 'Suresh Kumar',
    role: 'Subscriber since 2024',
    initials: 'SK',
    color: '#59B2AC',
  },
  {
    review: 'We absolutely love Aman\'s Ghee. The granulation and original aroma are superb. The curd is thick and sweet — makes excellent lassi.',
    name: 'Priya Sharma',
    role: 'Daily Milk & Ghee User',
    initials: 'PS',
    color: '#D4AF37',
  },
  {
    review: 'Super reliable delivery team. They drop the fresh milk bottle outside my door at 5:45 AM every single day. Seamless subscription!',
    name: 'Rahul Mehta',
    role: 'Monthly Subscriber',
    initials: 'RM',
    color: '#E67E22',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="pattern-waves"></div>
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-label">Testimonials</span>
          <h2 className="testimonials-title">What People<br />Are <span className="testimonials-highlight">Saying</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} style={{ '--card-color': t.color }}>
              <div className="testimonial-pin" />
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.review}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
