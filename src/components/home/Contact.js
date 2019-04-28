import React from "react"
import Title from "../globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contactez-nous" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Indiquez votre nom complet"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Indiquez votre adresse email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Indiquez votre message"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
