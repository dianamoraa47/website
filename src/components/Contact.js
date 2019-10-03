import React from 'react'
class Contact extends React.Component{
  render(){
    return <section>
    <header>
      <h2>Get in touch</h2>
    </header>
    <div className="content">
      <p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
      <form>
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
          </div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="button primary" /></li>
        </ul>
      </form>
    </div>
    <footer>
      <ul className="items">
        <li>
          <h3>Email</h3>
          <a href="#">information@untitled.ext</a>
        </li>
        <li>
          <h3>Phone</h3>
          <a href="#">(000) 000-0000</a>
        </li>
        <li>
          <h3>Address</h3>
          <span>1234 Somewhere Road, Nashville, TN 00000</span>
        </li>
        <li>
          <h3>Elsewhere</h3>
          <ul className="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon brands fa-codepen"><span class="label">Codepen</span></a></li>
          </ul>
        </li>
      </ul>
    </footer>
  </section>

  }
}

export default Contact;
