const PRODUCTS = [
  { id: 1, name: "Khoai tây chiên bơ tỏi", category: "Ăn vặt", sub: "khoai chiên", price: 40000, image: "images/khoaitay.jpg" },
  { id: 2, name: "Mì trộn xúc xích", category: "Ăn đêm", sub: "Mì cay", price: 35000, image: "images/mytron.jpg" },
  { id: 3, name: "Chân gà sả ớt", category: "Ăn vặt", sub: "khoai chiên", price: 30000, image: "images/changanuong.jpg" },
  { id: 4, name: "Chân gà nướng", category: "Đồ nướng", sub: "Thịt xiên", price: 25000, image: "images/changanuong.jpg" },
  { id: 5, name: "Trứng gà nướng tiêu", category: "Đồ nướng", sub: "Hải sản nướng", price: 40000, image: "images/trungganuongtieu.jpg" },
  { id: 6, name: "Cánh gà nướng", category: "Đồ nướng", sub: "Gà rán", price: 32000, image: "images/canhganuong.jpg" },
  { id: 7, name: "Xúc xích", category: "Ăn vặt", sub: "khoai chiên", price: 25000, image: "images/xucxich.jpg" },
  { id: 8, name: "Lạp xưởng nướng đá", category: "Đồ nướng", sub: "Thịt xiên", price: 45000, image: "images/lapxuongnuongda.jpg" },
  { id: 9, name: "Trà sữa truyền thống", category: "Đồ uống", sub: "Trà sữa", price: 28000, image: "images/trasuatruyenthong.jpg" },
  { id: 10, name: "Nước ép cam", category: "Đồ uống", sub: "Nước ép", price: 34000, image: "images/nuocepcam.jpg" },
  { id: 11, name: "Nước ép dâu", category: "Đồ uống", sub: "Nước ép", price: 22000, image: "images/nuocepdau.jpg" },
  { id: 12, name: "Trà sữa kem trứng", category: "Đồ uống", sub: "Trà sữa", price: 18000, image: "images/kemtrung.jpg" },
  { id: 13, name: "Mỳ cay hải sản", category: "Ăn đêm", sub: "Mì cay", price: 42000, image: "images/mycayhaisan.jpg" },
  { id: 14, name: "Mỳ cay bò", category: "Ăn đêm", sub: "Mỳ cay", price: 36000, image: "images/mycaybo.jpg" },
  { id: 15, name: "Mỳ tương đen", category: "Ăn đêm", sub: "Ăn đêm", price: 19000, image: "images/mytuongden.jpg" },
  { id: 16, name: "Mỳ bò đài loan", category: "Ăn đêm", sub: "Ăn đêm", price: 23000, image: "images/mybodailoan.jpg" },
  { id: 17, name: "Kẹo Omai", category: "Ăn vặt", sub: "Bim bim", price: 13000, image: "images/omai.jpg" },
  { id: 18, name: "Snack", category: "Ăn vặt", sub: "khoai chiên", price: 10000, image: "images/snack.jpg" },
  { id: 19, name: "Bim Bim Lays", category: "Ăn vặt", sub: "Bim bim", price: 10000, image: "images/lays.jpg" },
  { id: 20, name: "Kẹo dẻo", category: "Ăn vặt", sub: "Bim bim", price: 15000, image: "images/keodeo.jpg" },
  { id: 21, name: "Chocolate", category: "Ăn vặt", sub: "Bim bim", price: 25000, image: "images/chocolate.jpg" },
  { id: 22, name: "Bắp rang Lắc Phomai(phiên bản mới)", category: "Ăn vặt", sub: "Gà rán", price: 42000, image: "images/baprang.jpg" },
  { id: 23, name: "Bánh tráng Cay (giá tốt)", category: "Ăn vặt", sub: "Bim bim", price: 24000, image: "images/banhtrangcay.jpg" },
  { id: 24, name: "Kẹo Dẻo Bản Đặc Biệt(phiên bản mới)", category: "Ăn vặt", sub: "Bim bim", price: 24000, image: "images/keodeodacbiet.jpg" },
  { id: 25, name: "Rong biển Sấy Giòn (size M)", category: "Ăn vặt", sub: "Bim bim", price: 18000, image: "images/rongbiensaygion.jpg" },
  { id: 26, name: "Snack Tôm(size M)", category: "Ăn vặt", sub: "Bim bim", price: 22000, image: "images/snacktom.jpg" },
  { id: 27, name: "Rong biển Phomai(tặng kèm sốt)", category: "Ăn vặt", sub: "Bim bim", price: 14000, image: "images/rongbienphomai.jpg" },
  { id: 28, name: "Hạt Dẻ Cười (tặng kèm sốt)", category: "Ăn vặt", sub: "Bim bim", price: 33000, image: "images/hatdecuoi.jpg" },
  { id: 29, name: "Phở Hà Nội(size L)", category: "Ăn đêm", sub: "Bún phở", price: 51000, image: "images/phohanoi.jpg" },
  { id: 30, name: "Lẩu ly (size L)", category: "Ăn đêm", sub: "Lẩu", price: 45000, image: "images/lauly.jpg" },
  { id: 31, name: "Cháo Thịt Băm(ít đường)", category: "Ăn đêm", sub: "Lẩu", price: 33000, image: "images/chaoga.jpg" },
  { id: 32, name: "Phở Bò Tái (thêm topping)", category: "Ăn đêm", sub: "Bún phở", price: 55000, image: "images/phobotai.jpg" },
  { id: 33, name: "Bún Thái Bò (size M)", category: "Ăn đêm", sub: "Bún phở", price: 43000, image: "images/bunthaibo.jpg" },
  { id: 34, name: "Xúc Xích Sốt Cay (phiên bản mới)", category: "Ăn đêm", sub: "khoai chiên", price: 32000, image: "images/xucxichsotcay.jpg" },
  { id: 35, name: "Lẩu ly Đặc Biệt (tặng kèm sốt)", category: "Ăn đêm", sub: "Lẩu", price: 46000, image: "images/laulydacbiet.jpg" },
  { id: 36, name: "Xúc xích Viên Hồ Lô ( có sốt) ", category: "Ăn đêm", sub: "khoai chiên", price: 24000, image: "images/xucxichvienholo.jpg" },
  { id: 37, name: "Mì Cay Gà (tặng kèm sốt)", category: "Ăn đêm", sub: "Mỳ cay", price: 26000, image: "images/mycayga.jpg" },
  { id: 38, name: "Bánh bao (phiên bản mới)", category: "Ăn đêm", sub: "Bún phở", price: 22000, image: "images/banhbao.jpg" },
  { id: 39, name: "Thịt Lợn Nướng (giá tốt)", category: "Đồ nướng", sub: "Hải sản nướng", price: 45000, image: "images/thitlonnuong.jpg" },
  { id: 40, name: "Khoai Mật Nướng", category: "Đồ nướng", sub: "BBQ", price: 75000, image: "images/khoaimatnuong.jpg" },
  { id: 41, name: "Set Đồ nướng mini", category: "Đồ nướng", sub: "Thịt xiên", price: 75000, image: "images/setnuongmini.jpg" },
  { id: 42, name: "Bánh Tráng nướng phomai(tặng kèm sốt)", category: "Đồ nướng", sub: "Hải sản nướng", price: 60000, image: "images/banhtrangnuongphomai.jpg" },
  { id: 43, name: "Bò Bía Mặn", category: "Đồ nướng", sub: "BBQ", price: 33000, image: "images/bobiaman.jpg" },
  { id: 44, name: "Gà Nướng Xiên Que", category: "Đồ nướng", sub: "Thịt xiên", price: 54000, image: "images/ganuongxienque.jpg" },
  { id: 45, name: "Cút Lộn Xào Me", category: "Đồ nướng", sub: "Hải sản nướng", price: 30000, image: "images/cutlonxaome.jpg" },
  { id: 46, name: "Rau Củ Nướng Xiên Que", category: "Đồ nướng", sub: "BBQ", price: 52000, image: "images/raucuxienque.jpg" },
  { id: 47, name: "Thịt Bò Ớt Chuông Xiên Que Nướng", category: "Đồ nướng", sub: "Thịt xiên", price: 79000, image: "images/thitboxienotchuong.jpg" },
  { id: 48, name: "Bánh Mì Nướng Bơ Cay", category: "Đồ nướng", sub: "Hải sản nướng", price: 44000, image: "images/banhminuongbocay.jpg" },
  { id: 49, name: "Sườn Nướng xá xíu", category: "Đồ nướng", sub: "BBQ", price: 53000, image: "images/suonnuongxaxiu.jpg" },
  { id: 50, name: "Trà sữa Thạch Thái Xanh(thêm topping)", category: "Đồ uống", sub: "Trà sữa", price: 25000, image: "images/trasuathachthaixanh.jpg" },
  { id: 51, name: "Nước ép Dứa (size M)", category: "Đồ uống", sub: "Nước ép", price: 17000, image: "images/nuocepdua.jpg" },
  { id: 52, name: "Trà Sữa Bạc Hà (ít đường)", category: "Đồ uống", sub: "Trà sữa", price: 15000, image: "images/trasuabacha.jpg", },
  { id: 53, name: "Sinh Tố Mãng Cầu (phiên bản mới)", category: "Đồ uống", sub: "Sinh tố", price: 29000, image: "images/sinhtomangcau.jpg" },
  { id: 54, name: "Nước ép Dưa Hấu (size L)", category: "Đồ uống", sub: "Nước ép", price: 23000, image: "images/nuocepduahau.jpg" },
  { id: 55, name: "Trà Sữa Khoai Môn (size L)", category: "Đồ uống", sub: "Trà sữa", price: 43000, image: "images/trasuakhoaimon.jpg" },
  { id: 56, name: "Sinh Tố Lúa Mạch (size M)", category: "Đồ uống", sub: "Sinh tố", price: 25000, image: "images/sinhtoluamach.jpg" },
  { id: 57, name: "Nước ép Táo (tặng kèm sốt)", category: "Đồ uống", sub: "Nước ép", price: 39000, image: "images/nuoceptao.jpg" },
  { id: 58, name: "Trà Sữa Việt Quất (Thêm Topping)", category: "Đồ uống", sub: "Trà sữa", price: 24000, image: "images/trasuavietquat.jpg" },
  { id: 59, name: "Sinh Tố Xoài (phiên bản mới)", category: "Đồ uống", sub: "Sinh tố", price: 36000, image: "images/sinhtoxoai.jpg" },
  { id: 60, name: "Nước ép cà Rốt (size M)", category: "Đồ uống", sub: "Nước ép", price: 50000, image: "images/nuocepcarot.jpg" },
  { id: 61, name: "Bim Bim swing (ít đường)", category: "Ăn vặt", sub: "Bim bim", price: 35000, image: "images/bimbimswing.jpg" },
  { id: 62, name: "Mỳ Cay Sườn Sụn (size L)", category: "Ăn đêm", sub: "Mì cay", price: 57000, image: "images/mycaysuonsun.jpg" },
  { id: 63, name: "Thịt Xiên Nướng Sate (đóng gói)", category: "Đồ nướng", sub: "Thịt xiên", price: 61000, image: "images/thitxiennuongsate.jpg" },
  { id: 64, name: "Trà Sữa Matcha (Thêm topping)", category: "Đồ uống", sub: "Trà sữa", price: 42000, image: "images/trasuamatcha.jpg" },
  { id: 65, name: "Gà Chiên xí Muội (size L)", category: "Ăn vặt", sub: "Gà rán", price: 34000, image: "images/gachienximuoi.jpg" },
  { id: 66, name: "Lẩu Thái Chua Cay (phiên bản mới)", category: "Ăn đêm", sub: "Lẩu", price: 45000, image: "images/lauthaichuacay.jpg" },
  { id: 67, name: "Hàu Nướng phomai (size M)", category: "Đồ nướng", sub: "Hải sản nướng", price: 70000, image: "images/haunuongphomai.jpg" },
  { id: 68, name: "Sinh tố Bơ (size L)", category: "Đồ uống", sub: "Sinh tố", price: 18000, image: "images/sinhtobo.jpg" },
  { id: 69, name: "Gà Rán Sốt Phomai (phiên bản mới)", category: "Ăn vặt", sub: "Gà rán", price: 34000, image: "images/garanphomai.jpg" },
  { id: 70, name: "Phở Cung Đình (giá tốt)", category: "Ăn đêm", sub: "Bún phở", price: 53000, image: "images/phocungdinh.jpg" },
  { id: 71, name: "Set BBQ nhỏ cho Gia Đình (size M)", category: "Đồ nướng", sub: "BBQ", price: 31000, image: "images/bbqnho.jpg" },
  { id: 72, name: "Nước ép kiwi (phiên bản mới)", category: "Đồ uống", sub: "Nước ép", price: 45000, image: "images/nuocepkiwi.jpg" },
  { id: 73, name: "Bim bim gà nướng (đóng gói)", category: "Ăn vặt", sub: "Bim bim", price: 36000, image: "images/bimbimganuong.jpg" },
  { id: 74, name: "Mỳ Cay Mực Ống (phiên bản mới)", category: "Ăn đêm", sub: "Mì cay", price: 29000, image: "images/mycaymucong.jpg" },
  { id: 75, name: "Thịt Xiên Rau Củ (ít đường)", category: "Đồ nướng", sub: "Thịt xiên", price: 63000, image: "images/thitxienraucu.jpg" },
  { id: 76, name: "Trà sữa Socola (thêm topping)", category: "Đồ uống", sub: "Trà sữa", price: 25000, image: "images/trasuasocola.jpg" },
  { id: 77, name: "Xúc xích phomai chảy (đóng gói)", category: "Ăn vặt", sub: "khoai chiên", price: 33000, image: "images/xucxichphomaichay.jpg" },
  { id: 78, name: "Lẩu Tứ Xuyên (size L)", category: "Ăn đêm", sub: "Lẩu", price: 410000, image: "images/lautuxuyen.jpg" },
  { id: 79, name: "Tôm nướng (phiên bản mới)", category: "Đồ nướng", sub: "Hải sản nướng", price: 35000, image: "images/tomnuong.jpg" },
  { id: 80, name: "Sinh tố chuối + sữa (giá tốt)", category: "Đồ uống", sub: "Sinh tố", price: 39000, image: "images/sinhtochuoi.jpg" },
  { id: 81, name: "Cánh Gà sốt cay (size L)", category: "Ăn vặt", sub: "Gà rán", price: 42000, image: "images/canhgasotcay.jpg" },
  { id: 82, name: "Phở Vifon (ít đường)", category: "Ăn đêm", sub: "Bún phở", price: 58000, image: "images/phovifon.jpg" },
  { id: 83, name: "Set BBQ Lớn (đóng gói)", category: "Đồ nướng", sub: "BBQ", price: 630000, image: "images/bbqlon.jpg" },
  { id: 84, name: "Sinh tố Cà chua (ít đường)", category: "Đồ uống", sub: "Nước ép", price: 24000, image: "images/sinhtocachua.jpg" },
  { id: 85, name: "Bim bim tôm nướng (size L)", category: "Ăn vặt", sub: "Bim bim", price: 15000, image: "images/bimbimtomnuong.jpg" },
  { id: 86, name: "Mỳ Cay Tôm (không đá)", category: "Ăn đêm", sub: "Mì cay", price: 59000, image: "images/mycaytom.jpg" },
  { id: 87, name: "Xiên bò nướng (ít đường)", category: "Đồ nướng", sub: "Thịt xiên", price: 46000, image: "images/xienbonuong.jpg" },
  { id: 88, name: "Trà sữa trân châu Hoàng Kim (size M)", category: "Đồ uống", sub: "Trà sữa", price: 43000, image: "images/trasuatranchauhoangkim.jpg" },
  { id: 89, name: "Cá viên chiên (giá tốt)", category: "Ăn vặt", sub: "khoai chiên", price: 30000, image: "images/cavienchien.jpg" },
  { id: 91, name: "Bào ngư nướng (phiên bản mới)", category: "Đồ nướng", sub: "Hải sản nướng", price: 37000, image: "images/baongunuong.jpg" },
  { id: 92, name: "Sinh Tố rau má (giá tốt)", category: "Đồ uống", sub: "Sinh tố", price: 37000, image: "images/sinhtorauma.jpg" },
  { id: 93, name: "Gà sốt cay (tặng kèm sốt)", category: "Ăn vặt", sub: "Gà rán", price: 33000, image: "images/gasotcay.jpg" },
  { id: 94, name: "Bún Thái Thập cẩm (thêm topping)", category: "Ăn đêm", sub: "Bún phở", price: 32000, image: "images/bunthaithapcam.jpg" },
  { id: 96, name: "Nước ép chuối (phiên bản mới)", category: "Đồ uống", sub: "Nước ép", price: 17000, image: "images/nuocepchuoi.jpg" },
  { id: 97, name: "Bim Bim Lays sườn nướng (phiên bản mới)", category: "Ăn vặt", sub: "Bim bim", price: 40000, image: "images/layssuonnuong.jpg" },
  { id: 98, name: "Mỳ cay Thập cẩm (size M)", category: "Ăn đêm", sub: "Mì cay", price: 22000, image: "images/mycaythapcam.jpg" },
  { id: 99, name: "Thịt xiên tiêu (đóng gói)", category: "Đồ nướng", sub: "Thịt xiên", price: 64000, image: "images/thitxientieu.jpg" },
  { id: 100, name: "Trà sữa Dừa nướng (giá tốt)", category: "Đồ uống", sub: "Trà sữa", price: 46000, image: "images/trasuaduanuong.jpg" },
  { id: 101, name: "Thịt heo sốt chua ngọt (phiên bản mới)", category: "Ăn vặt", sub: "khoai chiên", price: 18000, image: "images/thitheochuangot.jpg" },
  { id: 102, name: "Lẩu cà chua (giá tốt)", category: "Ăn đêm", sub: "Lẩu", price: 440000, image: "images/laucachua.jpg" },
  { id: 103, name: "Ghẹ Nướng siêu cay (tặng kèm sốt)", category: "Đồ nướng", sub: "Hải sản nướng", price: 70000, image: "images/ghenuongsieucay.jpg" },
  { id: 104, name: "Sinh Tố chuối (ít đường)", category: "Đồ uống", sub: "Sinh tố", price: 48000, image: "images/sinhtochuoi.jpg" },
  { id: 105, name: "Gà Chiên tỏi ớt (size L)", category: "Ăn vặt", sub: "Gà rán", price: 39000, image: "images/gachientoiot.jpg" },
  { id: 106, name: "Bún Thái Mọc (giá tốt)", category: "Ăn đêm", sub: "Bún phở", price: 43000, image: "images/bunthaimoc.jpg" },
  { id: 107, name: "Set Nướng cá nhân (size L)", category: "Đồ nướng", sub: "BBQ", price: 73000, image: "images/setnuongcanhan.jpg" },
  { id: 108, name: "Nước ép Dâu Tây (giá tốt)", category: "Đồ uống", sub: "Nước ép", price: 23000, image: "images/nuocepdautay.jpg" },
  { id: 109, name: "Bánh Tráng Lắc sate cay (tặng kèm sốt)", category: "Ăn vặt", sub: "Bim bim", price: 38000, image: "images/banhtranglacsate.jpg" },
  { id: 110, name: "Mỳ Cay Đùi Gà (thêm topping)", category: "Ăn đêm", sub: "Mì cay", price: 26000, image: "images/mycayduiga.jpg" },
  { id: 111, name: "Xiên Bò Rau củ (tặng kèm sốt)", category: "Đồ nướng", sub: "Thịt xiên", price: 62000, image: "images/xienboraucu.jpg" },
  { id: 112, name: "Trà Sữa MAMBO (đóng gói)", category: "Đồ uống", sub: "Trà sữa", price: 14000, image: "images/trasuamambo.jpg" },
  { id: 113, name: "Nem chua rán (tặng kèm sốt)", category: "Ăn vặt", sub: "khoai chiên", price: 25000, image: "images/nemchuaran.jpg" },
  { id: 114, name: "Lẩu Thập Cẩm (Tặng kèm sốt)", category: "Ăn đêm", sub: "Lẩu", price: 669000, image: "images/lauthapcam.jpg" },
  { id: 115, name: "Tôm Hùm Nướng Phomai (phiên bản mới)", category: "Đồ nướng", sub: "Hải sản nướng", price: 85000, image: "images/tomhumnuongphomai.jpg" },
  { id: 116, name: "Sinh Tố mãng Cầu (tặng kèm sốt)", category: "Đồ uống", sub: "Sinh tố", price: 53000, image: "images/sinhtomangcau.jpg" },
  { id: 117, name: "Gà Rán Sốt Bơ (thêm topping)", category: "Ăn vặt", sub: "Gà rán", price: 37000, image: "images/gasotbo.jpg" },
  { id: 118, name: "Bún Chả Nướng (giá tốt)", category: "Ăn đêm", sub: "Bún phở", price: 35000, image: "images/bunchanuong.jpg" },
  { id: 119, name: "BBQ Tổng Hợp (đóng gói)", category: "Đồ nướng", sub: "BBQ", price: 480900, image: "images/bbqtonghop.jpg" },
  { id: 120, name: "Nước ép Đào (không đá)", category: "Đồ uống", sub: "Nước ép", price: 24000, image: "images/nuocepdao.jpg" },
];
const CART_KEY = "cart_v1";
const USERS_KEY = "users_v1";
const CURRENT_KEY = "currentUser_v1";
const ORDERS_KEY = "orders_v1";

