if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('sk', {
  "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO":               "Nahrávam %s súbor(y). %s hotovo. %s chyba(y).",
  "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT":    "Musíte vybrať aspoň jeden záznam.",
  "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Dáta sa permanentne stratia. Chcete pokračovať?"
});
}