const Contact = () => {
    return (
        <div>
            <section id="main_contact">
            <h1 id="contact-header" className="text-center pt-5">Submit your Details</h1>
                <div id="contact-container">
                
                    <div id="contact-1">
                        <form id="contact-form" role="form">
                            <div className="controls">
                                <div className="row g-0">
                                    <div>
                                        <div className="form-group"> <label htmlFor="form_name" className="mb-2">Name</label> <input id="form_name" type="text" name="name" className="form-control shadow-none mb-2"  required="required" data-error="Firstname is required."/> </div>
                                    </div>
                                    <div>
                                        <div className="form-group"> <label htmlFor="form_email" className="mb-2">Email</label> <input id="form_email" type="text" name="email" className="form-control shadow-none mb-2"  required="required" data-error="Email is required."/> </div>
                                    </div>
                                    <div>
                                        <div className="form-group"> <label htmlFor="form_website" className="mb-2">Website</label> <input id="form_website" type="text" name="website" className="form-control shadow-none mb-2"  required="required" data-error="Website is required."/> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <div className="form-group"> <label htmlFor="form_message" className="mb-2">Message</label> <textarea id="form_message" name="message" className="form-control shadow-none mb-2"  rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Allow us to sell your personal details to whom ever we want.
                                        </label>
                                    </div>
                                    <div> <input type="submit" className="btn contact-btn btn-send pt-2 mt-4 btn-block " value="Submit"/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="contact-2" className="pt-4 ps-5">
                        <ul className="list-group">
                            <li><i className="contact2-icons fas fa-envelope pb-3"></i>hello@yay.com</li>
                            <li><i className="contact2-icons fas fa-phone pb-3"></i>123 456 7890</li>
                            <li><i className="contact2-icons fas fa-map-marker-alt pb-3"></i> <a href="">123 Some Street Somewhere Some City 10000 </a> </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;