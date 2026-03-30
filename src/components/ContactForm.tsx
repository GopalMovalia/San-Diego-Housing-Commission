import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [trackingId, setTrackingId] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission with tracking ID
    await new Promise(res => setTimeout(res, 1500));
    const id = `SDHC-${Date.now().toString().slice(-6)}`;
    setTrackingId(id);
    setStatus('success');
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">
          {/* Left: Info */}
          <div className="contact__info">
            <span className="section-label">Get in Touch</span>
            <h2 id="contact-heading" className="section-title">
              Start Your Housing Journey Today
            </h2>
            <p className="section-subtitle">
              Our team is ready to help you find the right program. Submit your information and we'll follow up within one business day.
            </p>

            <div className="contact__details">
              {[
                {
                  icon: '📍',
                  label: 'Address',
                  value: '1122 Broadway, Suite 300\nSan Diego, CA 92101',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '(619) 231-9400',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'info@sdhc.org',
                },
                {
                  icon: '⏰',
                  label: 'Hours',
                  value: 'Mon–Fri, 8:00 AM – 5:00 PM PT',
                },
              ].map(item => (
                <div key={item.label} className="contact__detail-row">
                  <span className="contact__detail-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="contact__detail-label">{item.label}</div>
                    <div className="contact__detail-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap glass-card">
            {status === 'success' ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">✅</div>
                <h3>Application Submitted!</h3>
                <p>Your inquiry has been received. Track your application status with:</p>
                <div className="contact__tracking-id">
                  <span>Tracking ID</span>
                  <strong>{trackingId}</strong>
                </div>
                <p className="contact__success-sub">
                  A confirmation will be sent to <strong>{formData.email}</strong>. Expect a response within 1 business day.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setStatus('idle'); setFormData({ name:'', email:'', phone:'', program:'', message:'' }); }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="contact__form">
                <h3 className="contact__form-title">Tell us how we can help</h3>

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true" style={{color:'#e53e3e'}}>*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address <span aria-hidden="true" style={{color:'#e53e3e'}}>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(619) 555-0001"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="program" className="form-label">Program of Interest <span aria-hidden="true" style={{color:'#e53e3e'}}>*</span></label>
                    <select
                      id="program"
                      name="program"
                      className="form-select"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a program</option>
                      <option value="rental">Rental Assistance</option>
                      <option value="section8">Section 8 Vouchers</option>
                      <option value="homebuyers">First-Time Homebuyers</option>
                      <option value="veterans">Veterans Housing</option>
                      <option value="senior">Senior Housing</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Describe your housing situation or question..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{width:16,height:16}}>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <p className="contact__disclaimer">
                  By submitting, you agree to our{' '}
                  <a href="#privacy">Privacy Policy</a>. Your information is secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
