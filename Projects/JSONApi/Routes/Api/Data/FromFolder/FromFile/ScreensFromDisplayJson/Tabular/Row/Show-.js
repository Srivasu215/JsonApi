let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show");

router.get('/FromParams/:inFolderName/:inFileName/:inScreenName/:inItemName/:inJsonPk', function (req, res, next) {
  let LocalFolderName = req.params.inFolderName;
  let LocalFileName = req.params.inFileName;
  let LocalItemName = req.params.inItemName;
  let LocalScreenName = req.params.inScreenName;
  let LocalJsonPk = req.params.inJsonPk;

  let LocalJsonConfig = {
    inFolderName: LocalFolderName,
    inJsonFileName: LocalFileName
  };

  let LocalItemConfig = {
    inItemName: LocalItemName,
    inScreenName: LocalScreenName
  };

  let LocalDataPk = req.KeshavSoft.DataPk;

  Repos.FromParams({
    inDataPK: LocalDataPk,
    inJsonConfig: LocalJsonConfig,
    inItemConfig: LocalItemConfig,
    inJsonPk: LocalJsonPk
  }).then(PromiseData => {
    console.log("PromiseData ---------- : ", PromiseData.DataFromServer[1].KData.TableData);
    res.end(JSON.stringify(PromiseData));
  });
});


module.exports = router;