import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'This field is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'This field is required.';
    if (!formData.email.trim()) newErrors.email = 'This field is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'This field is required.';
    if (!formData.subject.trim()) newErrors.subject = 'This field is required.';
    if (!formData.message.trim()) newErrors.message = 'This field is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative pt-32 pb-20 bg-[#1a2344] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-32 h-32 border-2 border-white rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-tight relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </div>


      <div className="py-20 -mt-10 relative z-20">
        <div className="container-standard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 text-center"
            >
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Email Us</h3>
              <div className="space-y-1 text-sm">
                <p className="text-slate-600 font-bold">admin@gapcloud.com.au</p>
                <p className="text-slate-600 font-bold">support@gapcloud.com.au</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 text-center"
            >
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Office Address</h3>
              <p className="text-slate-600 font-bold leading-relaxed text-sm">
                Suite 140, Lifestyle Working Building, 117 Old Pittwater Road, Brookvale NSW 2100.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 text-center"
            >
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Call Us</h3>
              <div className="space-y-1 text-sm">
                <p className="text-slate-600 font-bold">Sales: +61 2 8319 3242</p>
                <p className="text-slate-600 font-bold">Support: +61 2 8319 3243</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      <div className="pb-24">
        <div className="container-standard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Visit Us</h2>
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-[500px] shadow-lg relative bg-slate-100">
                <iframe
                  src="https://maps.google.com/maps?q=gapcloud&t=m&z=18&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>


            <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-8">Send Us A Message</h2>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Message Sent!</h3>
                  <p className="text-emerald-700 font-medium">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-800 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                    <div>
                      <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
                      />
                      {errors.firstName && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
                      />
                      {errors.lastName && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                    <div>
                      <input 
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.email}</p>}
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <input 
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
                    />
                    {errors.subject && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.subject}</p>}
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'} bg-white text-slate-900 text-sm font-medium outline-none transition-all focus:ring-4 resize-none placeholder:text-slate-400`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2">{errors.message}</p>}
                  </div>

                  <div className="pt-1">
                    <button 
                      type="submit"
                      className="w-full md:w-auto px-10 py-4 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
