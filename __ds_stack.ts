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
 *  --- BEGINNING OF NOTES [1] ---
 *  THE DATA STRUCTURE IS VISUALIZED AS FOLLOWS...
 *  [0, 1, 2...X]
 *             ^
 *  Items are added and removed from this location.
 *  --- END OF NOTES [1] ---
 *  
 */

import { __m_pair } from "./__m_pair";

class __ds_stack<itemType> {

    private m_stack: Array<itemType> = new Array<itemType>();

    public isEmpty(): boolean {

        if (this.m_stack.length == 0) {

            return true;

        }

        return false;

    }

    public push(item: itemType): __m_pair<itemType, boolean> {

        if (this.m_stack.length < 1000) {

            this.m_stack.push(item);
            return new __m_pair<itemType, boolean>(item, true);

        }

        return new __m_pair<itemType, boolean>(item, false);

    }

    public pop(): __m_pair<itemType, boolean> {

        let removed: itemType = this.m_stack[this.m_stack.length - 1];
        
        this.m_stack.splice(this.m_stack.length - 1);
        return new __m_pair<itemType, boolean>(removed, true);

    }

    public peek(): itemType {

        return this.m_stack[this.m_stack.length - 1];

    }
            
}