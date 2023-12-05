import Image from 'next/image'
import styles from './page.module.scss'

async function populateDataAndGetHostels() {
  const res = await fetch('http://localhost:3000/api')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await populateDataAndGetHostels();

  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeader}>Hostels</h1>

        <ul className={styles.hostels}>
          { data?.body?.map(hostel => {
            console.log(hostel);
            const { name, address, rooms } = hostel;
            return (
                <li key={name}>
                  <h2>{name}</h2>
                  <p>{address}</p>
                  <ul>
                    { rooms?.map(room => {
                      const { number, students } = room;
                      return (
                          <li key={number}>
                            <h3>{number}</h3>
                            <ul>
                              { students?.map(student => {
                                const { name, rollNumber } = student;
                                return (
                                    <li key={rollNumber}>
                                      <h4>{name}</h4>
                                      <p>{rollNumber}</p>
                                    </li>
                                );
                              })}
                            </ul>
                          </li>
                      );
                    })}
                  </ul>
                </li>
            );
          })}
        </ul>
    </main>
  )
}
