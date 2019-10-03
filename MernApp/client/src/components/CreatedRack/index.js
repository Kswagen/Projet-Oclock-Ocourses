import React from 'react';
import { Icon } from 'semantic-ui-react';

const CreatedRack = ({ itemList, rackList, rack }) => {


{/* A factoriser ! via un map? */}
        {/* Bloc de catégorie */}
        return <div className="category">
        <h3>{rack}</h3>
            <ul className="items">
                    { itemList.map( item => {
                        console.log("item general", item)
                        if(item.rack === rack){
                            console.log("item filtré par rack", item);
                            return <li>
                                <ul className="itemDetails">
                                    <li>
                                        <span className="categoryInput name">{item.product}</span>
                                        <span className="categoryInput quantity">{item.quantity}</span>
                                        <span className="categoryInput favorite"><Icon name="star outline" /* Methode onclic pour changer la className et passer l'étoile en pleine si favori */ /> <Icon name="delete" /></span>
                                    </li>
                                </ul>
                            </li>
                        
                        }
                    })

                    }
                    </ul>
    </div>

}

export default CreatedRack;