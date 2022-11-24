console.log("This is tutorial 32 - solutions")


class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issueBooks = [];
    }

    getBookList(){
        this.bookList.forEach(element =>{
            console.log(element);
        });

    }

    issueBook(bookName, user){

        console.log(this.issueBooks[bookName]);
        if(this.issueBooks[bookName] != undefined){

            this.issuedBooks[bookName]= user;
        }
        else {
            console.log("This book is alreasy issued")
        }
    }

    returnBook(bookName){

        delete this.issuedBooks[bookName]

    }
}