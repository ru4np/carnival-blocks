import { GridCard } from './style'
import { GoLocation } from 'react-icons/go'

export function BlockCard() {
    return(
        <GridCard>
            <img src="https://cdn.discordapp.com/attachments/966024053032902666/1076492179096227860/unsplash_b2jkMC95a_8.png"/>
            <h6>Manda Node</h6>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <small><GoLocation color='#E45858' size={20} /> São José dos Campos - SP</small>
        </GridCard>
    )
}