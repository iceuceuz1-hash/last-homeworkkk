
let books = [
    { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", price: 50000, isRead: true },
    { id: 2, title: "Sariq devni minib", author: "Xudoyberdi To'xtaboyev", price: 40000, isRead: false }
];


function addBook(title, author, price) {
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const newBook = {
        id: newId,
        title: title,
        author: author,
        price: price,
        isRead: false
    };
    books.push(newBook);
    console.log(`"${title}" kitobi muvaffaqiyatli qo'shildi!`);
}


function najotTalim() {
    if (books.length === 0) {
        console.log("Kutubxonada kitoblar mavjud emas.");
        return;
    }

    console.log("--- Najot Ta'lim Kutubxonasi ---");
    books.forEach(book => {
        const status = book.isRead ? "O'qilgan" : "O'qilmagan";
        console.log(`ID: ${book.id} | Nomi: "${book.title}" | Muallifi: ${book.author} | Narxi: ${book.price} so'm | Holati: ${status}`);
    });
}

function toggleReadStatus(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        book.isRead = !book.isRead;
        console.log(`ID ${id} bo'lgan "${book.title}" kitobining holati o'zgartirildi: ${book.isRead ? "O'qilgan" : "O'qilmagan"}`);
    } else {
        console.log(`ID ${id} bo'lgan kitob topilmadi!`);
    }
}


function deleteBook(id) {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        console.log(`ID ${id} bo'lgan "${deletedBook[0].title}" kitobi ro'yxatdan o'chirildi.`);
    } else {
        console.log(`ID ${id} bo'lgan kitob topilmadi!`);
    }
}


// najjot talim 
// kitoblar royhati uchun 
// domla najot talim dep yozing console xaxaxaxax