import React from 'react'

const New = () => {
    let count = 0;
    const submitButton = () => {
        console.log("Submitted successfully");
        count++;
        return (
            <div className='text-white bg-yellow h-screen'>you have clicked submit button = {count} times</div>
        )
    }
  return (
    <div>
        <form action="submit">
            <input type="text" />
            <button onClick={submitButton}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default New