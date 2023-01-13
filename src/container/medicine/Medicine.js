import React from 'react';
import List from '../../componant/list/List';

const data = [
    {
        Name: "Acenocoumaro",
        price: 270,
        Qua: 200,
        Img: "assets/img/medicine/first_medicine.jpg"
    },
    {
        Name: "Benzylpenicillin",
        price: 500,
        qua: 34,
        Img: "assets/img/medicine/secound_medicine.jpg"
        // Img: "assets/img/medicine/secound_medicine.jpg"
    },
    {
        Name: "Centchroman",
        Price: 220,
        Qua: 60,
        Img: "assets/img/medicine/third_medicine.jpg"
        // Img: "assets/img/medicine/third_medicine.jpg"
    },
    {
        Name: "Doxapram",
        price: 550,
        Qua: 15,
        Img: "assets/img/medicine/fourth_medicine.jpg"
        // Img: "assets/img/medicine/fourth_medicine.jpg"
    },
    {
        Name: "Furazolidone",
        price: 123,
        Qua: 94,
        Img: "assets/img/medicine/six_medicine.jpg"
    }
]
function Medicine(props) {
    return (
        // <>
        //     {/* <section id="departments" className="departments">
        //         <div className="container"> */}
        //             <div className="section-title">
        //                 <h2>Medision</h2>
        //             </div>
        //             <List listdata={data} />

        //         {/* </div>
        //     </section> */}
        // </>

        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                    <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                </div>
                {/* <img src="assets/img/medicine/first_medicine.jpg" className="img-doctor" alt='img_1' />  */}

                <List listdata={data} />
            </div>
        </section>
    );
}

export default Medicine;
{/* <img src="assets/img/medicine/first_medicine.jpg" className="img-doctor" alt='img_1' /> */ }
