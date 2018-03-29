function nameneingabe(): void {
  var eingabe :string  = prompt("Hey, was ist dein Name ?");
  if (eingabe != null) {
    document.getElementById("antwort").innerHTML =
      "Nice " + eingabe + "Cool das du da bist und hab noch nen schönen Tag! ";
  }
}