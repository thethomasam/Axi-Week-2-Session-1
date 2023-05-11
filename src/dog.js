import React, { useState } from 'react'

export default function Dog() {
    const [isDancing, setDancing] = useState(false);
    const handleMouseDown = () => {
        console.log('I Hit the mouse down')
        setDancing(true)
        console.log(isDancing)
    }
    const handleMouseUP = () => {
        console.log('I Hit the mouse down')
        setDancing(false)
        console.log(isDancing)
    }
    return (
        < div >
            {console.log(isDancing)}

            Dog Dance
            <img src={isDancing ? "https://www.shutterstock.com/image-vector/funny-cute-dancing-doll-wearing-260nw-760390453.jpg" : "https://www.shutterstock.com/image-vector/funny-cute-dancing-dog-smiling-260nw-647478388.jpg"} alt="Dance Dog" />
            {/* <img src="https://www.shutterstock.com/image-vector/funny-cute-dancing-dog-smiling-260nw-647478388.jpg" alt="Dog" /> */}
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUP}
            >Dance</button>
        </div >
    )
}
