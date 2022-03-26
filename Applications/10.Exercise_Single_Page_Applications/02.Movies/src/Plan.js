// 1. Create paceholer mododules for every view // Създаваме фалове-модули за всеки изглед
// 2. Configure and test navigation // Слагаме eventLitener-и на бутоните и правим асоциация межу бутон и модул, което
                                    // ще ни позволи предварително да тестваме навигацията
// 3. Implement modules
//   3.1 create async functions for requests
//   3.2 implement DOM  logic       // т.е. това, което трябва да покажем на екрана

// Order of views // Ред за реализиране на отделните изгледи / модули
// - catalog (home view)
// - login/register
// - create
//      -1. validation 
//      -2. requedt : правим заявките, с които ще запишем редактираните данни 
// - details
// - likes
// - edit : Това е най-сложното защото се прави в няколко стъпки :
//      -1. load data : зареждане на данните за редакция
//      -2. populate form : попълване на формата за редактиране
//      -3. validation 
//      -4. requedt : правим заявките, с които ще запишем редактираните данни 
// - delete
//      -1. requedt : правим заявките, с които ще запишем редактираните данни 

