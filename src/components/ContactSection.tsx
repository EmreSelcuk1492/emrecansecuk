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

  const inputStyle = {
    width: '100%',
    padding: '1.2rem 1.5rem',
    background: 'var(--color-bg-primary)',
    border: '1px solid var(--color-border)',
    borderRadius: '16px',
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-primary)',
    transition: 'all var(--transition-base)',
    fontFamily: 'inherit',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: 'var(--font-size-lg)',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    marginBottom: '0.75rem',
    display: 'block'
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-container" style={{
          maxWidth: '900px',
          background: 'var(--color-bg-tertiary)',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-xl)',
          backdropFilter: 'var(--backdrop-blur)',
          padding: '3rem'
        }}>
          <div className="contact-header" style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 className="contact-title" style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: '800',
              color: 'var(--color-text-primary)',
              margin: '0',
              textShadow: '0 0 10px var(--color-shadow)'
            }}>
              Get In Touch
            </h2>
          </div>
          <form className="contact-form-modern" onSubmit={handleSubmit} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            <div className="form-group-modern" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange}
                required 
                style={inputStyle}
              />
            </div>
            <div className="form-group-modern" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
                style={inputStyle}
              />
            </div>
            <div className="form-group-modern" style={{
              display: 'flex',
              flexDirection: 'column',
              gridColumn: '1 / -1'
            }}>
              <label htmlFor="subject" style={labelStyle}>
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                placeholder="What's this about?" 
                value={formData.subject}
                onChange={handleChange}
                required 
                style={inputStyle}
              />
            </div>
            <div className="form-group-modern" style={{
              display: 'flex',
              flexDirection: 'column',
              gridColumn: '1 / -1'
            }}>
              <label htmlFor="message" style={labelStyle}>
                Message
              </label>
              <textarea 
                id="message" 
                rows={6} 
                placeholder="Tell me about your project or just say hi!" 
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '150px',
                  paddingTop: '1.2rem'
                }}
              />
            </div>
            <div style={{ 
              gridColumn: '1 / -1', 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '1.5rem' 
            }}>
              <button type="submit" className="btn">
                Get in Touch ➤
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 