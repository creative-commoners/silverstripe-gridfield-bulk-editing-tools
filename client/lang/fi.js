if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary(fi, {
    "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO": "Lataa %s tiedosto(ja). %s Valmis. %s virhe(itä).",
    "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT": "Sinun täytyy valita vähintään yksi tallenne. ",
    "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Tiedostosi häviävät pysyvästi. Haluatko jatkaa?"
});
}