// This is a JavaScript file

var DB_apikey = "dd343394ecb2ba600a887af4862990d7bd7eeacce134ec606b3f679fc04fd72f";
var DB_clientkey = "55afb39d6e993ef53df4ba1084137637640d20d9c5374b3b39a44b4014403e86";
var ncmb = new NCMB(DB_apikey, DB_clientkey);

var DB_Goods = ncmb.DataStore("Users");
var DB_Goods = ncmb.DataStore("TotalOpus");
var DB_Goods = ncmb.DataStore("ThisSeason");

function makeDataStore(DSName){
  var DBInfo = ncmb.DataStore(String(DSName));
}



// 追加
function addRecord(table) {
  var data = Array.from(arguments).slice(1);
  return new Promise(function (resolve, reject) {
    NCMB_AddRecord(function (r) { resolve(r); }, function (e) { reject(e); },
      table, data);
  });
}
function NCMB_AddRecord(success, failed, table, args) {
  for (var i = 0; i < args.length; ++i)
    if (!args[i] && args[i] != 0) {
      failed("Some arguments are null. index: " + i.toString());
      return;
    }
  switch (table) {
    case ("Goods"):
      if (args.length == DB_GoodsAttributes.length) {
        var goods = new DB_Goods();
        for (var i = 0; i < DB_GoodsAttributes.length; ++i)
          goods.set(DB_GoodsAttributes[i], args[i]);
        goods.save()
          .then(function (obj) {
            success(obj);
          })
          .catch(function (err) {
            failed(err);
          });
      }
      break;
    case ("OrderLog"):
      if (args.length == DB_OrderLogAttributes.length) {
        var orderLog = new DB_OrderLog();
        for (var i = 0; i < DB_OrderLogAttributes.length; ++i)
          orderLog.set(DB_OrderLogAttributes[i], args[i]);
        orderLog.save()
          .then(function (obj) {
            success(obj);
          })
          .catch(function (err) {
            failed(err);
          });
      }
      break;
    case ("Galley"):
      if (args.length == DB_GalleyAttributes.length) {
        var galley = new DB_Galley();
        for (var i = 0; i < DB_GalleyAttributes.length; ++i)
          galley.set(DB_GalleyAttributes[i], args[i]);
        // 担当を追加でセット
        galley.save()
          .then(function (obj) {
            success(obj);
          })
          .catch(function (err) {
            failed(err);
          });
      }
      break;
    default:
      failed("Could not found table: " + table);
      break;
  }
}