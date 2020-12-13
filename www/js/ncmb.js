var DB_apikey = "79d4b0f9f04da7dacf2d8e7949f1576842d592562b59394389b8238f5b7ca414";
var DB_clientkey = "c4c7e9092692396ed52aa1fd807a9724603f199f86755377ecde9f54a04e685e";
var ncmb = new NCMB(DB_apikey, DB_clientkey);

var user = new ncmb.User();
var DB_Users = ncmb.DataStore("Users");
var DB_Total = ncmb.DataStore("TotalOpus");
var DB_Season = ncmb.DataStore("ThisSeason");

// ユーザー登録
function makeAccount(userInfo){
  return new Promise(function(resolve,reject) {
    NCMB_makeAccount(function(r) { resolve(r); },function(e) { reject(e); }, userInfo);
  });
}
function NCMB_makeAccount(success, failed, userInfo){

  if(userInfo) {
    ncmb.User.requestSignUpEmail(userInfo.mail)
      .then(function(data){
        // 送信後処理
      })
      .catch(function(err){
        // エラー処理
      });

    // ユーザー名・パスワードを設定
    // user.set("userName", userInfo.name)   /* ユーザー名 */
    //   .set("password", userInfo.pass)     /* パスワード */
    //   .set("mailAddress", userInfo.mail); /* 任意フィールドも追加可能 */

    // // ユーザーの新規登録処理
    // user.signUpByAccount()
    //   .then(function(){
    //     // 登録後処理
    //     success(userInfo);
    //   })
    //   .catch(function(err){
    //     // エラー処理
    //     failed(err);
    //   });
  }else{
    console.error('NCMB_makeAccount():There is no user information.')
  }
}


// ログイン
function login(userInfo){
  return new Promise(function(resolve,reject) {
    NCMB_login(function(r) { resolve(r); },function(e) { reject(e); }, userInfo);
  });
}
function NCMB_login(success, failed, userInfo){

  if(userInfo) {
    // 2. userインスタンスでログイン
    ncmb.User.loginWithMailAddress(userInfo.mail, userInfo.pass)
    .then(function(data){
      // ログイン後処理
      success(data);
    })
    .catch(function(err){
      // エラー処理
      failed(err);
    });
  }else{
    console.error('NCMB_login():There is no user information.');
    failed('NCMB_login():There is no user information.');
  }
}



// function makeDataStore(DSName){
//   var DBInfo = ncmb.DataStore(String(DSName));
// }

// /* 登録時のデーターベース */
// const DB_UsersAttributes = ["UserName", "Password", "Mail"];
// const DB_OrderLogAttributes = ["orderLogId", "goodsObjectId", "orderDate", "number", "subtotal", "seatNum"];
// const DB_GalleyAttributes = ["orderLogId", "goodsObjectId", "team", "state", "number", "seatNum", "inCharge"];

// /* 取得時の返り値の辞書設定 */
// const DB_UsersElement = ["objectId", "UserName", "Password", "Mail"];
// // const DB_UsersElement = ["objectId", "UserName", "Password", "Mail"];


// // 追加
// function addRecord(table) {
//   var data = Array.from(arguments).slice(1);
//   return new Promise(function (resolve, reject) {
//     NCMB_AddRecord(function (r) { resolve(r); }, function (e) { reject(e); },
//       table, data);
//   });
// }
// function NCMB_AddRecord(success, failed, table, args) {
//   for (var i = 0; i < args.length; ++i)
//     if (!args[i] && args[i] != 0) {
//       // failed("Some arguments are null. index: " + i.toString());
//       return;
//     }
//   switch (table) {
//     case ("Users"):
//       if (args.length == DB_UsersAttributes.length) {
//         var users = new DB_Users();
//         for (var i = 0; i < DB_UsersAttributes.length; ++i)
//           users.set(DB_UsersAttributes[i], args[i]);
//         users.save()
//           .then(function (obj) {
//             success(obj);
//           })
//           .catch(function (err) {
//             failed(err);
//           });
//       }
//       break;
//     case ("Gohan"):
//       break;
//     default:
//       failed("Could not found table: " + table);
//       break;
//   }
// }




// // 取得
// function pullRecords(table, pullAllGoods = false) {
//   return new Promise(function (resolve, reject) {
//     NCMB_PullRecords(function (r) { resolve(r); }, function (e) { reject(e); }, table, pullAllGoods);
//   });
// }
// var NCMB_PullRecords = function (success, failed, table, pullAllGoods) {
//   var arr = [];
//   switch (table) {
//     case ("Users"):
//       DB_Users.fetchAll()
//         .then(function (objs) {
//           objs.forEach(function (obj) {
//             var tmp = {};
//             DB_UsersElement.forEach(function (value) {
//               tmp[value] = obj[value];
//             });
//             arr.push(tmp);
//           });
//           success(arr);
//         })
//         .catch(function (err) {
//           failed(err);
//         });
//       break;
//     default:
//       failed("Could not found table: " + table);
//       break;
//   }
// }