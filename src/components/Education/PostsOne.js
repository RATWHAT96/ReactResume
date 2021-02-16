import React, {useState} from 'react';
import './Cards.css';
import { CardData } from './CardData';

 
/* hi */
const PostsOne = () => {

	const [clickOne, setClickOne] = useState(true);
	const [clickTwo, setClickTwo] = useState(false);
	const [clickThree, setClickThree] = useState(false);

	const handleClickOne = () => {setClickOne(true);setClickTwo(false);setClickThree(false);}
	const handleClickTwo = () => {setClickOne(false);setClickTwo(true);setClickThree(false);}
	const handleClickThree = () => {setClickOne(false);setClickTwo(false);setClickThree(true)}
	
	/*if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;*/
	return (
		<>
			<div className="skillsSelector">
					<div onClick={handleClickOne} className={clickOne ? 'skillSelectActive' : 'skillSelect'}>Languages</div>
					<div onClick={handleClickTwo} className={clickTwo ? 'skillSelectActive' : 'skillSelect'}>Technologies</div>
					<div onClick={handleClickThree} className={clickThree ? 'skillSelectActive' : 'skillSelect'}>Software Engineering</div>
			</div>
			<div className='cards'>
					{CardData.map((post) => {
						return (
							<> 
								<li className={(post.type==="one" && clickOne) || (post.type==="two" && clickTwo) || (post.type==="four" && clickThree) ? 'cards__item' : 'no__cards'}>
									<figure className='cards__item__pic-wrap' data-category={post.name}>
										<div className='cards__item__info'>
										<img className='cards__item__img' alt='' src={post.image} />
										</div>
									</figure>
								</li>
							</>
						);
					})}
			</div>
		</>
	);
};
export default PostsOne;
