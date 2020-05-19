/*  Created by Araam Zaremehrjardi.
 *  
 *  --- BEGINNING OF NOTES [0] ---
 *  FORMAT OF CLASS NAME IS AS FOLLOWS...
 *  __(class-notator)_(name of class)
 *  "__" signifies class is user-made.
 *  "(class-notator)" signifies if the class is ds (data structure), h (helper), t (thing), m (miscellaneous).
 *  "_(name of class)" signifies the name of the class.
 *  --- END OF NOTES [0] ---
 *  
 */

export class __m_pair<itemType_one, itemType_two> {

    public m_itemOne: itemType_one;
    public m_itemTwo: itemType_two;

    constructor(itemOne: itemType_one, itemTwo: itemType_two) {

        this.m_itemOne = itemOne;
        this.m_itemTwo = itemTwo;

    }

}
