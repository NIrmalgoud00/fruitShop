import { Users, ShieldCheck, Award, Wheat } from 'lucide-react';

const Features = () => {
    const features = [
        {
            iconName: <Users size={48} strokeWidth={1.75} />,
            name: "satisfied customers",
            numbers: "1M+"
        },
        {
            iconName: <ShieldCheck size={48} strokeWidth={1.75} />,
            name: "quality of service",
            numbers: "99%"
        },
        {
            iconName: <Award size={48} strokeWidth={1.75} />,
            name: "quality certificates",
            numbers: "10+"
        },
        {
            iconName: <Wheat size={48} strokeWidth={1.75} className='primary' />,
            name: "Available Products",
            numbers: "1000+"
        }
    ]
    return (
        <div className="row g-4 justify-content-center">
            {
                features.map((feature, index) => {
                    return (
                        <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
                            <div className="counter bg-white rounded p-5">
                                {feature.iconName}
                                <h4 className='mt-3'>{feature.name}</h4>
                                <h1>{feature.numbers}</h1>
                            </div>
                        </div>)
                })
            }

        </div>
    );
}

export default Features;