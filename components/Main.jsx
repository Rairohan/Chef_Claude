import '../src/index.css'
export default function Main(){
    function handleSubmit(event){
        event.preventDefault()
        console.log("submitted")
    }
    return(
    <main>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder=' e.g oregano'
            aria-label='Add ingredient'
            name='ingredient'
            /> 
            <button>+ Add ingredients</button>
        </form>
    </main>
    )
} 