import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Log form data to console (replace with EmailJS or API call for real submission)
    console.log('Contact Form Submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon. (Check console for details.)');
    reset(); // Clear form after submission
  };

  return (
    <div className="contact" data-aos="fade-up">
      <section className="contact-hero" data-aos="fade-up">
        <h1 data-aos="fade-down">Get In Touch</h1>
        <p data-aos="fade-up" data-aos-delay="200">Have a project in mind or just want to say hi? Feel free to reach out—I'm always open to new opportunities and collaborations.</p>
      </section>

      <section className="contact-content" data-aos="fade-up" data-aos-delay="400">
        <div className="contact-form-section">
          <h2 data-aos="fade-down">Send Me a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" data-aos="zoom-in">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
                className="form-input"
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: 'Invalid email address' 
                  }
                })}
                className="form-input"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                {...register('subject', { required: 'Subject is required' })}
                className="form-input"
              />
              {errors.subject && <span className="error">{errors.subject.message}</span>}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className="form-textarea"
              />
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="submit-btn" data-aos="zoom-in" data-aos-delay="200">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

        <div className="contact-info-section" data-aos="fade-left" data-aos-delay="200">
          <h2 data-aos="fade-down">Contact Information</h2>
          <div className="info-items">
            <div className="info-item" data-aos="fade-up" data-aos-delay="100">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>

            <div className="info-item" data-aos="fade-up" data-aos-delay="200">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="info-item" data-aos="fade-up" data-aos-delay="300">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
            </div>

            <div className="info-item" data-aos="fade-up" data-aos-delay="400">
              <FaLinkedin className="info-icon" />
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
              </div>
            </div>

            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
              <FaGithub className="info-icon" />
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">View My Repos</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
