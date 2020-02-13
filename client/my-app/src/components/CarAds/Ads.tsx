import React from 'react';
import { Link } from 'react-router-dom';


import "./Ads.scss";
import AdCard from './AdCard';

import mercedes1 from '../../public/assets/imgs/mercedes1.jpg';
import mercedes2 from '../../public/assets/imgs/mercedes2.jpg';
import bmw2 from '../../public/assets/imgs/bmw2.jpg';
import audi1 from '../../public/assets/imgs/audi1.jpg';
import { IAd } from '../../models/IAd';

let description: string[] = ['Sporty with an emphasis on comfort, the iconic Mercedes-Benz CLS is a four-door coupe with individual seating for five passengers.',
    'Mercedes-AMG GT S leaves almost everyone behind. The AMG RIDE CONTROL suspension is adjustable in three stages - from comfortable to sporty tight.',
    'The Audi A5 is a series of compact executive coupe cars produced by the German automobile manufacturer Audi since March 2007.',
    'The Audi A5 is a series of compact executive coupe cars produced by the German automobile manufacturer Audi since March 2007.'];

interface IProps {
    ads: IAd[];
}

function Ads(props: IProps) {
    return (
        <div className="ads">
            <div className="ads__title">Available cars</div>
            <div className="ads__container">
                {
                    props.ads.map((ad) => {
                        return <AdCard title={ad.title} description={ad.description} img={ad.img}/>  
                    })
                }
             {/*<AdCard title="Mercedes-Benz CLS AMG (2015)" description={description[0]} img={mercedes1}/>
                <AdCard title="Mercedes-Benz GT (2018)" description={description[1]} img={mercedes2}/>
                <AdCard title="BMW M5 F90 (2017)" description={description[2]} img={bmw2}/>
            <AdCard title="Audi A5 (2019)" description={description[3]} img={audi1}/>*/}
            </div>
        </div>
    );
}

export default Ads;