

import './Contact.css';

const Contact = () => {
    return (

        <div class="container" id='m-conatactm-ain-div'>
            <h1 class="heading">Contact us</h1>

            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.788247432078!2d77.1940029755012!3d28.57612068664011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce33d4a9ab519%3A0x69f5c99d5669ea9f!2z4KS44KSw4KWL4KSc4KS_4KSo4KWAIOCkruCkvuCksOCljeCkleClh-Ckn-CljQ!5e0!3m2!1shi!2sin!4v1713056209077!5m2!1shi!2sin"
                    width="100%" height="350px" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="form-container">
                <form>
                    <div class="form-group">
                        <label for="input1">Email</label>
                        <input type="email" class="form-control" id="input1" style={{ width: '300px' }} />
                    </div>
                    <div class="form-group">
                        <label for="input2">Name</label>
                        <input type="text" class="form-control" id="input2" style={{ width: "300px" }} />
                    </div>
                    <div class="form-group">
                        <label for="textarea">Text Area</label>
                        <textarea class="form-control" id="textarea" style={{ width: '300px', height: '100px' }}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;