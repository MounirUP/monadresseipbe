function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Quelle est mon adresse IP')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
