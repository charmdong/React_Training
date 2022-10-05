import React from "react";

const students = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    },
    {
        id: 3,
        name: "C"
    },
    {
        id: 4,
        name: "D"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;