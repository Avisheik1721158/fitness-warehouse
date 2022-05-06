import { Carousel } from 'react-carousel-minimal';


const Banner = () => {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            caption: `<div>
            Best online gym equipment store 
                
                  
                </div>`
        },
        {
            image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

        },
        {
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",

        },
        {
            image: "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

        },
        {
            image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",

        },
        {
            image: "https://media.product.which.co.uk/prod/images/900_450/gm-ae3502f4-0d2e-4627-b359-769923d0f5d9-main-opti.jpg",

        },
        {
            image: "https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?t=st=1651757163~exp=1651757763~hmac=d2d51652258e8ad31190757593c01a0303a1e0f0ac21adfe15d9622c18abd1f6&w=740",

        },
        {
            image: "https://img.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11801.jpg?t=st=1651757258~exp=1651757858~hmac=9695c4c4e9f42f0f318f3f2b8c883cb121ef27b489243db05370490374bc7ba7&w=740",

        },
        {
            image: "https://img.freepik.com/free-photo/attractive-blond-woman-has-boxing-training-with-punching-bag-kick-boxing-studio_613910-12616.jpg?t=st=1651757334~exp=1651757934~hmac=a27d510da0d02fd4167f9fcfa174ad6c0a57bb3bc2368c11b47b2cb9a5e8ed18&w=740",
        }

    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <h2 className='text-5xl text-slate-100 md:font-medium font-normal'>The Largest Fitness Warehouse </h2>
                <p className='mt-2 italic text-4xl text-rose-600'>Gym equipment that never fails.</p>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>

        </div>
    );
}

export default Banner;
