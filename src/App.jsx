import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
    <section className='App'>
        <TwitterFollowCard isFollowing userName="midudev">
            Miguel Ángel Durán 
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} userName="pheralb">
            Paolo Hernandez
        </TwitterFollowCard>
    </section>
    )
}