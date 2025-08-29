const ContactPage = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-lg text-gray-600 space-y-4">
          <p>
            Have a question, a suggestion for a blog post, or just want to say hi? I'd love to hear from you. Feel free to reach out via the email below.
          </p>
          <a
            href="mailto:example@myblog.com"
            className="text-blue-600 hover:underline font-semibold"
          >
            example@myblog.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;