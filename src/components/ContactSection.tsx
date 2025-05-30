import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-icon">📧</div>
          </div>
          <form className="contact-form-modern" onSubmit={handleSubmit}>
            <div className="form-group-modern">
              <label htmlFor="name" className="form-label-modern">Name</label>
              <div className="form-input-container">
                <span className="form-icon">👤</span>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input-modern" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group-modern">
              <label htmlFor="email" className="form-label-modern">Email</label>
              <div className="form-input-container">
                <span className="form-icon">✉️</span>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input-modern" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group-modern">
              <label htmlFor="subject" className="form-label-modern">Subject</label>
              <div className="form-input-container">
                <span className="form-icon">📝</span>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input-modern" 
                  placeholder="Subject of your message" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group-modern">
              <label htmlFor="message" className="form-label-modern">Message</label>
              <div className="form-input-container">
                <span className="form-icon">💬</span>
                <textarea 
                  id="message" 
                  className="form-textarea-modern" 
                  rows={6} 
                  placeholder="Write your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-modern">
              <span>SEND MESSAGE</span>
              <span className="btn-arrow">➤</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 