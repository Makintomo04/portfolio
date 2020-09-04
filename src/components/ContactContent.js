import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import contactStyles from "./contact.module.scss"
import gsap from "gsap"
function ContactContent() {
  let line1 = useRef(null)
  let line2 = useRef(null)
  let sub_line1 = useRef(null)
  let sub_line2 = useRef(null)
  let socials = useRef(null)
  let form = useRef(null)

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.2,
      ease: "power3.out",
      y: 144,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from([socials], {
      delay: 0.8,
      opacity: 0,
      ease: "power3.out",
      y: -100,
    })
    gsap.from([sub_line1, sub_line2], 0.5, {
      delay: 1.2,
      opacity: 0,
      ease: "power3.out",
      x: 50,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from([form], 1, {
      delay: 1.2,
      opacity: 0,
      ease: "power3.out",
      y: -100,
    })
  }, [line1, line2, socials, sub_line1, sub_line2, form])

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div
      className={contactStyles.contactBody}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div className={contactStyles.contact_left}>
        <h1 className={contactStyles.heading}>
          <div className={contactStyles.line_wrap}>
            <div ref={el => (line1 = el)} className={contactStyles.line1}>
              Get in
            </div>
          </div>
          <div className={contactStyles.line_wrap}>
            <div ref={el => (line2 = el)} className={contactStyles.line2}>
              Touch<span style={{ color: "red" }}>.</span>
            </div>
          </div>
        </h1>
        <div ref={el => (socials = el)}>
          <p
            className={contactStyles.contact_para}
            style={{ fontWeight: 700, color: "red" }}
          >
            Where to find me
          </p>
          <ul className={contactStyles.social_links}>
            <a
              href="mailto:makintomo04@hotmail.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <li>
                <i class="fas fa-envelope"></i> Makintomo04@hotmail.co.uk
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-akintomo/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i class="fab fa-linkedin"></i> Michael-Akintomo
              </li>
            </a>
            <a
              href="https://github.com/Makintomo04"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i class="fab fa-github"></i> Makintomo04
              </li>
            </a>
            <a
              href="https://twitter.com/MadeByM1KE"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <li>
                <i class="fab fa-twitter"></i> MadeByM1KE
              </li>
            </a>
          </ul>
        </div>
      </div>

      <form
        ref={el => (form = el)}
        name="contact-from"
        className={contactStyles.form}
        netlify
      >
        <h2 style={{ fontSize: "4rem", marginBottom: "2rem" }}>
          <div className={contactStyles.sub_line_wrap}>
            <div
              ref={el => (sub_line1 = el)}
              className={contactStyles.sub_line1}
            >
              Send me a
            </div>
          </div>
          <div className={contactStyles.sub_line_wrap}>
            <div
              ref={el => (sub_line2 = el)}
              className={contactStyles.sub_line2}
            >
              message{" "}
              <i style={{ color: "red" }} class="fab fa-telegram-plane"></i>
            </div>
          </div>
        </h2>
        <div className={contactStyles.formWrapper}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name</label>
            <input
              className={contactStyles.inputs}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <input
              className={contactStyles.inputs}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Subject</label>
            <input
              className={contactStyles.inputs}
              type="subject"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              required
            ></input>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Enter your message"
            style={{ height: "150px" }}
            required
          ></textarea>
        </div>
        <input
          className={contactStyles.button}
          type="submit"
          onSubmit={e => handleSubmit()}
        ></input>
      </form>
    </div>
  )
}
export default ContactContent
