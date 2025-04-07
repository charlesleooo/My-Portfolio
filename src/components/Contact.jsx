import React, { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
        'service_1tc6lw5',
        'template_j4p1vj6',
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // ✅ secure usage from .env
      );

      if (result.status === 200 || result.text === 'OK') {
        setSuccess(true);
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`contact hidden ${darkMode ? 'dark-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title hidden">Get In Touch</h2>
            <div className="section-divider hidden"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-4 mb-4 mb-lg-0">
            <div className={`contact-info p-4 rounded shadow-sm hidden ${darkMode ? 'dark-card' : 'light-card'}`}>
              <h3 className="h4 mb-4">Contact Information</h3>

              <div className="contact-item d-flex align-items-center mb-3">
                <div className="contact-icon me-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h5 className="h6 mb-0">Location:</h5>
                  <p className="mb-0">General Santos City, Philippines</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-3">
                <div className="contact-icon me-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h5 className="h6 mb-0">Email:</h5>
                  <p className="mb-0">charlesleohermano@gmail.com</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-3">
                <div className="contact-icon me-3">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h5 className="h6 mb-0">Mobile Number:</h5>
                  <p className="mb-0">(+63) 960 607 2661</p>
                </div>
              </div>

              <div className="social-links mt-4">
                <h5 className="h6 mb-3">Follow Me:</h5>
                <div className="d-flex">
                  <a href="https://www.linkedin.com/in/charles-leo-palomares-b0b84a300" target="_blank" rel="noopener noreferrer" className="social-icon me-2" style={{ fontSize: '30px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/charlesleooo" target="_blank" rel="noopener noreferrer" className="social-icon me-2" style={{ fontSize: '30px' }}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com/charlesleooo" target="_blank" rel="noopener noreferrer" className="social-icon me-2" style={{ fontSize: '30px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-8">
            <div className={`contact-form p-4 rounded shadow-sm hidden ${darkMode ? 'dark-card' : 'light-card'}`}>
              <h3 className="h4 mb-4">Send Me a Message</h3>

              <form ref={form} onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">Thank you for your message! I will get back to you soon.</div>}

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="mb-1">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="mb-1">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="mb-1">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="mb-1">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4 py-2" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
