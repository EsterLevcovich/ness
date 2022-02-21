export class User {

    
       
        id: number = 0;
        name: string = '';

        constructor(init?: Partial<User>) {
            Object.assign(this, init);
        }

}
