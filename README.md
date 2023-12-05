## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

That project implements a simple CRUD with NextJS and MongoDB.
DB Schema looks like that:
```js
{
  "hostels": [
    {
      "_id": ObjectId("hostel1"),
      "name": "Hostel A",
      "address": "123 Main Street",
      "rooms": [
        {
          "_id": ObjectId("room1"),
          "number": 101,
          "capacity": 4,
          "students": [
            {
              "_id": ObjectId("student1"),
              "name": "John Doe",
              "rollNumber": "A101",
              "contact": "123-456-7890",
              "email": "john@example.com",
              "birthdate": ISODate("1995-01-15"),
              "checkInDate": ISODate("2023-01-01"),
              "checkOutDate": null  // Will be null until the student checks out
            },
            {
              "_id": ObjectId("student2"),
              "name": "Jane Smith",
              "rollNumber": "A102",
              "contact": "987-654-3210",
              "email": "jane@example.com",
              "birthdate": ISODate("1996-03-20"),
              "checkInDate": ISODate("2023-01-15"),
              "checkOutDate": null
            }
          ]
        },
        {
          "_id": ObjectId("room2"),
          "number": 102,
          "capacity": 3,
          "students": [
            {
              "_id": ObjectId("student3"),
              "name": "Bob Johnson",
              "rollNumber": "A103",
              "contact": "555-555-5555",
              "email": "bob@example.com",
              "birthdate": ISODate("1994-08-10"),
              "checkInDate": ISODate("2023-02-01"),
              "checkOutDate": null
            }
          ]
        }
      ],
      "facilities": ["Wi-Fi", "Laundry", "Common Room"]
    },
    {
      "_id": ObjectId("hostel2"),
      "name": "Hostel B",
      "address": "456 Oak Street",
      "rooms": [...],  // Similar structure as above
      "facilities": ["Wi-Fi", "Gym", "Cafeteria"]
    }
  ]
}
```
Here is the screenshots of the Atlas usage:
![Screenshot 2023-12-05 at 16.59.29.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F41%2Flz5rhc8j5nnft34l9wcnn6040000gp%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_0w9YBg%2FScreenshot%202023-12-05%20at%2016.59.29.png)
![Screenshot 2023-12-05 at 17.00.19.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F41%2Flz5rhc8j5nnft34l9wcnn6040000gp%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_h6sWli%2FScreenshot%202023-12-05%20at%2017.00.19.png)![Screenshot 2023-12-05 at 17.00.29.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F41%2Flz5rhc8j5nnft34l9wcnn6040000gp%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_LAarO5%2FScreenshot%202023-12-05%20at%2017.00.29.png)
![Screenshot 2023-12-05 at 17.00.37.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F41%2Flz5rhc8j5nnft34l9wcnn6040000gp%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_DVHVbG%2FScreenshot%202023-12-05%20at%2017.00.37.png)
