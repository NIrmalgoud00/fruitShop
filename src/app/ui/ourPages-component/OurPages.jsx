import { Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const OurPages = () => {

    const Icons = [
        {
            name: <Twitter size={28} strokeWidth={1.75} />
        },
        {
            name: <Facebook size={28} strokeWidth={1.75} />
        },
        {
            name: <Youtube size={28} strokeWidth={1.75} />
        },
        {
            name: <Instagram size={28} strokeWidth={1.75} />
        },
    ]

    return (
        <div className="d-flex justify-content-between pt-2">
            {
                Icons.map((icon, index) => {
                    return (
                        <a className="d-flex justify-content-center btn me-2 align-content-center btn-outline-secondary btn-md-square rounded-circle" href="" key={index}>
                            {icon.name}
                        </a>
                    );
                })
            }
        </div>
    );
}


export default OurPages;