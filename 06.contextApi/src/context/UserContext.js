import React, {createContext} from 'react';

/*NOTE:
React context-API allow you to easily access data at diffrent level of the component tree without passing prop to every level
*/

const UserContext = createContext();

export default UserContext;             



/*
Example: 
(1) All the nested components have the Access of UserContext.
(2) UserContext Come with a provider which provide the access of a global State to each of componenets 

<UserContext>
    <login />
    <Card>
        <Data />
    </Card>
</UserContext>

*/
