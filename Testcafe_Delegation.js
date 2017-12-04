/*	Testcafe for starting of the counter..
	v 1.0
	Dated 11/19/2017	
*/

import { Selector } from 'testcafe';

fixture `Delegation`
    .page `../BehaviorDelegation/Landscape.html`

test('Delegation_Landscape', async t => {	
    await t	
	.typeText(Selector('input').withAttribute('class', 'place'), "Thames") 			//Tourist place entry// 
	.typeText(Selector('input').withAttribute('class', 'continent'), "Europe") 			//Continent entry//
    .click(Selector('input').withAttribute('id', 'water'))			
	//Type selection//
	
	.click(Selector('button').withAttribute('type', 'submit'));
	//Submit//
	
	const counter = Selector('label').withAttribute('id', 'destination_Count');
	//Label that gets added upon counter//

	await t.expect(counter).ok();
});