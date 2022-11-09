images = ["https://www.esportelandia.com.br/wp-content/uploads/2020/02/quem-%C3%A9-neymar.jpg", "https://veja.abril.com.br/wp-content/uploads/2019/09/063_1172846416.jpg.jpg", "https://th.bing.com/th/id/OIP.MWcTBZJXSc6EJgts-zeSDQHaHa?pid=ImgDet&rs=1", "https://www.gp1.com.br/media/images/2018/06/22/neymar-em-jogo-contra-a-costa-rica-na-copa-2018.jpg"];
var i = 0;
function proximoslide() {
    if (i == 9) { i = 0; } document.getElementById("album").src = images[i];
    i++;
}
function changeImageOver() { document.getElementById("img_desenho").src = "ney.jpg"; } 
function changeImageLeave() { document.getElementById("img_desenho").src = "neyy.jpg"; }