const money = (n) => (Number(n) || 0).toLocaleString("vi-VN") + "đ";
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getQuery(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
// Giỏ hàngg
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const found = cart.find(i => i.id === productId);
  if (found) found.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
}
function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}
function setQty(productId, qty) {
  const cart = getCart();
  const found = cart.find(i => i.id === productId);
  if (!found) return;
  found.qty = qty;
  if (found.qty <= 0) removeFromCart(productId);
  else saveCart(cart);
}
function cartCount() {
  return getCart().reduce((s, i) => s + (i.qty || 0), 0);
}
function cartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function updateCartCount() {
  const el = document.getElementById("cart-count") || document.getElementById("cartCount");
  if (el) {
    const count = cartCount();
    el.textContent = count;
    if (count > 0) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  }
}
// người dùng, lưu tài khoản
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_KEY));
  } catch {
    return null;
  }
}
function setCurrentUser(u) {
  if (!u) localStorage.removeItem(CURRENT_KEY);
  else localStorage.setItem(CURRENT_KEY, JSON.stringify(u));
}
// hiển thị liên kết đăng nhập/tài khoản
function renderAuthLink() {
  const links = $$("[id='authLink']");
  const user = getCurrentUser();

  links.forEach(link => {
    if (user) {
      link.textContent = user.name;
      link.href = "account.html";
    } else {
      link.textContent = "Đăng nhập";
      link.href = "login.html";
    }
  });
}
// quản lý đơn hàng
function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch {
    return [];
  }
}
function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}
function getUserOrders() {
  const user = getCurrentUser();
  if (!user) return [];
  const allOrders = getOrders();
  return allOrders.filter(o => o.userId === user.id);
}
// menu danh mục
function initMenuToggle() {
  document.querySelectorAll('.category-header.has-sub').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('open');
    });
  });
}
// lọc vàs sắp xếp sản phẩm trang chủ
const state = {
  q: "",
  category: "ALL",
  sub: "",
  sort: "default",
  priceRange: "ALL",
  page: 1,
  perPage: 8,
};
function applyFilters(list) {
  let out = [...list];

  const q = state.q.trim().toLowerCase();
  if (q) out = out.filter(p => p.name.toLowerCase().includes(q));

  if (state.category !== "ALL") {
    out = out.filter(p => p.category === state.category);
    if (state.sub) out = out.filter(p => p.sub === state.sub);
  }

  if (state.priceRange !== "ALL") {
    const [min, max] = state.priceRange.split("-").map(Number);
    out = out.filter(p => p.price >= min && p.price <= max);
  }

  if (state.sort === "price_asc") out.sort((a, b) => a.price - b.price);
  if (state.sort === "price_desc") out.sort((a, b) => b.price - a.price);
  if (state.sort === "name_asc") out.sort((a, b) => a.name.localeCompare(b.name, "vi"));

  return out;
}
// hiển thị sản phẩm trang chủ
function renderProductsHome() {
  const grid = document.getElementById("productGrid");
  const pagi = document.getElementById("pagination");
  if (!grid || !pagi) return;

  const filtered = applyFilters(PRODUCTS);
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.perPage;
  const pageItems = filtered.slice(start, start + state.perPage);

  grid.innerHTML = pageItems.map(p => `
    <article class="product-card">
      <span class="product-badge">${p.badge || ""}</span>
      <div class="product-img-wrapper">
        <img class="product-img" src="${p.image}" alt="${p.name}">
      </div>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-price">
        <span class="price-main">${money(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : ''}
      </div>
      <div class="product-actions">
        <a class="btn-outline" href="product-detail.html?id=${p.id}">Xem chi tiết</a>
        <button class="btn-primary" data-add="${p.id}" type="button">Thêm vào giỏ</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-add"));
      addToCart(id, 1);
      alert("Đã thêm vào giỏ hàng!");
    });
  });

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(`<button class="page-btn ${i === state.page ? 'active' : ''}" data-page="${i}" type="button">${i}</button>`);
  }
  pagi.innerHTML = buttons.join("");

  pagi.querySelectorAll("[data-page]").forEach(b => {
    b.addEventListener("click", () => {
      state.page = Number(b.getAttribute("data-page"));
      renderProductsHome();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
// khởi tạo điều khiển lọc, sắp xếp trang chủ
function initHomeControls() {
  const searchInput = $("#searchInput");
  const searchBtn = $("#searchBtn");
  const sortSelect = $("#sortSelect");
  const priceFilter = $("#priceFilter");
  const clearFilter = $("#clearFilter");

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", () => {
      state.q = searchInput.value;
      state.page = 1;
      renderProductsHome();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchBtn.click();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      state.page = 1;
      renderProductsHome();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", () => {
      state.priceRange = priceFilter.value;
      state.page = 1;
      renderProductsHome();
    });
  }

  document.querySelectorAll(".category-header[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-item").forEach(li => li.classList.remove("active"));
      btn.parentElement.classList.add("active");

      state.category = btn.getAttribute("data-category");
      state.sub = "";
      state.page = 1;
      renderProductsHome();
    });
  });

  document.querySelectorAll(".subcategory-list li[data-category]").forEach(li => {
    li.addEventListener("click", () => {
      state.category = li.getAttribute("data-category");
      state.sub = li.getAttribute("data-sub") || "";
      state.page = 1;
      renderProductsHome();
    });
  });

  if (clearFilter) {
    clearFilter.addEventListener("click", () => {
      state.q = "";
      state.category = "ALL";
      state.sub = "";
      state.sort = "default";
      state.priceRange = "ALL";
      state.page = 1;

      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "default";
      if (priceFilter) priceFilter.value = "ALL";

      document.querySelectorAll(".category-item").forEach(li => li.classList.remove("active"));
      const first = document.querySelector(".category-item");
      if (first) first.classList.add("active");

      renderProductsHome();
    });
  }
}
// hiển thị giỏ hàng trang giỏ hàng
function renderCartPage() {
  const box = document.getElementById("cartPage");
  if (!box) return;

  const cart = getCart();
  if (cart.length === 0) {
    box.innerHTML = `<p class="muted">Giỏ hàng đang trống. <a href="index.html">Quay lại mua sắm</a></p>`;
    return;
  }

  const rows = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return "";
    return `
      <tr>
        <td>
          <div style="display:flex; gap:10px; align-items:center;">
            <img src="${p.image}" alt="${p.name}" style="width:56px;height:56px;object-fit:cover;border-radius:6px;border:2px solid var(--border);">
            <div>
              <div style="font-weight:bold">${p.name}</div>
              <div class="muted">${p.category} • ${p.sub}</div>
            </div>
          </div>
        </td>
        <td>${money(p.price)}</td>
        <td>
          <div class="qty">
            <button class="btn-outline" data-dec="${p.id}" type="button">-</button>
            <input type="number" min="1" value="${item.qty}" data-qty="${p.id}">
            <button class="btn-outline" data-inc="${p.id}" type="button">+</button>
          </div>
        </td>
        <td style="font-weight:700;color:var(--danger);">${money(p.price * item.qty)}</td>
        <td><button class="btn-outline" data-remove="${p.id}" type="button">Xóa</button></td>
      </tr>
    `;
  }).join("");

  box.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <div class="total-box">Tổng: ${money(cartTotal())}</div>

    <div class="cart-actions">
      <a class="btn-outline" href="index.html">← Tiếp tục mua</a>
      <a class="btn-primary" href="checkout.html">Thanh toán</a>
    </div>
  `;

  box.querySelectorAll("[data-inc]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-inc"));
      const current = getCart().find(i => i.id === id)?.qty || 1;
      setQty(id, current + 1);
      renderCartPage();
    });
  });

  box.querySelectorAll("[data-dec]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-dec"));
      const current = getCart().find(i => i.id === id)?.qty || 1;
      setQty(id, current - 1);
      renderCartPage();
    });
  });

  box.querySelectorAll("[data-qty]").forEach(inp => {
    inp.addEventListener("change", () => {
      const id = Number(inp.getAttribute("data-qty"));
      const v = Number(inp.value || 1);
      setQty(id, v);
      renderCartPage();
    });
  });

  box.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-remove"));
      removeFromCart(id);
      renderCartPage();
    });
  });
}
function renderDetailPage() {
  const root = document.getElementById("detailPage");
  if (!root) return;

  const id = Number(getQuery("id"));
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) {
    root.innerHTML = `<p class="muted">Không tìm thấy sản phẩm. <a href="index.html">Về trang chủ</a></p>`;
    return;
  }

  root.innerHTML = `
    <div class="detail">
      <div>
        <img class="detail-img" src="${p.image}" alt="${p.name}">
      </div>
      <div>
        <div class="badge">${p.badge || "SP"}</div>
        <h2>${p.name}</h2>
        <p class="muted">Danh mục: <b>${p.category}</b> • <b>${p.sub}</b></p>
        <div style="margin:15px 0;">
          <span class="price-main" style="font-size:24px;">${money(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old" style="font-size:16px;">${money(p.oldPrice)}</span>` : ''}
        </div>

        <div class="qty" style="margin:15px 0;">
          <span class="muted" style="font-weight:600;">Số lượng:</span>
          <input id="detailQty" type="number" min="1" value="1">
        </div>

        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:20px;">
          <button class="btn-primary" id="detailAdd" type="button">Thêm vào giỏ</button>
          <a class="btn-outline" href="cart.html">Xem giỏ hàng</a>
          <a class="btn-outline" href="index.html">← Quay lại</a>
        </div>

        <hr style="margin:20px 0;border:none;border-top:2px solid var(--border);">
        <p class="muted" style="line-height:1.8;">
          <strong>Mô tả:</strong> Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác biệt về màu sắc và kích thước do điều kiện ánh sáng và đo lường khi chụp ảnh và sản xuất. Mong các bạn thông cảm!
        </p>
      </div>
    </div>
  `;

  $("#detailAdd").addEventListener("click", () => {
    const qty = Math.max(1, Number($("#detailQty").value || 1));
    addToCart(p.id, qty);
    alert("Đã thêm vào giỏ hàng!");
  });
}
function renderCheckoutPage() {
  const box = document.getElementById("checkoutPage");
  if (!box) return;

  const cart = getCart();
  if (cart.length === 0) {
    box.innerHTML = `<p class="muted">Chưa có sản phẩm để thanh toán. <a href="index.html">Mua hàng</a></p>`;
    return;
  }

  const itemsHtml = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return "";
    return `<li style="padding:8px 0;">${p.name} × ${item.qty} — <b style="color:var(--danger);">${money(p.price * item.qty)}</b></li>`;
  }).join("");

  const user = getCurrentUser();

  box.innerHTML = `
    <h2 style="margin-bottom:15px;">Thanh toán</h2>
    <p class="muted">Tổng cộng: <b style="font-size:20px;color:var(--danger);">${money(cartTotal())}</b></p>
    <ul style="margin:15px 0 20px 20px;line-height:1.8;">${itemsHtml}</ul>

    <form class="form" id="checkoutForm">
      <div class="form-row">
        <label>Họ tên *</label>
        <input name="name" required value="${user?.name || ""}" placeholder="Nhập họ tên">
      </div>
      <div class="form-row">
        <label>Số điện thoại *</label>
        <input name="phone" required placeholder="VD: 09xx..." />
      </div>
      <div class="form-row">
        <label>Địa chỉ *</label>
        <input name="address" required placeholder="Nhập địa chỉ giao hàng" />
      </div>
      <div class="form-row">
        <label>Phương thức thanh toán *</label>
        <select name="payment" required>
          <option value="COD">COD (nhận hàng trả tiền)</option>
          <option value="BANK">Chuyển khoản</option>
        </select>
      </div>
      <div class="form-row">
        <label>Ghi chú</label>
        <textarea name="note" placeholder="Ghi chú thêm (không bắt buộc)"></textarea>
      </div>

      <div class="form-actions">
        <a class="btn-outline" href="cart.html">← Quay lại giỏ</a>
        <button class="btn-primary" type="submit">Đặt hàng</button>
      </div>
    </form>
  `;

  $("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const user = getCurrentUser();

    const order = {
      id: "OD" + Date.now(),
      userId: user ? user.id : null,
      name: fd.get("name"),
      phone: fd.get("phone"),
      address: fd.get("address"),
      payment: fd.get("payment"),
      note: fd.get("note") || "",
      total: cartTotal(),
      items: getCart(),
      createdAt: new Date().toISOString(),
      status: "Đang xử lý"
    };
    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);

    localStorage.removeItem(CART_KEY);
    updateCartCount();

    alert("Đặt hàng thành công! Mã đơn: " + order.id);
    window.location.href = "account.html";
  });
}
function renderAccountPage() {
  const box = document.getElementById("accountPage");
  if (!box) return;

  const user = getCurrentUser();
  if (!user) {
    box.innerHTML = `
      <div style="text-align:center;padding:40px 20px;">
        <p class="muted" style="margin-bottom:20px;">Bạn chưa đăng nhập. Vui lòng đăng nhập để xem tài khoản.</p>
        <a class="btn-primary" href="login.html">Đăng nhập ngay</a>
      </div>
    `;
    return;
  }

  const orders = getUserOrders();
  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);

  const ordersHtml = orders.length > 0 ? orders.map(order => `
    <div class="order-item">
      <div class="order-header">
        <div>
          <div class="order-id">Mã đơn: ${order.id}</div>
          <div class="muted" style="font-size:13px;margin-top:5px;">
            ${new Date(order.createdAt).toLocaleString('vi-VN')}
          </div>
        </div>
        <div class="order-status">${order.status}</div>
      </div>
      <div class="order-details">
        <div><strong>Người nhận:</strong> ${order.name}</div>
        <div><strong>Điện thoại:</strong> ${order.phone}</div>
        <div><strong>Địa chỉ:</strong> ${order.address}</div>
        <div><strong>Thanh toán:</strong> ${order.payment}</div>
        ${order.note ? `<div><strong>Ghi chú:</strong> ${order.note}</div>` : ''}
        <div style="margin-top:10px;"><strong>Tổng tiền:</strong> <span style="color:var(--danger);font-size:18px;font-weight:800;">${money(order.total)}</span></div>
      </div>
    </div>
  `).join("") : '<div class="no-orders">Bạn chưa có đơn hàng nào.</div>';

  box.innerHTML = `
    <div class="account-container">
      <div class="account-header">
        <div class="account-avatar">👤</div>
        <div class="account-name">${user.name}</div>
        <div class="account-email">${user.email}</div>
      </div>

      <div class="account-grid">
        <div class="account-card">
          <div class="account-card-icon">📦</div>
          <div class="account-card-title">Đơn hàng</div>
          <div class="account-card-value">${orders.length} đơn</div>
        </div>

        <div class="account-card">
          <div class="account-card-icon">💰</div>
          <div class="account-card-title">Tổng chi tiêu</div>
          <div class="account-card-value">${money(totalSpent)}</div>
        </div>

        <div class="account-card">
          <div class="account-card-icon">🛒</div>
          <div class="account-card-title">Giỏ hàng</div>
          <div class="account-card-value">${cartCount()} món</div>
        </div>
      </div>

      <div class="account-section">
        <h3>Lịch sử đơn hàng</h3>
        ${ordersHtml}
      </div>

      <div style="text-align:center;margin-top:30px;">
        <button class="btn-outline" id="logoutBtn" type="button">Đăng xuất</button>
      </div>
    </div>
  `;

  const logoutBtn = $("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn đăng xuất?")) {
        setCurrentUser(null);
        alert("Đã đăng xuất!");
        window.location.href = "index.html";
      }
    });
  }
}

function initLoginPage() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const pass = String(fd.get("pass") || "").trim();

    const users = getUsers();
    const u = users.find(x => x.email === email && x.pass === pass);
    if (!u) return alert("Sai email hoặc mật khẩu!");

    setCurrentUser({ id: u.id, name: u.name, email: u.email });
    alert("Đăng nhập thành công!");
    window.location.href = "account.html";
  });
}

function initRegisterPage() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const pass = String(fd.get("pass") || "").trim();

    if (!name || !email || !pass) return alert("Vui lòng nhập đủ thông tin!");

    const users = getUsers();
    if (users.some(u => u.email === email)) return alert("Email đã tồn tại!");

    const newUser = { id: Date.now(), name, email, pass };
    users.push(newUser);
    saveUsers(users);

    alert("Đăng ký thành công! Hãy đăng nhập.");
    window.location.href = "login.html";
  });
}
function initEffects() {
  const path = location.pathname.split("/").pop() || "index.html";
  const links = $('[data-nav]');
  links.forEach(a => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    if (href === path) a.classList.add("is-active");
  });

  const header = $(".header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-shadow", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const menuBtn = $("[data-menu-btn]");
  const mobileNav = $("[data-mobile-nav]");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => mobileNav.classList.toggle("is-open"));
    mobileNav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) mobileNav.classList.remove("is-open");
    });
  }

  let toTopBtn = $(".to-top");
  if (!toTopBtn) {
    toTopBtn = document.createElement("button");
    toTopBtn.className = "to-top";
    toTopBtn.innerHTML = "↑";
    toTopBtn.type = "button";
    document.body.appendChild(toTopBtn);
  }

  const onScroll = () => toTopBtn.classList.toggle("is-show", window.scrollY > 400);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderAuthLink();
  initMenuToggle();
  initHomeControls();
  renderProductsHome();
  renderCartPage();
  renderDetailPage();
  renderCheckoutPage();
  renderAccountPage();
  initLoginPage();
  initRegisterPage();
  initEffects();
});