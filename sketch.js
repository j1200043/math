function setup() {
  // put setup code here
  createCanvas(800, 600);

}

function draw() {
  // put drawing code here
  // マウスが押下した状態かどうか
  if (mouseIsPressed) {
      fill(0); // 塗りの指定
  } else {
      fill(255); // 塗りの指定
  }
//  ellipse(mouseX, mouseY, 80, 80); // 円の描画

background(0);  // 背景色
  fill(255);      // 文字色
  textSize(16);   // 文字サイズ
  text("Processing", 10, 35); // 表示する文字, x座標, y座標, 表示領域の幅, 表示領域の高さ
  
}