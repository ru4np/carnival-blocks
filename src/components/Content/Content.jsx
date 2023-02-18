import { TitleCards, GridCards } from './style'
import { BlockCard } from '../BlockCard/BlockCard'
export function Content() {
	return (
		<>
			<TitleCards>
				<h5>Blocos recomendados</h5>
			</TitleCards>
			<GridCards>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
				<BlockCard/>
			</GridCards>
		</>
	)
}