'use client';
import styles from "@/app/page.module.scss";
const AddComponent = () => {
    const addHostel = async () => {
        await fetch('http://localhost:3000/api', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Hostel C',
                address: 'Address 1',
                /* rooms: [ObjectId('656f0fd758051255d853d2d3'), ObjectId('656f0fd758051255d853d2d3')] */
            }),
        })
    }
    return (
     <div>
         <button className={styles.button} onClick={addHostel}>Add Hostel</button>
     </div>
    )
}

export default AddComponent;
