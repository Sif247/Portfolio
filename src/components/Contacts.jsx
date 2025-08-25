function Contacts() {
  return (
    <section className="bg-gray-900 min-h-screen text-gray-300 flex flex-col items-center justify-center px-6 py-12">
      {/* Titolo in stile EXPERIENCE */}
      <h2 className="text-5xl font-extrabold tracking-wide text-blue-500 mb-6 text-center">
        CONTATTI
      </h2>
      <p className="mb-6 text-center">Scrivimi per collaborazioni o domande!</p>

      {/* Form Netlify */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        className="flex flex-col gap-4 w-full max-w-md"
      >
        {/* Honeypot */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <input 
          type="text" 
          name="name"
          placeholder="Nome" 
          className="p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          className="p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        />
        <textarea 
          name="message"
          placeholder="Messaggio" 
          className="p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          rows="4" 
          required
        ></textarea>

        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all flex items-center justify-center gap-2 font-medium"
        >
          Invia
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </form>
    </section>
  );
}

export default Contacts;
