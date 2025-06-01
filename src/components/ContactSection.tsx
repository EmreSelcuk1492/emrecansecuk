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
            <h2 className="contact-title">
              Get In Touch
            </h2>
          </div>
          <form className="contact-form-responsive" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group-responsive">
                <label htmlFor="name" className="form-label-responsive">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="form-input-responsive"
                />
              </div>
              <div className="form-group-responsive">
                <label htmlFor="email" className="form-label-responsive">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="form-input-responsive"
                />
              </div>
            </div>
            <div className="form-group-responsive">
              <label htmlFor="subject" className="form-label-responsive">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                placeholder="What's this about?" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="form-input-responsive"
              />
            </div>
            <div className="form-group-responsive">
              <label htmlFor="message" className="form-label-responsive">
                Message
              </label>
              <textarea 
                id="message" 
                rows={6} 
                placeholder="Tell me about your project or just say hi!" 
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea-responsive"
              />
            </div>
            <div className="form-submit-container">
              <button type="submit" className="btn">
                Get in Touch ➤
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          .contact-container {
            max-width: 1100px;
            background: var(--color-bg-tertiary);
            borderRadius: 24px;
            border: 1px solid var(--color-border);
            boxShadow: var(--shadow-xl);
            backdropFilter: var(--backdrop-blur);
            padding: 3rem;
            margin: 0 auto;
          }

          .contact-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .contact-title {
            fontSize: var(--font-size-4xl);
            fontWeight: 800;
            color: var(--color-text-primary);
            margin: 0;
            textShadow: 0 0 10px var(--color-shadow);
          }

          .contact-form-responsive {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .form-group-responsive {
            display: flex;
            flex-direction: column;
          }

          .form-label-responsive {
            fontSize: var(--font-size-lg);
            fontWeight: 600;
            color: var(--color-text-primary);
            marginBottom: 0.75rem;
            display: block;
          }

          .form-input-responsive,
          .form-textarea-responsive {
            width: 100%;
            padding: 1.2rem 1.5rem;
            background: var(--color-bg-primary);
            border: 1px solid var(--color-border);
            borderRadius: 20px;
            fontSize: var(--font-size-base);
            color: var(--color-text-primary);
            transition: all var(--transition-base);
            fontFamily: inherit;
            outline: none;
            boxSizing: border-box;
          }

          .form-textarea-responsive {
            resize: vertical;
            minHeight: 150px;
            paddingTop: 1.2rem;
          }

          .form-input-responsive:focus,
          .form-textarea-responsive:focus {
            borderColor: var(--color-accent);
            boxShadow: 0 0 0 3px rgba(139, 0, 139, 0.1);
            transform: translateY(-2px);
          }

          .form-input-responsive::placeholder,
          .form-textarea-responsive::placeholder {
            color: var(--color-text-secondary);
            opacity: 0.6;
          }

          .form-submit-container {
            display: flex;
            justifyContent: center;
            marginTop: 1.5rem;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .contact-container {
              margin: 0 1rem;
              padding: 2rem 1.5rem;
              borderRadius: 20px;
              max-width: none;
              width: calc(100% - 2rem);
            }

            .contact-header {
              marginBottom: 2rem;
            }

            .contact-title {
              fontSize: var(--font-size-3xl);
            }

            .contact-form-responsive {
              gap: 1.5rem;
            }

            .form-row {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .form-input-responsive,
            .form-textarea-responsive {
              padding: 1rem 1.2rem;
              fontSize: 16px; /* Prevents zoom on iOS */
              borderRadius: 16px;
            }

            .form-textarea-responsive {
              minHeight: 120px;
            }

            .form-submit-container {
              marginTop: 1rem;
            }

            .btn {
              width: 100%;
              padding: 1rem 2rem;
              fontSize: var(--font-size-lg);
            }
          }

          /* Small Mobile Styles */
          @media (max-width: 480px) {
            .contact-container {
              margin: 0 0.75rem;
              padding: 1.5rem 1rem;
              borderRadius: 16px;
              width: calc(100% - 1.5rem);
            }

            .contact-title {
              fontSize: var(--font-size-2xl);
            }

            .contact-form-responsive {
              gap: 1.25rem;
            }

            .form-label-responsive {
              fontSize: var(--font-size-base);
              marginBottom: 0.5rem;
            }

            .form-input-responsive,
            .form-textarea-responsive {
              padding: 0.875rem 1rem;
              borderRadius: 14px;
            }

            .form-textarea-responsive {
              minHeight: 100px;
            }
          }

          /* Touch-friendly adjustments */
          @media (hover: none) and (pointer: coarse) {
            .form-input-responsive,
            .form-textarea-responsive {
              minHeight: 48px; /* Minimum touch target */
              fontSize: 16px; /* Prevents zoom on mobile browsers */
            }

            .btn {
              minHeight: 48px;
              fontSize: 16px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection; 